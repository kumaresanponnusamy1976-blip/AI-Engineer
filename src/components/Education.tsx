import React from 'react';
import { educationHistory } from '../data/portfolioData';
import { StudentProfile } from '../types/portfolio';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

interface EducationProps {
  profile: StudentProfile;
}

export const Education: React.FC<EducationProps> = ({ profile }) => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Education
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Current undergraduate degree program and academic foundation.
          </p>
        </div>

        {/* Academic Cards */}
        <div className="space-y-6">
          
          {/* Main B.Tech Card */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-600">
                  <GraduationCap className="w-4 h-4" />
                  <span>Undergraduate Degree</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-semibold">{profile.semester}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900">
                  B.Tech — {profile.branch}
                </h3>
                
                <div className="text-base font-medium text-slate-700">
                  {profile.college}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>2026 – 2030 (Expected)</span>
                  </div>
                </div>
              </div>

              <div className="px-3.5 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-xs font-semibold text-blue-800 self-start md:self-auto">
                First Semester
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Semester 1 Core Courses & Focus</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {[
                  'Programming for Problem Solving (Python)',
                  'Engineering Mathematics I',
                  'Engineering Physics / Chemistry',
                  'Basics of Electrical & Electronics'
                ].map((course, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous Secondary Education Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <div className="text-xs font-medium text-slate-500 mb-1">
                  Secondary Schooling
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Higher Secondary Education (12th Grade)
                </h4>
                <div className="text-sm text-slate-600 mt-0.5">
                  [HIGH SCHOOL / SENIOR SECONDARY INSTITUTION]
                </div>
              </div>
              <div className="text-xs text-slate-500">
                Completed
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Discipline: Science Stream (Physics, Chemistry, Mathematics & Foundational Computer Science)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
