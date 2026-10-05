import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Github,
  ExternalLink,
  Code2,
  Cpu,
  Cloud,
  Laptop,
  Sparkles,
} from 'lucide-angular';

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

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
  readonly Code2 = Code2;
  readonly Cpu = Cpu;
  readonly Cloud = Cloud;
  readonly Laptop = Laptop;
  readonly Sparkles = Sparkles;

  activeFilter = signal('All');

  filters = ['All', 'AI / Multi-Agent', 'RAG & Search', 'Full-Stack', 'Cloud & Infra', 'Hackathon'];

  projects: Project[] = [
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
      description: 'Smart campus facility management platform built for GDG Solution Challenge. 500+ QPS FastAPI backend + Flutter + Angular 17.',
      fullDescription: [
        'FastAPI backend handling 500+ concurrent requests with real-time status state-machine workflows',
        'Flutter mobile app (Android/iOS) with camera capture and GPS location tagging',
        'Angular 17 admin dashboard with role-based access control (RBAC)',
        'Supabase PostgreSQL + Supabase Storage + OAuth 2.0 + JWT, deployed on GCP Cloud Run',
      ],
      tech: ['FastAPI', 'Flutter', 'Angular 17', 'Supabase PostgreSQL', 'GCP Cloud Run', 'Docker', 'JWT'],
      github: 'https://github.com/89Aman/CampusFix',
      featured: true,
      category: ['Full-Stack', 'Cloud & Infra', 'Hackathon'],
    },
    {
      title: 'RAG-DEMO (FDA Drug Assistant)',
      description: 'Transforms static FDA drug label PDFs into an interactive conversational interface using Google RAG architecture and Gemini 2.5 Flash.',
      fullDescription: [
        'Automated PDF indexing pipeline for multiple drug labels via Google File Search API',
        'Semantic chunking enables cross-document drug interaction queries with grounded attribution',
        'Source citation system with document page excerpts and confidence scores',
        'Sub-second retrieval latency with verifiable responses',
      ],
      tech: ['Python', 'Google GenAI SDK', 'Gemini 2.5 Flash', 'File Search API', 'RAG'],
      github: 'https://github.com/89Aman/RAG-DEMO',
      featured: true,
      category: ['AI / Multi-Agent', 'RAG & Search'],
    },
    {
      title: 'SkillSnap',
      description: 'AI-powered skill assessment platform with live sandboxed code execution. Built in 24 hours for The Forge Hackathon.',
      fullDescription: [
        'Angular frontend + FastAPI backend architecture with async worker queue',
        'Gemini API for intelligent skill gap analysis and automated rubric grading',
        'Piston API integration for sandboxed code execution across 10+ languages',
        'Gemini Cloud SQL for persistent telemetry and candidate test records',
      ],
      tech: ['Angular', 'FastAPI', 'Gemini API', 'Piston API', 'Cloud SQL', 'Python'],
      github: 'https://github.com/89Aman/SkillSnap',
      featured: true,
      category: ['AI / Multi-Agent', 'Hackathon', 'Full-Stack'],
    },
    {
      title: 'Fullstack Movie Recommendation',
      description: 'Collaborative filtering ML recommendation model in TensorFlow/Keras integrated with a cross-platform Flutter mobile UI.',
      fullDescription: [
        'TensorFlow/Keras collaborative filtering recommendation model trained on movie-lens embeddings',
        'Full pipeline: data preprocessing → model training → API serving → Flutter mobile frontend',
        'Cross-platform mobile UI consuming the inference endpoint with offline cache',
      ],
      tech: ['Flutter', 'TensorFlow', 'Python', 'Jupyter Notebook', 'Dart', 'FastAPI'],
      github: 'https://github.com/89Aman/Fullstack-movie-recommendation-system',
      featured: false,
      category: ['AI / Multi-Agent', 'Full-Stack'],
    },
    {
      title: 'Material Demand Forecasting',
      description: 'Demand forecasting system for industrial inventory. Applies time-series forecasting and ML to predict material requirements.',
      fullDescription: [
        'Time series predictive modeling for material inventory workflows',
        'Explores rolling-window features and gradient boosting regressors',
        'Built with Python and TypeScript dashboards for data-driven decisions',
      ],
      tech: ['Python', 'TypeScript', 'scikit-learn', 'Time Series ML'],
      github: 'https://github.com/89Aman/Material-Demand-Forecasting',
      featured: false,
      category: ['AI / Multi-Agent'],
    },
    {
      title: 'Text Classification Model',
      description: 'SVM-based classifier predicting IAB content categories with TF-IDF vectorization and joblib serialization pipeline.',
      fullDescription: [
        'Support Vector Machine classifier trained on IAB content taxonomy standards',
        'Feature engineering with TF-IDF vectorizer and n-gram analysis',
        'Model serialization with joblib for zero-downtime API serving',
      ],
      tech: ['Python', 'scikit-learn', 'pandas', 'joblib', 'SVM', 'TF-IDF'],
      github: 'https://github.com/89Aman/text-classification-model',
      featured: false,
      category: ['AI / Multi-Agent'],
    },
    {
      title: 'SortViz',
      description: 'Interactive sorting algorithm visualizer in vanilla JS. Real-time animated step-by-step Bubble, Merge, and Quick sort.',
      fullDescription: [
        'Interactive step-by-step visual demonstration of CS sorting algorithms',
        'Vanilla JS canvas animation with configurable execution speed and array size',
      ],
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Algorithms'],
      github: 'https://github.com/89Aman/SortViz',
      featured: false,
      category: ['Full-Stack'],
    },
    {
      title: 'Library Management System',
      description: 'Full-stack web application for managing books, users, and borrowing workflows built with Flask, MongoDB, and Bcrypt.',
      fullDescription: [
        'Flask web framework + MongoDB via pymongo with indexed search',
        'User authentication with bcrypt password hashing and session management',
        'Role-based access control for administrators vs library members',
      ],
      tech: ['Python', 'Flask', 'MongoDB', 'pymongo', 'bcrypt', 'HTML/CSS'],
      github: 'https://github.com/89Aman/library-mangement-system',
      featured: false,
      category: ['Full-Stack'],
    },
  ];

  filteredProjects = signal<Project[]>(this.projects);

  filterProjects(filter: string) {
    this.activeFilter.set(filter);
    if (filter === 'All') {
      this.filteredProjects.set(this.projects);
    } else {
      this.filteredProjects.set(
        this.projects.filter((p) => p.category.includes(filter))
      );
    }
  }
}
