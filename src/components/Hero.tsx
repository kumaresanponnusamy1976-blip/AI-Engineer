import React, { useState } from 'react';
import { ArrowRight, Terminal, Github, Linkedin, Mail, CheckCircle2, Play } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';
import avatarImg from '../assets/images/student_avatar_portrait_1790680273671.jpg';

interface HeroProps {
  profile: StudentProfile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const [terminalOutput, setTerminalOutput] = useState(false);

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Status Label (Clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600"></span>
              <span>1st Semester Undergrad</span>
              <span aria-hidden="true">·</span>
              <span>B.Tech in Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Academic Cohort 2026</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-balance">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-600">
                B.Tech Student | Aspiring AI Engineer
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              {profile.heroIntro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
              >
                <span>Connect With Me</span>
              </a>
            </div>

            {/* Social Links & Placeholders */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Find me on:</span>
              
              <a
                href={profile.githubUrl.startsWith('http') ? profile.githubUrl : '#contact'}
                target={profile.githubUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
                title={`GitHub: ${profile.githubUrl}`}
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span className="font-mono">{profile.githubUrl}</span>
              </a>

              <a
                href={profile.linkedinUrl.startsWith('http') ? profile.linkedinUrl : '#contact'}
                target={profile.linkedinUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
                title={`LinkedIn: ${profile.linkedinUrl}`}
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span className="font-mono">{profile.linkedinUrl}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Subtle Coding / AI Visual Element */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-lg overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400">aspirant_profile.py</span>
                </div>
                <button
                  onClick={() => setTerminalOutput(!terminalOutput)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                  title="Run Python code"
                >
                  <Play className="w-3 h-3 text-emerald-400" />
                  <span>{terminalOutput ? 'Reset' : 'Run'}</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-4 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto leading-relaxed">
                <p><span className="text-purple-400">class</span> <span className="text-yellow-300">EngineeringStudent</span>:</p>
                <p className="pl-4"><span className="text-slate-500"># College fresher profile</span></p>
                <p className="pl-4">name = <span className="text-emerald-300">"{profile.name}"</span></p>
                <p className="pl-4">academic_year = <span className="text-emerald-300">"1st Semester B.Tech"</span></p>
                <p className="pl-4">focus_tracks = [</p>
                <p className="pl-8"><span className="text-emerald-300">"Python Programming"</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">"Basic Web Development"</span>,</p>
                <p className="pl-8"><span className="text-emerald-300">"Generative AI Foundations"</span></p>
                <p className="pl-4">]</p>
                <p className="pl-4">aspiration = <span className="text-emerald-300">"AI Engineer"</span></p>
                <p className="pl-4">methodology = <span className="text-blue-400">"Build practical projects & participate in hackathons"</span></p>
              </div>

              {/* Live Terminal Output Drawer */}
              {terminalOutput && (
                <div className="border-t border-slate-800 bg-slate-950 p-4 font-mono text-xs text-emerald-400 space-y-1 animate-in fade-in duration-150">
                  <div className="text-slate-500 flex items-center gap-1.5 text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    <span>stdout (Python 3.12 runtime):</span>
                  </div>
                  <p>&gt; Initializing profile for {profile.name}...</p>
                  <p>&gt; Status: 1st Semester Undergrad ready for collaboration.</p>
                  <p>&gt; Core goal: Build strong algorithmic & AI engineering fundamentals.</p>
                </div>
              )}

              {/* Student Identity Card in Card Footer */}
              <div className="p-3 bg-slate-800/60 border-t border-slate-800 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
                  <img
                    src={avatarImg}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-xs truncate">
                  <div className="font-semibold text-slate-200 truncate">{profile.name}</div>
                  <div className="text-slate-400 text-[11px] truncate">1st Sem B.Tech · {profile.branch}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
