import React from 'react';
import { learningTopics } from '../data/portfolioData';
import { StudentProfile } from '../types/portfolio';
import { Terminal, Globe, Brain, Sparkles, Binary, GitFork, Cpu, CheckCircle2 } from 'lucide-react';

interface LearningJourneyProps {
  profile: StudentProfile;
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ profile }) => {
  const getTopicIcon = (title: string) => {
    switch (title) {
      case 'Python Programming':
        return <Terminal className="w-4 h-4 text-blue-600" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-emerald-600" />;
      case 'Generative AI':
        return <Brain className="w-4 h-4 text-indigo-600" />;
      case 'Prompt Engineering':
        return <Sparkles className="w-4 h-4 text-amber-600" />;
      case 'AI Fundamentals':
        return <Cpu className="w-4 h-4 text-purple-600" />;
      case 'Git & GitHub':
        return <GitFork className="w-4 h-4 text-slate-700" />;
      case 'Problem Solving':
        return <Binary className="w-4 h-4 text-blue-700" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <section className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Active Focus
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Currently Learning
          </h2>
          <p className="mt-3 text-base text-slate-700 font-medium leading-relaxed">
            "{profile.learningPhilosophy}"
          </p>
        </div>

        {/* Clean Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningTopics.map((topic) => (
            <div
              key={topic.title}
              className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-5 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    {getTopicIcon(topic.title)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {topic.title}
                    </h3>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {topic.category}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>In Progress</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
