import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Award, CheckCircle, ExternalLink, Linkedin, ShieldCheck } from 'lucide-angular';

interface Certification {
  title: string;
  issuer: string;
  color: string;
  credentialUrl?: string;
  badgeCode: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class CertificationsComponent {
  readonly Award = Award;
  readonly CheckCircle = CheckCircle;
  readonly ExternalLink = ExternalLink;
  readonly Linkedin = Linkedin;
  readonly ShieldCheck = ShieldCheck;

  certifications: Certification[] = [
    {
      title: 'AWS Generative AI: Cloud Technology & Services Concepts',
      issuer: 'Amazon Web Services (AWS)',
      color: '#FF9900',
      badgeCode: 'AWS-GENAI',
      credentialUrl: 'https://www.credly.com/badges/3f9e44c3-e440-457d-afdd-a1919c400e2b/public_url',
    },
    {
      title: 'MongoDB Python Developer Path',
      issuer: 'MongoDB University',
      color: '#00ED64',
      badgeCode: 'MDB-PY',
      credentialUrl: 'https://www.linkedin.com/in/sharmaaman012/details/certifications/',
    },
    {
      title: 'API Fundamentals Student Expert',
      issuer: 'Postman',
      color: '#FF6C37',
      badgeCode: 'POSTMAN-EXPERT',
      credentialUrl: 'https://www.linkedin.com/in/sharmaaman012/overlay/Certifications/1841701237/treasury/?profileId=ACoAAErYaFYBULxleoZBiBlk6sdeuO34h0vq8G0',
    },
    {
      title: 'Gemini Certified : University Student',
      issuer: 'Google',
      color: '#4F98A3',
      badgeCode: 'GOOGLE-GEMINI',
      credentialUrl: 'https://www.linkedin.com/in/sharmaaman012/overlay/Certifications/715968225/treasury/?profileId=ACoAAErYaFYBULxleoZBiBlk6sdeuO34h0vq8G0',
    },
    {
      title: 'Machine Learning Foundations & Supervised Learning',
      issuer: 'AWS & DataCamp',
      color: '#6DBF8F',
      badgeCode: 'ML-FOUNDATIONS',
      credentialUrl: 'https://www.credly.com/badges/3f9e44c3-e440-457d-afdd-a1919c400e2b',
    },
  ];

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/sharmaaman012/details/certifications/', '_blank');
  }
}
