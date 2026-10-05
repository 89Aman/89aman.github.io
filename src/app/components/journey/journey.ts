import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Calendar,
  Briefcase,
  Trophy,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Code2,
} from 'lucide-angular';

interface TimelineItem {
  date: string;
  title: string;
  type: 'Active Development' | 'Hackathon' | 'Personal Milestone' | 'Education';
  bullets: string[];
  tech: string[];
  icon: any;
  color: string;
  link?: string;
}

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class JourneyComponent {
  readonly Calendar = Calendar;
  readonly Briefcase = Briefcase;
  readonly Trophy = Trophy;
  readonly GraduationCap = GraduationCap;
  readonly Sparkles = Sparkles;
  readonly ExternalLink = ExternalLink;
  readonly Code2 = Code2;

  timeline: TimelineItem[] = [
    {
      date: 'April 2026',
      title: 'Smart Resource Allocation',
      type: 'Active Development',
      bullets: [
        'Architecting private resource allocation and optimization engine in Dart/Flutter',
        'Implementing heuristic scheduling algorithms for dynamic workload distribution',
        'Active development under the Noventra Labs product suite',
      ],
      tech: ['Dart', 'Flutter', 'Optimization', 'Algorithms'],
      icon: Sparkles,
      color: '#4F98A3',
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
        'Full-stack Angular frontend with FastAPI backend and Gemini Cloud SQL persistence',
      ],
      tech: ['Angular', 'FastAPI', 'Gemini API', 'Piston API', 'Cloud SQL'],
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
        'Decoupled architecture: Flutter mobile app (GPS + camera), Angular 17 admin dashboard, FastAPI backend',
        'Deployed on GCP Cloud Run with Supabase PostgreSQL, OAuth 2.0, and JWT authentication',
      ],
      tech: ['FastAPI', 'Flutter', 'Angular 17', 'Supabase', 'Cloud Run'],
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
      title: 'BCA Disha College & Co-Founded Noventra Labs',
      type: 'Education',
      bullets: [
        'Pursuing Bachelor’s of Computer Applications at Disha College, Raipur (2024–2027)',
        'Co-founded Noventra Labs — focused on building high-performance AI tools and multi-agent systems',
        'Earned AWS Generative AI, MongoDB Python Developer, Postman Student Expert, and ML certifications',
      ],
      tech: ['BCA', 'Noventra Labs', 'AWS Certified', 'MongoDB', 'Postman'],
      icon: GraduationCap,
      color: '#E879F9',
    },
  ];
}
