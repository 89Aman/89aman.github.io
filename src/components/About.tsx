import React from 'react';
import { Rocket, Heart, Code2, Cloud, Cpu, Zap, Server } from 'lucide-react';

const STATS = [
  { icon: Rocket, value: '4', label: 'Production Systems' },
  { icon: Heart, value: '4', label: 'Verified Certifications' },
  { icon: Code2, value: '24+', label: 'GitHub Repositories' },
  { icon: Cloud, value: '2', label: 'Cloud Platforms (GCP + AWS)' },
];

const VALUES = [
  'Autonomous Multi-Agents',
  'Production RAG',
  'FastAPI (Async)',
  'Python 3.12 (uv)',
  'GCP Cloud Run',
  'AWS Cloud',
  'ChromaDB Vector Store',
  'Docker Sandboxes',
  'Event-Driven Architecture',
  'Noventra Labs',
];

const PILLARS = [
  {
    icon: Zap,
    title: 'Low-Latency Serving',
    description: 'Optimizing API response latency via async connection pooling, sub-200ms vector retrieval, and zero-allocation pipelines.',
  },
  {
    icon: Cpu,
    title: 'Autonomous Swarms',
    description: 'Designing deterministic multi-agent state machines with DAG task decomposition, verification gates, and consensus protocols.',
  },
  {
    icon: Server,
    title: 'Cloud-Native Scale',
    description: 'Deploying high-concurrency microservices (500+ QPS) on GCP Cloud Run and AWS with automated containerized CI/CD.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#13131A]/80 relative border-t border-[#1F1F2C] backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A24] border border-[#2A2A35] text-[#4F98A3] text-xs font-mono mb-4">
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">About Me</h2>
          <p className="text-[#797876] max-w-2xl mx-auto text-base">
            Building intelligent, production-ready AI infrastructure and high-throughput backends.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Profile Photo & Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4F98A3] to-[#6DBF8F] rounded-2xl opacity-25 group-hover:opacity-60 transition duration-500 blur-lg"></div>
              <div className="relative p-2 bg-[#1A1A24] rounded-2xl border border-[#2A2A35]">
                <img
                  src="https://avatars.githubusercontent.com/u/94701256?v=4"
                  alt="Aman Sharma"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#0D0D12]/90 backdrop-blur border border-[#2A2A35] flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-white font-mono">Aman Sharma</span>
                    <span className="text-[11px] text-[#4F98A3] font-mono">Disha College · Noventra Labs</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6DBF8F] animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-[#CDCCCA] leading-relaxed text-base">
              <p>
                Hi, I'm <strong className="text-white">Aman</strong> — an AI Systems and Backend Engineer based in Raipur, Chhattisgarh.
                Currently pursuing my Bachelor's in Computer Applications at Disha College (2024–2027), I engineer
                <strong className="text-[#4F98A3]"> autonomous multi-agent architectures</strong>,
                <strong className="text-[#4F98A3]"> production RAG pipelines</strong>, and high-concurrency backends using Python, FastAPI, and uv.
              </p>
              <p>
                I co-founded <strong className="text-white">Noventra Labs</strong> to build autonomous agentic workflows and production-grade intelligent systems.
                I regularly compete in hackathons — including building the <strong className="text-[#6DBF8F]">Parivesh 3.0</strong> environmental clearance engine at IIIT Naya Raipur's e-summit,
                the <strong className="text-[#6DBF8F]">CampusFix</strong> 500+ QPS platform for GDG Solution Challenge, and <strong className="text-[#6DBF8F]">SkillSnap</strong> for The Forge Hackathon.
              </p>
              <p className="text-sm text-[#797876]">
                Certified in AWS Generative AI, MongoDB Python Developer Path, Postman Student Expert, and Machine Learning Fundamentals.
                I believe software should be fast, deterministic, and built to solve real-world problems.
              </p>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {STATS.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-[#1A1A24] border border-[#2A2A35] text-center hover:border-[#4F98A3] transition-colors"
                  >
                    <IconComponent size={18} className="mx-auto mb-1.5 text-[#4F98A3]" />
                    <span className="block text-2xl font-bold text-white font-mono">{stat.value}</span>
                    <span className="text-[11px] text-[#797876] block leading-tight">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Values Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {VALUES.map((val) => (
                <span
                  key={val}
                  className="px-3 py-1 rounded-md bg-[#1A1A24] border border-[#2A2A35] text-[#A1A1AA] text-xs font-mono hover:text-[#4F98A3] hover:border-[#4F98A3] transition-colors"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Engineering Pillars */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {PILLARS.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-[#1A1A24] border border-[#2A2A35] hover:border-[#4F98A3] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0D0D12] border border-[#2A2A35] flex items-center justify-center text-[#4F98A3] mb-4 group-hover:scale-110 transition-transform">
                  <IconComp size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-[#797876] leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
