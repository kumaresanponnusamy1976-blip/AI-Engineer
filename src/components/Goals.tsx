import React from 'react';
import { StudentProfile } from '../types/portfolio';
import { Target, Compass, Code, GitPullRequest, Briefcase } from 'lucide-react';

interface GoalsProps {
  profile: StudentProfile;
}

export const Goals: React.FC<GoalsProps> = ({ profile }) => {
  const roadmapSteps = [
    {
      phase: 'Current Focus (Semester 1–2)',
      title: 'Strengthening Foundations',
      description: 'Master Python syntax, object-oriented concepts, fundamental data structures, semantic web interfaces, and basic prompt engineering workflows.',
      icon: Code,
      badge: 'In Progress'
    },
    {
      phase: 'Mid-Term Goal (Semester 3–4)',
      title: 'Machine Learning & Applied GenAI',
      description: 'Explore statistical learning, PyTorch/TensorFlow basics, retrieval augmented generation (RAG), and deploy end-to-end full-stack AI web tools.',
      icon: Compass,
      badge: 'Planned'
    },
    {
      phase: 'Advanced Goal (Semester 5–8)',
      title: 'Open Source & Real-World Experience',
      description: 'Contribute meaningful code to developer tools, participate in high-stakes hackathons, secure engineering internships, and build production AI systems.',
      icon: Briefcase,
      badge: 'Target'
    }
  ];

  return (
    <section className="py-16 md:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Vision & Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            My Goal
          </h2>
          <div className="mt-4 p-5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
              "{profile.goalStatement}"
            </p>
          </div>
        </div>

        {/* Realistic Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmapSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.phase}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-blue-600">
                      {step.phase}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {step.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-700">
                      <IconComponent className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  Step towards becoming a competent AI Engineer
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
