import React from 'react';
import { hackathonEntries } from '../data/portfolioData';
import { Calendar, Users, Target, Lightbulb, Compass, Award } from 'lucide-react';

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Participation & Team Learning
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Hackathons & Ideathons
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            I actively participate in hackathons and ideathons to improve my problem-solving abilities, collaborate with others, explore new technologies, and gain practical exposure to building solutions.
          </p>
        </div>

        {/* Participation Philosophy Card */}
        <div className="mb-10 p-5 bg-blue-50/50 rounded-xl border border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-600 text-white rounded-lg shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Early-Stage Learning Focus
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Rather than chasing vanity metrics, my objective during college ideathons is to understand real product scopes, rapid prototyping, communication under pressure, and how ideas transition into code.
              </p>
            </div>
          </div>
          <div className="text-xs font-medium text-blue-800 bg-white px-3 py-1.5 rounded-md border border-blue-200 shrink-0 self-start md:self-auto">
            Fresher Participation Track
          </div>
        </div>

        {/* Timeline / Card Layout */}
        <div className="space-y-4">
          {hackathonEntries.map((entry, index) => (
            <div
              key={entry.id}
              className="p-5 sm:p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="font-semibold text-slate-900">{entry.type}</span>
                  <span aria-hidden="true">·</span>
                  <span>{entry.focus}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Year: {entry.year}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-900">
                  {entry.eventName}
                </h4>
                
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-medium text-slate-700">Role:</span>
                  <span>{entry.role}</span>
                </div>

                <div className="pt-2 text-xs text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Experience & Takeaway: </span>
                  <span>{entry.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note */}
        <div className="mt-8 text-xs text-slate-500 text-center">
          Placeholders will be updated as new college and inter-collegiate hackathon rounds are completed.
        </div>

      </div>
    </section>
  );
};
