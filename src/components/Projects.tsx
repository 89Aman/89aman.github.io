import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { Github } from './ui/icons';

export interface Project {
  title: string;
  description: string;
  fullDescription: string[];
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: string[];
}

const PROJECTS: Project[] = [
  {
    title: 'AgentTrustLedger',
    description: 'Neutral escrow-and-reputation protocol and verification layer for autonomous agent-to-agent transactions.',
    fullDescription: [
      'Engineered an autonomous escrow protocol allowing AI agents to book, procure, and settle transactions safely',
      'Cryptographic state transitions and deterministic audit trails for multi-agent workflows',
      'FastAPI microservices architecture with persistent transactional ledger',
    ],
    tech: ['Python', 'FastAPI', 'Autonomous Agents', 'Cryptography', 'Pydantic v2'],
    github: 'https://github.com/89Aman/AgentTrustLedger',
    featured: true,
    category: ['AI / Multi-Agent', 'Cloud & Infra'],
  },
  {
    title: 'ContextLens',
    description: 'AI-driven developer companion capturing coding intent, tracking development episodes, and generating project telemetry.',
    fullDescription: [
      'Captures granular development intent and aggregates coding episodes into searchable context graphs',
      'Provides unified dashboard insights and interactive CLI telemetry for multi-agent workflows',
      'Vector semantic search over commit logs and codebase modifications',
    ],
    tech: ['Python', 'FastAPI', 'Vector Search', 'CLI', 'RAG'],
    github: 'https://github.com/89Aman/Contextlens',
    featured: true,
    category: ['AI / Multi-Agent', 'RAG & Search'],
  },
  {
    title: 'TalentLens',
    description: 'Intelligent candidate evaluation and ranking system replacing keyword filtering with comparative LLM reasoning.',
    fullDescription: [
      'Replaces rigid keyword-matching with semantic 384-dim vector retrieval and comparative LLM evaluations',
      'Deep rubric scoring and resume parsing pipeline with sub-second matching response',
      'Production API with persistent candidate evaluation records',
    ],
    tech: ['Python', 'FastAPI', 'Gemini 1.5 Flash', 'ChromaDB', 'Vector Search'],
    github: 'https://github.com/89Aman/Talentlens',
    featured: true,
    category: ['AI / Multi-Agent', 'RAG & Search', 'Full-Stack'],
  },
  {
    title: 'Parivesh 3.0',
    description: 'Environmental Clearance workflow engine with React + FastAPI, Supabase PostgreSQL, and AI-generated MoM briefs.',
    fullDescription: [
      'Decoupled React (Vite + Tailwind) frontend with role-isolated dashboards for Admin, Proponent, Scrutiny, and MoM teams',
      'FastAPI backend with async SQLAlchemy + Supabase PostgreSQL enforcing a finite-state machine for EC lifecycle',
      'AI auto-gist generation for meeting briefs using Google Generative AI with secured OpenAPI docs and JWT authentication',
      'Docker + Cloud Build artifacts for Cloud Run deployment; built for e-summit IIIT Naya Raipur hackathon',
    ],
    tech: ['FastAPI', 'React', 'TailwindCSS', 'PostgreSQL', 'Supabase', 'SQLAlchemy', 'JWT', 'Google GenAI'],
    github: 'https://github.com/89Aman/Parivesh-3.0',
    featured: true,
    category: ['Full-Stack', 'AI / Multi-Agent', 'Cloud & Infra', 'Hackathon'],
  },
  {
    title: 'Knowledge Vault',
    description: 'Production semantic search engine with RAG pipeline. Dense 384-dim embeddings + hybrid scoring yielding 40% relevance boost.',
    fullDescription: [
      'Engineered production-grade semantic search system with RAG pipeline',
      'Hybrid scoring: vector similarity + keyword density + temporal recency → 40% relevance improvement over baseline',
      'JWT auth + OAuth 2.0 using Authlib, ChromaDB memory-mapped vector indexes',
      'Deployed on GCP Cloud Run with Docker; sub-200ms query response SLA',
    ],
    tech: ['FastAPI', 'ChromaDB', 'Gemini 1.5 Flash', 'sentence-transformers', 'GCP Cloud Run', 'Docker', 'JWT'],
    github: 'https://github.com/89Aman/Knowledge-vault',
    live: 'https://amanworks.runs-on.dev',
    featured: true,
    category: ['AI / Multi-Agent', 'RAG & Search', 'Cloud & Infra', 'Full-Stack'],
  },
  {
    title: 'CampusFix',
    description: 'Smart campus facility management platform built for GDG Solution Challenge. 500+ QPS FastAPI backend + Flutter.',
    fullDescription: [
      'FastAPI backend handling 500+ concurrent requests with real-time status state-machine workflows',
      'Flutter mobile app (Android/iOS) with camera capture and GPS location tagging',
      'Interactive admin dashboard with role-based access control (RBAC)',
      'Supabase PostgreSQL + Supabase Storage + OAuth 2.0 + JWT, deployed on GCP Cloud Run',
    ],
    tech: ['FastAPI', 'Flutter', 'Supabase PostgreSQL', 'GCP Cloud Run', 'Docker', 'JWT'],
    github: 'https://github.com/89Aman/CampusFix',
    featured: true,
    category: ['Full-Stack', 'Cloud & Infra', 'Hackathon'],
  },
];

const FILTERS = ['All', 'AI / Multi-Agent', 'RAG & Search', 'Full-Stack', 'Cloud & Infra', 'Hackathon'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-[#0D0D12]/90 relative border-t border-[#1F1F2C] backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A24] border border-[#2A2A35] text-[#4F98A3] text-xs font-mono mb-4">
              <FolderGit2 size={13} />
              <span>Production Systems &amp; Repositories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-display">Featured Projects</h2>
            <p className="text-[#797876] mt-2 max-w-xl text-sm">
              Production systems and open-source repositories spanning multi-agent protocols, semantic RAG search, and high-concurrency microservices.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === filter
                    ? 'bg-[#4F98A3] text-[#0D0D12] font-semibold shadow-md shadow-[#4F98A3]/20'
                    : 'bg-[#1A1A24] text-[#A1A1AA] border border-[#2A2A35] hover:text-white hover:border-[#4F98A3]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl bg-[#13131A] border border-[#2A2A35] hover:border-[#4F98A3] transition-all duration-300 flex flex-col justify-between p-6 group hover:shadow-xl hover:shadow-[#4F98A3]/5"
            >
              <div>
                {/* Card Top: Badges & Links */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#4F98A3]/10 border border-[#4F98A3]/30 text-[#4F98A3] text-[11px] font-mono">
                        <Sparkles size={11} /> Featured
                      </span>
                    )}
                    <span className="text-[11px] text-[#797876] font-mono">
                      {project.category[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-md bg-[#1A1A24] border border-[#2A2A35] flex items-center justify-center text-[#797876] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
                        aria-label="GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-md bg-[#1A1A24] border border-[#2A2A35] flex items-center justify-center text-[#797876] hover:text-[#6DBF8F] hover:border-[#6DBF8F] transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4F98A3] transition-colors font-display">
                  {project.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-6 text-xs text-[#797876]">
                  {project.fullDescription.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#4F98A3] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1F1F2C]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-[#1A1A24] text-[11px] font-mono text-[#A1A1AA] border border-[#2A2A35]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
