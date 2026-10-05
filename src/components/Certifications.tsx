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

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#13131A]/90 relative border-t border-[#1F1F2C] backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A24] border border-[#2A2A35] text-[#4F98A3] text-xs font-mono mb-4">
            <ShieldCheck size={13} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Certifications</h2>
          <p className="text-[#797876] max-w-xl mx-auto text-base">
            Formal technical certifications across Generative AI, cloud infrastructure, vector databases, and API architecture.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.badgeCode}
              className="p-6 rounded-xl bg-[#1A1A24] border border-[#2A2A35] hover:border-[#4F98A3] transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#4F98A3]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg bg-[#0D0D12] border border-[#2A2A35] flex items-center justify-center font-mono text-xs font-bold"
                    style={{ color: cert.color }}
                  >
                    <Award size={20} />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0D0D12] text-[#A1A1AA] border border-[#2A2A35]">
                    {cert.badgeCode}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-2 group-hover:text-[#4F98A3] transition-colors font-display">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#797876] mb-6 flex items-center gap-1.5">
                  <CheckCircle size={13} className="text-[#6DBF8F]" />
                  <span>{cert.issuer}</span>
                </p>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2 rounded-lg bg-[#0D0D12] border border-[#2A2A35] text-xs font-mono text-[#CDCCCA] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
              >
                <span>Verify Credential</span>
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>

        {/* LinkedIn Treasury Link */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/sharmaaman012/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1A1A24] border border-[#2A2A35] text-[#CDCCCA] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all text-sm font-semibold"
          >
            <Linkedin size={16} />
            <span>View All Credentials on LinkedIn</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
