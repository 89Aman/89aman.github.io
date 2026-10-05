import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowDown,
  Download,
  RotateCcw,
  Send,
  Mail,
  CheckCircle2,
  Terminal as TerminalIcon,
} from 'lucide-react';
import { Github, Linkedin } from './ui/icons';

const ROLES = [
  'AI Systems & Backend Architect',
  'Autonomous Multi-Agent Engineer',
  'Python & Cloud Infrastructure Engineer',
];

const QUICK_COMMANDS = ['aman --status', 'aman --architecture', 'aman --agents', 'uv run test', 'projects'];

interface TerminalHistoryItem {
  prompt: string;
  command: string;
  output: string[];
  isError?: boolean;
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<TerminalHistoryItem[]>([
    {
      prompt: '$',
      command: 'aman --status',
      output: [
        'Name:     Aman Sharma',
        'Role:     AI Systems & Backend Architect',
        'Location: Raipur, CG, India',
        'Stack:    Python (uv) · FastAPI · RAG & ChromaDB · GCP · AWS',
        'Status:   Open to high-impact ML/Backend internships & collabs',
      ],
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = ROLES[roleIndex];

    if (isTyping) {
      if (displayRole.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayRole(current.slice(0, displayRole.length + 1));
        }, 45);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2400);
      }
    } else {
      if (displayRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayRole(displayRole.slice(0, -1));
        }, 25);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsTyping(true);
        timeout = setTimeout(() => { }, 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayRole, isTyping, roleIndex]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();
    let output: string[] = [];
    let isError = false;

