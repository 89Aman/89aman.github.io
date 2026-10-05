import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Cpu,
  Zap,
  Server,
  Network,
  ShieldCheck,
  Database,
  GitBranch,
  ArrowRight,
  Activity,
  Terminal,
  Layers,
  Sparkles,
  BarChart3,
  CheckCircle2,
} from 'lucide-angular';

interface BenchmarkMetric {
  label: string;
  cached: string;
  baseline: string;
  delta: string;
  improvement: string;
}

interface AgentNode {
  name: string;
  role: string;
  tech: string;
  status: 'active' | 'synced' | 'standby';
  description: string;
}

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './research.html',
  styleUrl: './research.css',
})
export class ResearchComponent {
  readonly Cpu = Cpu;
  readonly Zap = Zap;
  readonly Server = Server;
  readonly Network = Network;
  readonly ShieldCheck = ShieldCheck;
  readonly Database = Database;
  readonly GitBranch = GitBranch;
  readonly ArrowRight = ArrowRight;
  readonly Activity = Activity;
  readonly Terminal = Terminal;
  readonly Layers = Layers;
  readonly Sparkles = Sparkles;
  readonly BarChart3 = BarChart3;
  readonly CheckCircle2 = CheckCircle2;

  activeTab = signal<'benchmarks' | 'agents' | 'rag'>('benchmarks');

  benchmarks: BenchmarkMetric[] = [
    {
      label: 'Time-to-First-Token (TTFT)',
      cached: '42 ms',
      baseline: '310 ms',
      delta: '-268 ms',
      improvement: '7.3x faster',
    },
    {
      label: 'KV-Cache Hit Ratio',
      cached: '89.4%',
      baseline: '0% (cold)',
      delta: '+89.4%',
      improvement: 'High reuse',
    },
    {
      label: 'Throughput Under Load (100 QPS)',
      cached: '1,420 tok/s',
      baseline: '490 tok/s',
      delta: '+930 tok/s',
      improvement: '2.9x capacity',
    },
    {
      label: 'GPU VRAM Peak Allocation',
      cached: '14.2 GB',
      baseline: '22.8 GB',
      delta: '-37.7%',
      improvement: '38% less RAM',
    },
  ];

  agentSwarm: AgentNode[] = [
    {
      name: 'Planner Agent',
      role: 'Task Graph Synthesis',
      tech: 'FastAPI · Pydantic v2',
      status: 'active',
      description: 'Decomposes complex requests into deterministic DAG execution plans with prefix-stable prompt templates.',
    },
    {
      name: 'ContextLens',
      role: 'Prefix-Cache & RAG Router',
      tech: 'ChromaDB · sentence-transformers',
      status: 'active',
      description: 'Maintains KV-cache alignment across turns, hybrid dense + BM25 search with reciprocal rank fusion (RRF).',
    },
    {
      name: 'Executor Worker',
      role: 'High-Concurrency Runtime',
      tech: 'Go · uv · Docker Sandboxes',
      status: 'active',
      description: 'Executes sandboxed tool dispatch and async API calls with sub-millisecond dispatch latency.',
    },
    {
      name: 'RepoGuard',
      role: 'Consensus & Safety Verification',
      tech: 'AST Parsers · Invariant Checkers',
      status: 'synced',
      description: 'Verifies state integrity, validates outputs against strict security schemas before committing changes.',
    },
  ];

  setActiveTab(tab: 'benchmarks' | 'agents' | 'rag') {
    this.activeTab.set(tab);
  }
}
