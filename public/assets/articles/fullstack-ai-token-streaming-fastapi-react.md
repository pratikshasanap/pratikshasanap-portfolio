---
id: fullstack-ai-token-streaming-fastapi-react
title: "Fullstack AI: Streaming LLM Tokens from FastAPI to React via Server-Sent Events"
category: Fullstack Engineering
readTime: 6 min read
date: October 2026
author: Pratiksha Sanap
excerpt: A comprehensive architectural blueprint for streaming LLM tokens with sub-100ms latency from Python FastAPI backends to React frontend interfaces using Server-Sent Events and custom hooks.
---

# Fullstack AI: Streaming LLM Tokens from FastAPI to React via Server-Sent Events

When building interactive AI applications, waiting several seconds for a full model response degrades user experience. Token streaming displays the response as it is generated, giving immediate feedback.

This article details how to build an end-to-end token streaming pipeline using FastAPI on the backend and React on the frontend.

## 1. Choosing Server-Sent Events Over WebSockets

While WebSockets support full bi-directional communication, Server-Sent Events (SSE) offer key advantages for generative AI chat:

* **Simpler Transport:** SSE operates over standard HTTP/1.1 or HTTP/2 without protocol upgrades.
* **Firewall Friendly:** SSE bypasses corporate proxy and firewall blocks that frequently drop WebSocket connections.
* **Native Reconnection:** Browser clients automatically attempt reconnection if network connection drops.
* **Lower Overhead:** For request-response workflows with unidirectional streaming, SSE uses fewer connection resources.

## 2. FastAPI Async Streaming Generator

FastAPI pairs with Starlette's `StreamingResponse` to deliver chunks over HTTP:

```python
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import asyncio
import json

app = FastAPI()

class ChatRequest(BaseModel):
    prompt: str
    temperature: float = 0.7

async def stream_tokens(prompt: str):
    try:
        # Connect to LLM inference provider
        response = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            stream=True
        )
        
        async for chunk in response:
            content = chunk.choices[0].delta.content or ""
            if content:
                payload = json.dumps({"token": content})
                yield f"data: {payload}\n\n"
                
        yield "data: [DONE]\n\n"
    except Exception as e:
        yield f"data: {json.dumps({'error': str(e)})}\n\n"

@app.post("/api/chat/stream")
async def chat_stream(req: ChatRequest):
    return StreamingResponse(
        stream_tokens(req.prompt),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no" # Prevents NGINX from buffering chunks
        }
    )
```

The header `X-Accel-Buffering: no` is essential when deploying behind reverse proxies like NGINX or AWS ALB. Without it, the proxy buffers chunks until a threshold (often 4KB), breaking streaming.

## 3. Building the React Custom Hook (`useLLMStream`)

On the frontend, we use the Fetch API with `ReadableStreamDefaultReader` and `TextDecoder` to handle chunks without blocking the UI thread:

```javascript
import { useState, useCallback, useRef } from 'react';

export function useLLMStream() {
  const [output, setOutput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const startStream = useCallback(async (prompt) => {
    setOutput('');
    setError(null);
    setIsStreaming(true);

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n\n');
        buffer = lines.pop(); // Keep unfinished chunk in buffer

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const dataStr = line.replace('data: ', '').trim();
          if (dataStr === '[DONE]') break;

          try {
            const parsed = JSON.parse(dataStr);
            if (parsed.token) {
              setOutput((prev) => prev + parsed.token);
            }
          } catch (e) {
            // Partial JSON handling
          }
        }
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setIsStreaming(false);
    }
  }, []);

  const stopStream = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return { output, isStreaming, error, startStream, stopStream };
}
```

## 4. Preventing Layout Shift and UI Flickering

Rapid updates to React state can trigger heavy DOM recalculations. To keep rendering smooth:

1. **CSS Text-Wrap:** Apply `text-wrap: pretty` or `overflow-wrap: break-word` to markdown blocks so newly appended characters do not cause surrounding containers to reflow.
2. **Scroll Lock:** Track user scroll position. If the user scrolls up to review prior text, pause automatic auto-scroll so the viewport does not jump abruptly.

## Key Implementation Rules

By pairing FastAPI's asynchronous generators with React's stream decoders, you achieve real-time response speeds and a smooth user experience.
