import React, { useState, useEffect } from 'react';
import ProductHeaderNav from './components/ProductHeaderNav';
import ProductHeroSection from './components/ProductHeroSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import ArchitecturalCompetencies from './components/ArchitecturalCompetencies';
import ArticlesCarousel from './components/ArticlesCarousel';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      return 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans antialiased overflow-x-hidden selection:bg-[#0c66e4] selection:text-white ${
      theme === 'dark' 
        ? 'bg-[#0b1120] text-[#e2e8f0]' 
        : 'bg-[#fafbfc] text-[#172b4d]'
    }`}>
      
      {/* Sticky Atlassian Navigation */}
      <ProductHeaderNav 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Overview */}
        <ProductHeroSection theme={theme} />

        {/* 2. Featured Projects (Multi-PDF RAG Flagship) */}
        <FeaturedProjectsSection theme={theme} />

        {/* 3. Architectural Competencies & Pillars */}
        <ArchitecturalCompetencies theme={theme} />

        {/* 4. Deep-Dive Architecture Articles */}
        <ArticlesCarousel theme={theme} />

        {/* 5. Contact Form Section */}
        <ContactFormSection theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

    </div>
  );
}
