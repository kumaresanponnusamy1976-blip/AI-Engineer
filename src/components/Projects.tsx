import React, { useState } from 'react';
import { projectsList } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Code, Play, Terminal, ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'demo' | 'code' | null>(null);

  const openModal = (project: Project, mode: 'demo' | 'code') => {
    setSelectedProject(project);
    setModalMode(mode);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalMode(null);
  };

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Practical Implementation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Projects
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Beginner-level Python applications designed to build confidence in syntax, control flow, functions, 
            and data validation. Click <strong>Live Demo</strong> to run the interactive simulator or <strong>View Code</strong> to inspect the script.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs"
            >
              <div>
                {/* Unboxed Metadata Header (Anti-Slop Zero-Pill) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-medium text-blue-700">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.technologies.join(', ')}</span>
                  <span aria-hidden="true">·</span>
                  <span>Semester 1</span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Concepts Practiced */}
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-150 mb-5">
                  <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    <span>Focus Concepts</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {project.keyLearnings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-slate-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons & Links */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openModal(project, 'demo')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </button>

                  <button
                    onClick={() => openModal(project, 'code')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </button>
                </div>

                {/* Target URLs / Placeholders */}
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="truncate max-w-[120px]" title={project.githubUrl}>
                    {project.githubUrl}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Demo & Code */}
        <ProjectModal
          project={selectedProject}
          mode={modalMode}
          onClose={closeModal}
        />

      </div>
    </section>
  );
};
