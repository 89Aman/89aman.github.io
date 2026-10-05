import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-angular';

interface TerminalLine {
  prompt: string;
  command: string;
  output?: string[];
  isError?: boolean;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly RESUME_URL =
    'https://drive.usercontent.google.com/u/0/uc?id=1LO0fVyxn3xZ_yaNzM4fX9Y1Dhz4KtrAY&export=download';

  readonly roles = [
    'Autonomous Multi-Agent Architect',
    'Prefix-Caching & LLM Researcher',
    'FastAPI & Go Concurrency Engineer',
    'Production RAG Systems Builder',
    'Cloud-Native Infrastructure (GCP + AWS)',
  ];

  readonly ArrowDown = ArrowDown;
  readonly Download = Download;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Terminal = Terminal;
  readonly Play = Play;
  readonly RotateCcw = RotateCcw;
  readonly Sparkles = Sparkles;
  readonly EMAIL_ADDRESS = 'shasarita23@gmail.com';

  socialLinks = [
    { icon: Github, href: 'https://github.com/89Aman', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sharmaaman012/', label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${this.EMAIL_ADDRESS}`, label: 'Email' },
  ];

  displayRole = signal('');
  private roleIndex = 0;
  private isTyping = true;
  private typingTimer: ReturnType<typeof setTimeout> | null = null;

  // Interactive Terminal State
  terminalInput = '';
  terminalHistory = signal<TerminalLine[]>([
    {
      prompt: '$',
      command: 'aman --status',
      output: [
        'Name:     Aman Sharma',
        'Role:     Autonomous Multi-Agent Architect & Backend Engineer',
        'Location: Raipur, CG, India',
        'Stack:    FastAPI · Go · Python (uv) · GCP · RAG & vLLM',
        'Research: Prefix-Caching Latency Optimization (7.3x TTFT)',
        'Swarm:    4 Active Nodes (Planner · ContextLens · Executor · Guard)',
        'Status:   Open to high-impact ML/Backend internships & collabs',
      ],
    },
  ]);

  quickCommands = [
    'aman --status',
    'aman --agents',
    'aman --benchmarks',
    'uv run test',
    'roast',
  ];

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  private startTypingAnimation() {
    const currentRole = this.roles[this.roleIndex];
    if (this.isTyping) {
      if (this.displayRole().length < currentRole.length) {
        this.displayRole.set(currentRole.slice(0, this.displayRole().length + 1));
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 45);
      } else {
        this.isTyping = false;
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 2500);
      }
    } else {
      if (this.displayRole().length > 0) {
        this.displayRole.set(this.displayRole().slice(0, -1));
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 25);
      } else {
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.isTyping = true;
        this.typingTimer = setTimeout(() => this.startTypingAnimation(), 400);
      }
    }
  }

  runCommand(cmdString?: string) {
    const rawCmd = (cmdString || this.terminalInput).trim();
    if (!rawCmd) return;

    const lower = rawCmd.toLowerCase();
    let outputLines: string[] = [];
    let isError = false;

    if (lower === 'clear') {
      this.terminalHistory.set([]);
      this.terminalInput = '';
      return;
    } else if (lower === 'help') {
      outputLines = [
        'Available commands:',
        '  aman --status      View current role, stack & contact telemetry',
        '  aman --agents      Inspect autonomous multi-agent swarm status',
        '  aman --benchmarks  View prefix-caching latency & TTFT benchmarks',
        '  uv run test        Simulate lightning-fast Python package resolution',
        '  roast              Run the anti-roast verification engine',
        '  projects           List top pinned production repositories',
        '  clear              Clear terminal history',
      ];
    } else if (lower === 'aman --status' || lower === 'status') {
      outputLines = [
        'Name:     Aman Sharma',
        'Role:     Autonomous Multi-Agent Architect & Backend Engineer',
        'Location: Raipur, CG, India',
        'Stack:    FastAPI · Go · Python (uv) · GCP · RAG & vLLM',
        'Research: Prefix-Caching Latency Optimization (7.3x TTFT)',
        'Swarm:    4 Active Nodes (Planner · ContextLens · Executor · Guard)',
        'Status:   Open to high-impact ML/Backend internships & collabs',
      ];
    } else if (lower === 'aman --agents' || lower === 'agents') {
      outputLines = [
        'Orchestrator: Multi-Agent Swarm (Noventra Labs)',
        '› [Planner]      DAG task decomposition with prefix-stable schemas',
        '› [ContextLens]  384-dim dense + BM25 RRF hybrid retrieval & KV reuse',
        '› [Executor]     Go & FastAPI high-concurrency sandboxed dispatch',
        '› [RepoGuard]    AST invariant validation & safety gate',
        'Status: All 4 nodes synchronized · 0 dropped frames',
      ];
    } else if (lower === 'aman --benchmarks' || lower === 'benchmarks') {
      outputLines = [
        'Research Benchmark: Prefix-Caching Latency in LLM Serving',
        '› TTFT (Time-To-First-Token):  42ms cached vs 310ms cold  [7.3x Speedup]',
        '› KV-Cache Hit Ratio:         89.4% cross-turn reuse',
        '› GPU VRAM Peak Overhead:     -37.7% reduction',
        '› Sustained Throughput:       1,420 tokens/sec @ 100 QPS',
        'Verdict: Latency eliminated via deterministic prefix boundaries',
      ];
    } else if (lower === 'uv run test' || lower === 'uv' || lower === 'uv test') {
      outputLines = [
        'uv 0.4.18 (Astral blazingly-fast package manager)',
        'Using Python 3.12.3 in .venv',
        'Resolved 48 packages in 12ms · audited in 4ms',
        'Running test suite via pytest -v...',
        '  test_agent_dag_execution ........... PASSED [0.08s]',
        '  test_prefix_cache_retention ........ PASSED [0.04s]',
        '  test_fastapi_concurrency_500qps .... PASSED [0.12s]',
        '  test_div_centering_subpixel ........ PASSED [0.01s]',
        'Result: 4 passed in 0.25s (100% pass rate)',
      ];
    } else if (lower === 'roast') {
      outputLines = [
        '🔥 Roast Response: "Digital ghost town? Tired of centering divs?"',
        '› Div centering: Validated with sub-pixel precision across all screens.',
        '› Context engine: Operating at 100% token headroom.',
        '› Multi-agent swarm: 4 nodes actively orchestrating.',
        '› uv dependency sync: 48 packages resolved in 12ms (not weeks).',
        '› Prefix-cache: 7.3x faster TTFT than your favorite chatbot.',
        'Conclusion: Backend flex upgraded to full-stack dominance.',
      ];
    } else if (lower === 'projects') {
      outputLines = [
        'Top Featured Projects:',
        '1. Parivesh 3.0       GovTech EC workflow engine (FastAPI + Supabase)',
        '2. Knowledge Vault    Production RAG engine (<200ms latency, GCP)',
        '3. CampusFix          GDG Solution Challenge (500+ QPS, Flutter + Angular)',
        '4. RAG-DEMO           FDA Drug label assistant (Gemini 2.5 Flash)',
        '5. SkillSnap          The Forge 24h Hackathon code assessment platform',
        'Type "help" or click "View Projects" below to explore details.',
      ];
    } else {
      isError = true;
      outputLines = [
        `command not found: "${rawCmd}".`,
        'Type "help" to view all available commands.',
      ];
    }

    this.terminalHistory.update((hist) => [
      ...hist,
      {
        prompt: '$',
        command: rawCmd,
        output: outputLines,
        isError,
      },
    ]);

    this.terminalInput = '';
  }

  scrollToSection(event: Event, targetId: string) {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
}
