import React from 'react';
import { StudentProfile } from '../types/portfolio';
import { Code2, Compass, Users2, Sparkles, BookOpen } from 'lucide-react';
import workspaceImg from '../assets/images/student_workspace_minimal_1790680287240.jpg';

interface AboutProps {
  profile: StudentProfile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const foundationPillars = [
    {
      title: 'Python Programming',
      description: 'Strengthening procedural and functional syntax, conditional logic, and algorithmic thinking.'
    },
    {
      title: 'Web Development',
      description: 'Building structured, accessible user interfaces with HTML, CSS, and interactive JavaScript.'
    },
    {
      title: 'Generative AI',
      description: 'Investigating transformer capabilities, prompt engineering methods, and AI-assisted workflows.'
    },
    {
      title: 'Problem Solving',
      description: 'Practicing computational decomposition and step-by-step logic through coding challenges.'
    },
    {
      title: 'AI Fundamentals',
      description: 'Grasping foundational concepts of machine learning models, training data, and intelligent systems.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Student Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Hackathon Ethos */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                First-Semester Journey & Aspirations
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                I am a first-semester B.Tech student actively building a solid grounding in software engineering and artificial intelligence. My current academic and self-directed study focuses on core foundational areas:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {foundationPillars.map((pillar) => (
                  <div key={pillar.title} className="p-3 bg-slate-50 border border-slate-150 rounded-lg">
                    <div className="text-xs font-semibold text-slate-900 mb-0.5">{pillar.title}</div>
                    <div className="text-[11px] text-slate-500 leading-snug">{pillar.description}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Why I Participate in Hackathons & Ideathons</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  I enjoy participating in hackathons and ideathons because they provide the ideal testing ground: solving real challenges under strict time constraints, collaborating with teammates, debating architectures, and learning through rapid, hands-on experimentation.
                </p>
              </div>

              <div className="pt-3 flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100">
                <span className="font-semibold text-slate-700">Philosophy:</span>
                <span>Learning by doing · Clean code · Honest fresher perspective</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame & Study Desk Setup */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs">
              <div className="aspect-16/10 relative bg-slate-100">
                <img
                  src={workspaceImg}
                  alt="Student study workspace with laptop showing code"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="text-xs font-medium">Daily Developer Workspace</div>
                    <div className="text-[11px] text-slate-200">Writing Python, testing algorithms & web prototypes</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between text-slate-500">
                  <span>Current Academic Status:</span>
                  <span className="font-medium text-slate-800">B.Tech 1st Semester</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>Primary Target:</span>
                  <span className="font-medium text-blue-600">AI Engineering & Applied ML</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>Mindset:</span>
                  <span className="font-medium text-slate-800">Curious, Disciplined & Persistent</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