    if (lower === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (lower === 'help') {
      output = [
        'Available commands:',
        '  aman --status        View current role & contact telemetry',
        '  aman --architecture  Inspect system architecture & engine design',
        '  aman --agents        Inspect autonomous multi-agent swarm architecture',
        '  uv run test          Simulate lightning-fast Python package resolution',
        '  roast                Run the anti-roast verification engine',
        '  projects             List top pinned production repositories',
        '  clear                Clear terminal history',
      ];
    } else if (lower === 'aman --status' || lower === 'status') {
      output = [
        'Name:     Aman Sharma',
        'Role:     AI Systems & Backend Architect',
        'Location: Raipur, CG, India',
        'Focus:    Python (uv) · FastAPI · RAG & Vector DBs · Multi-Agent',
        'Swarm:    4 Active Nodes (Planner · ContextLens · Executor · Guard)',
        'Status:   Open to high-impact ML/Backend internships & collabs',
      ];
    } else if (lower === 'aman --architecture' || lower === 'architecture' || lower === 'arch') {
      output = [
        'Core System Architecture:',
        '› Core Runtime:  Python 3.12 (AsyncIO, uv package manager)',
        '› Backend APIs:  FastAPI (Pydantic v2, streaming SSE endpoints)',
        '› AI Pipeline:   Autonomous Multi-Agent Swarms, RAG, ChromaDB',
        '› Cloud/Infra:   GCP Cloud Run, Docker, AWS S3/EC2, Supabase',
        '› Protocols:     Cryptographic Agent Audit Trails, Vector Similarity',
      ];
    } else if (lower === 'aman --agents' || lower === 'agents') {
      output = [
        'Orchestrator: Multi-Agent Swarm Engine',
        '› [Planner]      DAG task decomposition with state-graph workflows',
        '› [ContextLens]  384-dim dense vector retrieval & context compression',
        '› [Executor]     Python & FastAPI high-concurrency sandboxed dispatch',
        '› [RepoGuard]    AST invariant validation & safety gate',
        'Status: All 4 nodes synchronized · 0 dropped frames',
      ];
    } else if (lower === 'uv run test' || lower === 'uv' || lower === 'uv test') {
      output = [
        'uv 0.4.18 (Astral blazingly-fast package manager)',
        'Using Python 3.12.3 in .venv',
        'Resolved 48 packages in 12ms · audited in 4ms',
        'Running test suite via pytest -v...',
        '  test_agent_dag_execution ........... PASSED [0.08s]',
        '  test_rag_vector_search ............. PASSED [0.04s]',
        '  test_fastapi_concurrency_500qps .... PASSED [0.12s]',
        '  test_react_component_tree ......... PASSED [0.01s]',
        'Result: 4 passed in 0.25s (100% pass rate)',
      ];
    } else if (lower === 'roast') {
      output = [
        '> Roast Response: "Digital ghost town? Tired of centering divs?"',
        '› Div centering: Sub-pixel precision validated across all viewports.',
        '› Context engine: Operating at 100% token headroom.',
        '› Multi-agent swarm: 4 nodes actively orchestrating.',
        '› uv dependency sync: 48 packages resolved in 12ms (not weeks).',
        '› RAG retrieval: Sub-200ms query response SLA on GCP.',
        'Conclusion: Backend flex upgraded to interactive React dominance.',
      ];
    } else if (lower === 'projects') {
      output = [
        'Top Featured Projects:',
        '1. AgentTrustLedger   Verifiable escrow & reputation protocol for agents',
        '2. ContextLens        Developer context engine & searchable intent graph',
        '3. TalentLens         LLM comparative candidate reasoning & vector search',
        '4. Parivesh 3.0       GovTech EC workflow engine (FastAPI + Supabase)',
        '5. Knowledge Vault    Production RAG engine (<200ms latency, GCP Cloud Run)',
        '6. CampusFix          Smart facility platform (500+ QPS, GDG Challenge)',
        'Type "help" or click "View Projects" to explore details.',
      ];
    } else {
      isError = true;
      output = [`command not found: "${cmd}". Type "help" for available commands.`];
    }

    setTerminalHistory((prev) => [
      ...prev,
      {
        prompt: '$',
        command: cmd,
        output,
        isError,
      },
    ]);
    setTerminalInput('');

    setTimeout(() => {
      if (terminalBodyRef.current) {
        terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
      }
    }, 20);
  };

  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navbarHeight = 80;
      const offset = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen w-full flex items-center relative overflow-hidden pt-28 pb-16">
      {/* Subtle grid backdrop with high transparency */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(79, 152, 163, 0.25) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center">
          {/* Top: Hero Copy */}
          <div className="w-full max-w-4xl space-y-6 text-center md:text-left mb-12 md:mb-16">


            {/* Main Name Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none font-display">
              Aman <span className="text-[#4F98A3]">Sharma</span>
            </h1>

            {/* Typewriter Role */}
            <div className="h-10 flex items-center justify-center md:justify-start">
              <span className="text-lg md:text-2xl text-[#CDCCCA] font-medium font-mono">
                › {displayRole}
                <span className="animate-pulse text-[#4F98A3] font-bold">_</span>
              </span>
            </div>

            {/* Bio One-Liner */}
            <p className="text-base md:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed mx-auto md:mx-0">
              Architecting autonomous multi-agent systems, engineering production-grade RAG pipelines,
              and building resilient backends with Python, FastAPI, and uv — deployed on GCP Cloud Run and AWS.
            </p>

            {/* CTA Buttons & Social Proof */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="px-6 py-3 bg-[#4F98A3] text-[#0D0D12] rounded-lg font-semibold hover:bg-[#6DBF8F] transition-all flex items-center gap-2 shadow-lg shadow-[#4F98A3]/15 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="https://linkedin.com/in/sharmaaman012"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#2A2A35] text-[#9E9D9A] hover:text-white rounded-lg font-medium hover:bg-[#1A1A24] transition-all flex items-center gap-2"
              >
                <Download size={16} />
                <span>Resume / Bio</span>
              </a>

              <div className="flex items-center gap-2.5 ml-0 md:ml-4">
                <a
                  href="https://github.com/89Aman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#9E9D9A] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/sharmaaman012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#9E9D9A] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:shasarita23@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#9E9D9A] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Terminal (Below Hero Copy, full width & spacious) */}
          <div className="w-full max-w-5xl">
            <div className="rounded-2xl bg-[#13131A]/95 border border-[#2A2A35] shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Terminal Header */}
              <div className="px-5 py-3.5 bg-[#1A1A24] border-b border-[#2A2A35] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80"></span>
                  <span className="text-xs font-mono text-[#9E9D9A] ml-2">aman@edge:~</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0D0D12] text-[#6DBF8F] border border-[#2A2A35]">
                    uv v0.4.18
                  </span>
                  <button
                    onClick={() => handleCommand('clear')}
                    title="Clear terminal"
                    aria-label="Clear terminal output"
                    className="text-[#9E9D9A] hover:text-white transition-colors"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>

              {/* Quick Command Chips (Full width & clear) */}
              <div className="px-5 py-3 bg-[#0D0D12] border-b border-[#2A2A35] flex flex-wrap items-center gap-2 text-xs font-mono scrollbar-none no-scrollbar">
                <span className="text-[#9E9D9A] shrink-0 mr-1 font-semibold">Quick run:</span>
                {QUICK_COMMANDS.map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand(cmd)}
                    className="px-3 py-1.5 rounded-lg bg-[#1A1A24] text-[#4F98A3] hover:bg-[#4F98A3] hover:text-[#0D0D12] transition-colors border border-[#2A2A35] shrink-0 font-mono shadow-sm"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Log Area */}
              <div ref={terminalBodyRef} className="p-5 font-mono text-xs md:text-sm max-h-80 overflow-y-auto space-y-3 bg-[#0D0D12]/60 scroll-smooth scrollbar-none no-scrollbar">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-[#9E9D9A]">
                      <span className="text-[#6DBF8F]">{item.prompt}</span>
                      <span className="text-white font-medium">{item.command}</span>
                    </div>
                    {item.output.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        className={
                          item.isError
                            ? 'text-red-400 pl-4'
                            : line.startsWith('›')
                              ? 'text-[#4F98A3] pl-2 font-medium'
                              : line.startsWith('Name:') || line.startsWith('Role:') || line.startsWith('Stack:')
                                ? 'text-[#CDCCCA] pl-2'
                                : 'text-[#A1A1AA] pl-4'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Terminal Interactive Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand(terminalInput);
                }}
                className="px-5 py-3.5 bg-[#13131A] border-t border-[#2A2A35] flex items-center gap-3"
              >
                <span className="text-[#6DBF8F] font-mono text-xs">$</span>
                <input
                  id="terminal-command-input"
                  name="terminal-command"
                  aria-label="Terminal command line input"
                  type="text"
                  autoComplete="off"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type command (e.g. 'help', 'aman --architecture', 'projects')..."
                  className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-[#9E9D9A]"
                />
                <button
                  type="submit"
                  className="text-[#9E9D9A] hover:text-[#4F98A3] transition-colors"
                  aria-label="Send command"
                >
                  <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
