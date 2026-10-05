import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Rocket,
  Heart,
  Code2,
  Cloud,
  Cpu,
  Zap,
  ShieldCheck,
  Server,
} from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly Rocket = Rocket;
  readonly Heart = Heart;
  readonly Code2 = Code2;
  readonly Cloud = Cloud;
  readonly Cpu = Cpu;
  readonly Zap = Zap;
  readonly ShieldCheck = ShieldCheck;
  readonly Server = Server;

  stats = [
    { icon: Rocket, value: '4', label: 'Major Production Systems' },
    { icon: Heart, value: '4', label: 'Verified Certifications' },
    { icon: Code2, value: '24+', label: 'GitHub Repositories' },
    { icon: Cloud, value: '2', label: 'Cloud Platforms (GCP + AWS)' },
  ];

  values = [
    'Autonomous Multi-Agents',
    'Prefix-Caching Latency',
    'RAG Architectures',
    'FastAPI (Async)',
    'Go Concurrency',
    'uv Tooling',
    'GCP Cloud Run',
    'AWS Cloud',
    'Docker Sandboxes',
    'Noventra Labs',
  ];

  pillars = [
    {
      icon: Zap,
      title: 'Low-Latency Serving',
      description: 'Optimizing TTFT via prefix-caching alignment and async connection pooling.',
    },
    {
      icon: Cpu,
      title: 'Autonomous Swarms',
      description: 'Designing deterministic multi-agent state machines with Byzantine-tolerant verification.',
    },
    {
      icon: Server,
      title: 'Cloud-Native Scale',
      description: 'Deploying high-concurrency microservices (500+ QPS) on GCP Cloud Run and AWS.',
    },
  ];
}
