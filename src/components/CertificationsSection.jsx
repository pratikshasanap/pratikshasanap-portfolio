import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle, ExternalLink, Cloud, Server, Lock, DollarSign, Cpu } from 'lucide-react';
import RoughAnnotation from './RoughAnnotation';

export default function CertificationsSection({ theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [activeDomain, setActiveDomain] = useState(0);

  const certifiedDomains = [
    {
      title: 'Cloud Architecture & Global Infrastructure',
      icon: Cloud,
      stat: 'Multi-AZ Design',
      description: 'Designing fault-tolerant, resilient architectures across AWS Availability Zones and Regions adhering to the AWS Well-Architected Framework.',
      competencies: [
        'Decoupled microservice architectures using Amazon SQS and SNS',
        'Auto-scaling compute clusters with AWS ECS Fargate and EC2',
        'Global content distribution via Amazon CloudFront and Route 53',
        'Zero-maintenance serverless event-driven execution using AWS Lambda'
      ]
    },
    {
      title: 'Security, Identity & Compliance',
      icon: Lock,
      stat: 'Least-Privilege IAM',
      description: 'Enforcing strict zero-trust security postures, IAM role assumption, AWS KMS envelope encryption, and compliance governance.',
      competencies: [
        'Granular IAM policies, role-based access control, and AWS Organizations SCPs',
        'Data encryption at rest and in transit using AWS KMS and TLS certificates',
        'Network layer segmentation with isolated private VPC subnets and Security Groups',
        'Audit trails and compliance monitoring via AWS CloudTrail and AWS Config'
      ]
    },
    {
      title: 'Data Storage & Vector Databases',
      icon: Server,
      stat: '99.999999999% Durability',
      description: 'High-durability storage topologies optimized for high-throughput AI document ingestion, vector caching, and relational database persistence.',
      competencies: [
        'Amazon S3 tiered lifecycle management for raw document corpus and model artifacts',
        'Managed relational persistence with Amazon RDS PostgreSQL Multi-AZ',
        'Low-latency distributed vector and session caching with Amazon ElastiCache Redis',
        'Scalable serverless vector search integrations with Amazon OpenSearch Serverless'
      ]
    },
    {
      title: 'Cost Governance & Financial Operations',
      icon: DollarSign,
      stat: 'FinOps Optimization',
      description: 'Systematic infrastructure right-sizing, compute savings plans, budget alarm automation, and cost attribution per workload.',
      competencies: [
        'Automated cost monitoring using AWS Budgets and CloudWatch anomaly detection',
        'Right-sizing serverless compute and container memory allocation',
        'TCO reduction via Compute Savings Plans and Spot Instances for batch jobs',
        'Cost allocation tagging for microservice and team attribution'
      ]
    },
    {
      title: 'Enterprise GenAI on AWS',
      icon: Cpu,
      stat: 'Foundation Model Ready',
      description: 'Architecting scalable generative AI pipelines utilizing AWS-native artificial intelligence services and managed model endpoints.',
      competencies: [
        'Amazon Bedrock integration for multi-model inference and prompt orchestration',
        'SageMaker real-time serverless endpoints for custom transformer models',
        'Secure document processing pipelines with Amazon Textract and Comprehend',
        'Event-driven vector embeddings generation via AWS Lambda and S3 triggers'
      ]
    }
  ];

  return (
    <section id="certification" className={`py-24 px-6 border-t transition-colors duration-500 ${
      isDark ? 'bg-[#000000] border-[#2c2c2e] text-[#f5f5f7]' : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f]'
    }`}>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4 border text-[#0071e3] border-[#0071e3]/30 bg-[#0071e3]/10">
            <Award className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Verified Credentials</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
          }`}>
            AWS Certified.{' '}
            <RoughAnnotation
              type="box"
              color="#ff9f0a"
              show={true}
              strokeWidth={2}
            >
              <span>Cloud Practitioner.</span>
            </RoughAnnotation>
          </h2>

          <p className={`text-base sm:text-lg font-light leading-relaxed ${
            isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
          }`}>
            Formally certified by Amazon Web Services in core cloud architecture, security, compute, high-availability data infrastructure, and cost governance.
          </p>
        </div>

        {/* Big Certified Badge Banner */}
        <div className={`rounded-3xl p-8 sm:p-12 border mb-12 relative overflow-hidden transition-all ${
          isDark 
            ? 'bg-gradient-to-r from-[#1c1c1e] via-[#161617] to-[#1c1c1e] border-[#ff9f0a]/30 shadow-2xl shadow-black/80' 
            : 'bg-gradient-to-r from-[#ffffff] via-[#f5f5f7] to-[#ffffff] border-[#ff9f0a]/30 shadow-xl shadow-slate-200'
        }`}>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-[#ff9f0a] to-[#ffb340] p-1 flex items-center justify-center shadow-lg shadow-[#ff9f0a]/30 shrink-0">
                <div className="w-full h-full rounded-[22px] bg-[#000000] flex flex-col items-center justify-center p-2 text-center">
                  <Cloud className="w-8 h-8 text-[#ff9f0a] mb-1" />
                  <span className="text-[10px] font-mono font-extrabold text-[#ffffff] uppercase tracking-tighter">AWS Certified</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff9f0a]">Amazon Web Services Credential</span>
                  <ShieldCheck className="w-4 h-4 text-[#30d158]" />
                </div>
                <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 ${
                  isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
                }`}>
                  AWS Certified Cloud Practitioner
                </h3>
                <p className={`text-xs sm:text-sm font-light max-w-xl ${
                  isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
                }`}>
                  Comprehensive validation of cloud fluency, security frameworks, multi-tenant architectures, and enterprise cloud operations.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className={`px-4 py-2 rounded-2xl border text-xs font-mono text-center ${
                isDark ? 'bg-[#000000]/60 border-[#2c2c2e] text-[#86868b]' : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#6e6e73]'
              }`}>
                <span className="block font-bold text-[#30d158]">Active & Verified</span>
                <span>AWS Credential ID</span>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Domain Breakdown Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Domain Selection Tabs (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="text-xs font-mono text-[#86868b] uppercase tracking-wider px-2 mb-2">
              Verified Architectural Domains
            </span>
            {certifiedDomains.map((domain, idx) => {
              const Icon = domain.icon;
              const isSelected = activeDomain === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDomain(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? isDark
                        ? 'bg-[#1c1c1e] border-[#ff9f0a]/50 text-[#f5f5f7] shadow-lg shadow-black/50'
                        : 'bg-[#ffffff] border-[#ff9f0a]/60 text-[#1d1d1f] shadow-md shadow-slate-200'
                      : isDark
                        ? 'bg-[#161617]/60 border-[#2c2c2e] text-[#86868b] hover:text-[#f5f5f7]'
                        : 'bg-[#ffffff]/60 border-[#d2d2d7] text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      isSelected
                        ? 'bg-[#ff9f0a]/20 border-[#ff9f0a]/40 text-[#ff9f0a]'
                        : isDark
                          ? 'bg-[#2c2c2e] border-white/5 text-[#86868b]'
                          : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#6e6e73]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold tracking-tight">{domain.title}</h4>
                      <span className="text-[10px] font-mono text-[#ff9f0a]">{domain.stat}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Domain Detail Card (Right 7 cols) */}
          <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 border min-h-[380px] flex flex-col justify-between transition-all ${
            isDark 
              ? 'bg-[#161617]/90 border-[#2c2c2e] text-[#f5f5f7]' 
              : 'bg-[#ffffff] border-[#d2d2d7] text-[#1d1d1f] shadow-lg'
          }`}>
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2c2c2e]/60 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff9f0a] block mb-1">
                    Domain Spec 0{activeDomain + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    {certifiedDomains[activeDomain].title}
                  </h3>
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                  isDark ? 'bg-[#2c2c2e] border-white/10 text-[#ff9f0a]' : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#ff9f0a]'
                }`}>
                  {certifiedDomains[activeDomain].stat}
                </span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 font-light ${
                isDark ? 'text-[#a1a1a6]' : 'text-[#424245]'
              }`}>
                {certifiedDomains[activeDomain].description}
              </p>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#86868b] block mb-2">
                  Key Production Capabilities
                </span>
                {certifiedDomains[activeDomain].competencies.map((comp, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-[#ff9f0a] shrink-0 mt-0.5" />
                    <span className={isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'}>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-4 border-t text-xs font-mono flex items-center justify-between ${
              isDark ? 'border-[#2c2c2e] text-[#86868b]' : 'border-[#d2d2d7] text-[#6e6e73]'
            }`}>
              <span>AWS Cloud Practitioner Core Standard</span>
              <span className="text-[#ff9f0a] font-semibold">Production Ready Architecture</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
