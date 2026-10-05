import React from 'react';
import { Calendar, Briefcase, Trophy, Sparkles, ExternalLink, Code2, Award } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  type: 'Active Development' | 'Hackathon' | 'Personal Milestone';
  bullets: string[];
  tech: string[];
  icon: React.ElementType;
  color: string;
  link?: string;
}

const TIMELINE: TimelineItem[] = [
  {
    date: 'April 2026',
    title: 'Smart Resource Allocation Engine',
    type: 'Active Development',
    bullets: [
      'Architecting private resource allocation and optimization engine in Dart/Flutter',
      'Implementing heuristic scheduling algorithms for dynamic workload distribution',
      'Active development of real-time coordination layer powered by Vertex AI',
    ],
    tech: ['Dart', 'Flutter', 'Vertex AI', 'Algorithms'],
    icon: Sparkles,
    color: '#4F98A3',
    link: 'https://github.com/89Aman/Smart-Resource-Allocation',
  },
  {
    date: 'March 2026',
    title: 'AgentTrustLedger — Autonomous Agent Escrow',
    type: 'Personal Milestone',
    bullets: [
      'Designed neutral escrow-and-reputation protocol for autonomous agent-to-agent transactions',
      'Cryptographic verification layer ensuring transactional integrity across multi-agent swarms',
      'FastAPI microservices architecture with deterministic audit trails',
    ],
    tech: ['Python', 'FastAPI', 'Autonomous Agents', 'Pydantic v2'],
    icon: Code2,
    color: '#8B7EC8',
    link: 'https://github.com/89Aman/AgentTrustLedger',
  },
  {
    date: 'February 2026',
    title: 'Knowledge Vault — Semantic Search Engine',
    type: 'Personal Milestone',
    bullets: [
      'Engineered production-grade RAG pipeline using 384-dimensional sentence-transformers',
      'Hybrid scoring (dense vector + keyword density + recency) yielding 40% relevance boost over cosine distance',
      'Deployed containerized microservices on GCP Cloud Run with sub-200ms query response SLA',
    ],
    tech: ['FastAPI', 'ChromaDB', 'Gemini 1.5 Flash', 'GCP Cloud Run', 'Docker'],
    icon: Code2,
    color: '#6DBF8F',
    link: 'https://github.com/89Aman/Knowledge-vault',
  },
  {
    date: 'February 2026',
    title: 'SkillSnap — The Forge Hackathon',
    type: 'Hackathon',
    bullets: [
      'Built AI skill assessment platform in 24 hours under intense hackathon conditions',
      'Integrated Gemini API for gap evaluation and Piston API for multi-language sandboxed code execution',
      'Full-stack architecture with FastAPI backend and Cloud SQL persistence',
    ],
    tech: ['React', 'FastAPI', 'Gemini API', 'Piston API', 'Cloud SQL'],
    icon: Trophy,
    color: '#F59E42',
    link: 'https://github.com/89Aman/SkillSnap',
  },
  {
    date: 'January 2026',
    title: 'CampusFix — GDG Solution Challenge',
    type: 'Hackathon',
    bullets: [
      'Engineered smart campus facility management platform handling 500+ concurrent requests',
      'Decoupled architecture: Flutter mobile app (GPS + camera), web admin dashboard, FastAPI backend',
      'Deployed on GCP Cloud Run with Supabase PostgreSQL, OAuth 2.0, and JWT authentication',
    ],
    tech: ['FastAPI', 'Flutter', 'Supabase', 'Cloud Run'],
    icon: Trophy,
    color: '#4F98A3',
    link: 'https://github.com/89Aman/CampusFix',
  },
  {
    date: 'January 2026',
    title: 'Parivesh 3.0 — e-summit IIIT Naya Raipur',
    type: 'Hackathon',
    bullets: [
      'Competed in e-summit hackathon hosted by IIIT Naya Raipur on environmental clearance problem statement',
      'FastAPI backend with async SQLAlchemy + Supabase PostgreSQL enforcing an FSM clearance lifecycle',
      'Automated AI meeting briefs (Gist/MoM) using Google Generative AI',
    ],
    tech: ['FastAPI', 'React', 'TailwindCSS', 'Supabase', 'Google GenAI'],
    icon: Trophy,
    color: '#8B7EC8',
    link: 'https://github.com/89Aman/Parivesh-3.0',
  },
  {
    date: '2024 – Present',
    title: 'Core Systems Engineering & Certifications',
    type: 'Personal Milestone',
    bullets: [
      'Engineering autonomous agent architectures, RAG pipelines, and high-concurrency microservices',
      'Earned AWS Generative AI, MongoDB Python Developer, Postman Student Expert, and ML certifications',
      'Contributing to open-source agent ecosystems and developer productivity tooling',
    ],
    tech: ['AI Agents', 'RAG', 'AWS Certified', 'MongoDB', 'FastAPI'],
    icon: Award,
    color: '#E879F9',
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 bg-[#0D0D12]/90 relative border-t border-[#1F1F2C] backdrop-blur-sm">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A24] border border-[#2A2A35] text-[#4F98A3] text-xs font-mono mb-4">
            <Calendar size={13} />
            <span>Milestones &amp; Track Record</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">My Journey</h2>
          <p className="text-[#797876] max-w-xl mx-auto text-base">
            From hackathon wins to shipping production RAG systems and autonomous agent protocols.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-[#2A2A35] ml-4 md:ml-8 space-y-10 pl-6 md:pl-10">
          {TIMELINE.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Node icon on timeline line */}
                <div
                  className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#13131A] border-2 flex items-center justify-center transition-all group-hover:scale-110 shadow-lg shadow-black/50"
                  style={{ borderColor: item.color, color: item.color }}
                >
                  <IconComp size={15} />
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-xl bg-[#13131A] border border-[#2A2A35] hover:border-[#4F98A3] transition-all group-hover:shadow-xl group-hover:shadow-[#4F98A3]/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[#4F98A3] font-semibold">{item.date}</span>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#1A1A24] text-[#A1A1AA] border border-[#2A2A35] w-fit">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-display flex items-center gap-2">
                    <span>{item.title}</span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#797876] hover:text-[#4F98A3] transition-colors"
                        aria-label="View Project"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h3>

                  <ul className="space-y-1.5 mb-4 text-xs md:text-sm text-[#CDCCCA]">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#4F98A3] font-bold">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1F1F2C]">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#1A1A24] text-[11px] font-mono text-[#A1A1AA] border border-[#2A2A35]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
