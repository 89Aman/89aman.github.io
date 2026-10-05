import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Terminal,
  Code2,
  Cpu,
  Cloud,
  Database,
  Wrench,
  Sparkles,
  Zap,
} from 'lucide-angular';

interface LanguageProficiency {
  name: string;
  level: number;
  highlight: string;
  tag: string;
}

interface SkillGroup {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
  languages?: LanguageProficiency[];
  items?: { name: string; tag?: string; note?: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  readonly Terminal = Terminal;
  readonly Code2 = Code2;
  readonly Cpu = Cpu;
  readonly Cloud = Cloud;
  readonly Database = Database;
  readonly Wrench = Wrench;
  readonly Sparkles = Sparkles;
  readonly Zap = Zap;

  activeTab = signal<string>('all');

  categories: SkillGroup[] = [
    {
      id: 'languages',
      name: 'Languages',
      icon: Terminal,
      color: '#4F98A3',
      description: 'Core programming languages with focus on high concurrency and type safety.',
      languages: [
        { name: 'Python', level: 96, highlight: 'AsyncIO · uv · FastAPI · PyTorch', tag: 'Primary' },
        { name: 'Go', level: 82, highlight: 'Goroutines · HTTP/gRPC · Microservices', tag: 'High-Concurrency' },
        { name: 'SQL', level: 85, highlight: 'PostgreSQL · Query Optimization · Supabase', tag: 'Data' },
        { name: 'TypeScript', level: 75, highlight: 'Angular 17/21 · React · Type Safety', tag: 'Frontend' },
        { name: 'Dart', level: 70, highlight: 'Flutter · Mobile State Management', tag: 'Mobile' },
      ],
    },
    {
      id: 'ai-agents',
      name: 'AI / ML & Multi-Agent',
      icon: Cpu,
      color: '#8B7EC8',
      description: 'Autonomous agent swarms, prefix-caching latency optimization, and semantic retrieval systems.',
      items: [
        { name: 'Autonomous Multi-Agent Swarms', tag: 'Core', note: 'DAG task decomposition & consensus' },
        { name: 'Prefix-Caching & KV-Cache', tag: 'Research', note: '7.3x TTFT latency reduction' },
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
        { name: 'Angular 17 / 21', tag: 'Production', note: 'Signals, standalone components' },
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

  get displayedCategories(): SkillGroup[] {
    if (this.activeTab() === 'all') {
      return this.categories;
    }
    return this.categories.filter((cat) => cat.id === this.activeTab());
  }

  setTab(tab: string) {
    this.activeTab.set(tab);
  }
}
