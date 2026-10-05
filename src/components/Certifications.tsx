import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { Linkedin } from './ui/icons';

interface Certification {
  title: string;
  issuer: string;
  color: string;
  badgeCode: string;
  credentialUrl: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Generative AI: Cloud Services Concepts',
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

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#13131A]/90 relative border-t border-[#1F1F2C] backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A24] border border-[#2A2A35] text-[#4F98A3] text-xs font-mono mb-3">
            <ShieldCheck size={13} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">Certifications</h2>
          <p className="text-[#9E9D9A] max-w-xl mx-auto text-sm">
            Formal technical certifications across Generative AI, cloud infrastructure, vector databases, and API architecture.
          </p>
        </div>

        {/* Minimal Shorter Cards in 3-col Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.badgeCode}
              className="p-4 rounded-xl bg-[#1A1A24]/90 border border-[#2A2A35] hover:border-[#4F98A3]/70 transition-all flex flex-col justify-between group hover:shadow-lg hover:shadow-[#4F98A3]/5 min-h-[140px]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-md bg-[#0D0D12] border border-[#2A2A35] flex items-center justify-center shrink-0"
                      style={{ color: cert.color }}
                    >
                      <Award size={14} />
                    </div>
                    <span className="text-xs text-[#9E9D9A] font-mono flex items-center gap-1 truncate">
                      <CheckCircle size={11} className="text-[#6DBF8F] shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0D0D12] text-[#A1A1AA] border border-[#2A2A35] shrink-0">
                    {cert.badgeCode}
                  </span>
                </div>

                <h3 className="font-semibold text-white text-sm group-hover:text-[#4F98A3] transition-colors line-clamp-2 leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 mt-2 border-t border-[#1F1F2C]/60 flex items-center justify-between">
                <span className="text-[11px] text-[#9E9D9A] font-mono">Credential ID</span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#CDCCCA] hover:text-[#4F98A3] transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Treasury Link */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/sharmaaman012/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#CDCCCA] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all text-xs font-mono font-medium"
          >
            <Linkedin size={14} />
            <span>View All Credentials on LinkedIn</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
