import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ExternalLink, ArrowRight, Sparkles, Sliders } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsProps {
  projects: Project[];
  onOpenCustomize: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onOpenCustomize }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
              Academic & Practical Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Practical software systems developed during engineering coursework. Each project demonstrates core engineering problem solving and modular architecture.
            </p>
          </div>

          <button
            onClick={onOpenCustomize}
            className="inline-flex items-center gap-1.5 self-start md:self-auto px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Sliders className="w-3.5 h-3.5 text-indigo-400" />
            <span>Customize Projects</span>
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                project.isFlagship
                  ? 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-indigo-900/50 shadow-xl shadow-indigo-950/20'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 items-start">
                {/* Left/Main Column: Project Details */}
                <div className={project.image ? 'lg:col-span-7' : 'lg:col-span-12'}>
                  {/* Unboxed Metadata Header */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                    {project.isFlagship && (
                      <>
                        <span className="text-indigo-400 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Flagship Academic Project</span>
                        </span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      </>
                    )}
                    <span className="text-slate-300">{project.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{project.status}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Problem Statement Callout (quiet unboxed style) */}
                  <div className="mb-4 text-xs sm:text-sm text-slate-400">
                    <span className="text-slate-300 font-medium">Problem: </span>
                    {project.problemStatement}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features Preview */}
                  <div className="mb-6">
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Key Highlights
                    </div>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-indigo-400 font-bold">›</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used (Unboxed Text with dots) */}
                  <div className="pt-4 border-t border-slate-800/80 mb-6">
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          {i > 0 && <span aria-hidden="true" className="text-slate-600">·</span>}
                          <span className="text-slate-200">{tech}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                    >
                      <span>View Full Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Architecture Preview</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Media (If Available) */}
                {project.image && (
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer group relative aspect-video rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-lg"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                      <div className="absolute bottom-2 right-2 px-2 py-1 text-[10px] font-mono bg-black/80 text-slate-300 rounded backdrop-blur-sm">
                        Click to Inspect Architecture
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
