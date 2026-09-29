import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Terminal, Globe, BrainCircuit, Wrench, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return <Terminal className="w-5 h-5 text-blue-600" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'AI / GenAI':
        return <BrainCircuit className="w-5 h-5 text-indigo-600" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-slate-700" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Technical Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Skills
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Technologies and concepts I am actively learning and applying as a first-semester B.Tech student. 
            Presented truthfully without artificial percentage meters.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-6 space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Cards Inside Category */}
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-200 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {skill.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {skill.description}
                      </div>
                    </div>
                    {/* Clean unboxed level label */}
                    <div className="text-xs font-medium text-slate-600 shrink-0 sm:text-right pt-1 sm:pt-0">
                      <span className="text-slate-400 sm:hidden">Proficiency: </span>
                      <span className="text-blue-700">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Ethos Callout */}
        <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Honest assessment: Core fundamentals in progress. Every skill is reinforced through daily coding practice.</span>
          </div>
          <span className="text-slate-400 font-mono">Status: Continual Learning</span>
        </div>

      </div>
    </section>
  );
};
