import React, { useState } from 'react';
import { Terminal, Cpu, Code2, Cloud, Wrench, Database } from 'lucide-react';

interface LanguageProficiency {
  name: string;
  level: number;
  highlight: string;
  tag: string;
}

interface SkillItem {
  name: string;
  tag?: string;
  note?: string;
}

interface SkillGroup {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
  languages?: LanguageProficiency[];
  items?: SkillItem[];
}

const CATEGORIES: SkillGroup[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: Terminal,
    color: '#4F98A3',
    description: 'Core programming languages with focus on high concurrency, async pipelines, and memory efficiency.',
    languages: [
      { name: 'Python', level: 96, highlight: 'AsyncIO · uv · FastAPI · PyTorch', tag: 'Primary' },
      { name: 'SQL', level: 88, highlight: 'PostgreSQL · Query Optimization · Supabase', tag: 'Data' },
      { name: 'JavaScript', level: 82, highlight: 'React · Modern Web · DOM APIs', tag: 'Frontend' },
      { name: 'Dart', level: 75, highlight: 'Flutter · Mobile State Management', tag: 'Mobile' },
    ],
  },
  {
    id: 'ai-agents',
    name: 'AI / ML & Multi-Agent',
    icon: Cpu,
    color: '#8B7EC8',
    description: 'Autonomous agent swarms, vector retrieval engines, and semantic intelligence pipelines.',
    items: [
      { name: 'Autonomous Multi-Agent Swarms', tag: 'Core', note: 'DAG task decomposition & consensus' },
      { name: 'RAG Architectures', tag: 'Production', note: 'Dense 384-dim + BM25 RRF hybrid search' },
      { name: 'ChromaDB Vector Store', tag: 'Infra' },
      { name: 'Google Gemini 1.5/2.5 Flash', tag: 'LLM' },
      { name: 'LangChain & GenAI SDK', tag: 'Tooling' },
      { name: 'PyTorch & scikit-learn', tag: 'ML' },
      { name: 'Sentence-Transformers', tag: 'Embeddings' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & APIs',
    icon: Code2,
    color: '#6DBF8F',
    description: 'Backend web frameworks, async APIs, and reactive frontend architectures.',
    items: [
      { name: 'FastAPI', tag: 'Expert', note: 'Pydantic v2, async DB pools, 500+ QPS' },
      { name: 'React', tag: 'Frontend', note: 'Modern UI, hooks, TailwindCSS' },
      { name: 'Flutter', tag: 'Cross-Platform', note: 'Android/iOS apps' },
      { name: 'Flask', tag: 'Backend' },
      { name: 'SQLAlchemy (Async)', tag: 'ORM' },
      { name: 'RESTful API Engineering', tag: 'Architecture' },
      { name: 'Piston API Integration', tag: 'Sandboxed Code Runner' },
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    color: '#F59E42',
    description: 'Cloud-native deployments on GCP and AWS, Docker containers, and CI/CD pipelines.',
    items: [
      { name: 'GCP Cloud Run', tag: 'Production', note: 'Containerized auto-scaling microservices' },
      { name: 'GCP Vertex AI', tag: 'AI Platform' },
      { name: 'AWS (EC2, S3, Lambda)', tag: 'Certified' },
      { name: 'Docker & Multi-Stage Builds', tag: 'Containers' },
      { name: 'GitHub Actions & runs-on.dev', tag: 'CI/CD' },
      { name: 'Linux / Bash Systems', tag: 'Systems' },
    ],
  },
  {
    id: 'tooling-dx',
    name: 'Modern Tooling & DX',
    icon: Wrench,
    color: '#4F98A3',
    description: 'Blazingly fast modern Python tooling, security protocols, and dev workflows.',
    items: [
      { name: 'uv (Astral)', tag: '10x Faster', note: 'Next-gen Python package management' },
      { name: 'Ruff', tag: 'Linter' },
      { name: 'Pydantic v2', tag: 'Validation' },
      { name: 'JWT & OAuth 2.0 (Authlib)', tag: 'Security' },
      { name: 'Postman', tag: 'API Expert Certified' },
      { name: 'Git & GitHub Workflows', tag: 'VCS' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    icon: Database,
    color: '#E879F9',
    description: 'Relational, document, and vector databases optimized for scale and low latency.',
    items: [
      { name: 'PostgreSQL', tag: 'Relational' },
      { name: 'Supabase (PostgreSQL + Auth)', tag: 'BaaS' },
      { name: 'MongoDB', tag: 'Certified', note: 'MongoDB Python Developer Path' },
      { name: 'ChromaDB', tag: 'Vector Store' },
      { name: 'MySQL', tag: 'SQL' },
      { name: 'Cloud SQL', tag: 'Managed GCP' },
    ],
  },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const displayedCategories =
    activeTab === 'all'
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-[#13131A]/90 relative border-t border-[#1F1F2C] backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A24] border border-[#2A2A35] text-[#4F98A3] text-xs font-mono mb-4">
            <span>Verified Toolchains</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Technical Stack</h2>
          <p className="text-[#797876] max-w-2xl mx-auto text-base">
            Hands-on expertise across backend architectures, multi-agent workflows, cloud systems, and vector search.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-[#4F98A3] text-[#0D0D12] font-semibold shadow-md shadow-[#4F98A3]/20'
                  : 'bg-[#1A1A24] text-[#A1A1AA] border border-[#2A2A35] hover:text-white hover:border-[#4F98A3]'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#4F98A3] text-[#0D0D12] font-semibold shadow-md shadow-[#4F98A3]/20'
                    : 'bg-[#1A1A24] text-[#A1A1AA] border border-[#2A2A35] hover:text-white hover:border-[#4F98A3]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="p-6 rounded-xl bg-[#1A1A24] border border-[#2A2A35] hover:border-[#4F98A3] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg bg-[#0D0D12] border border-[#2A2A35] flex items-center justify-center"
                      style={{ color: cat.color }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base font-display">{cat.name}</h3>
                      <p className="text-[11px] text-[#797876] line-clamp-1">{cat.description}</p>
                    </div>
                  </div>

                  {/* Languages Progress Bars */}
                  {cat.languages && (
                    <div className="space-y-4 my-4">
                      {cat.languages.map((lang) => (
                        <div key={lang.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-white font-medium">{lang.name}</span>
                            <span className="text-[#4F98A3]">{lang.tag}</span>
                          </div>
                          <div className="h-1.5 w-full bg-[#0D0D12] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#4F98A3] to-[#6DBF8F] rounded-full transition-all duration-1000"
                              style={{ width: `${lang.level}%` }}
                            />
                          </div>
                          <div className="text-[11px] text-[#797876]">{lang.highlight}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Regular Items List */}
                  {cat.items && (
                    <div className="space-y-2.5 my-4">
                      {cat.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-[#13131A] border border-[#2A2A35]/60 hover:border-[#2A2A35] transition-colors"
                        >
                          <div>
                            <span className="text-xs text-[#CDCCCA] font-medium block">{item.name}</span>
                            {item.note && <span className="text-[11px] text-[#797876] block">{item.note}</span>}
                          </div>
                          {item.tag && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0D0D12] text-[#4F98A3] border border-[#2A2A35] shrink-0 ml-2">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
