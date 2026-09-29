import React from 'react';
import { StudentProfile } from '../types/portfolio';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  profile: StudentProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Identity & Role */}
          <div className="space-y-1">
            <div className="text-base font-bold text-slate-900">
              {profile.name}
            </div>
            <p className="text-xs text-slate-500">
              B.Tech Student | Aspiring AI Engineer
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <a
              href={profile.linkedinUrl.startsWith('http') ? profile.linkedinUrl : '#contact'}
              target={profile.linkedinUrl.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.githubUrl.startsWith('http') ? profile.githubUrl : '#contact'}
              target={profile.githubUrl.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-800" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors ml-auto md:ml-0"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>
            © 2026 {profile.name}. All rights reserved.
          </div>
          <div>
            First-Semester Undergraduate Portfolio · Built with React & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
