import React from 'react';
import { X, ExternalLink, Check, AlertCircle, Layers, Cpu } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B0F17]/90">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-indigo-400">{project.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">{project.status}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {project.image && (
            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Statement Box */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement & Academic Motivation</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Technologies Used (Unboxed text with dots) */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              {project.technologies.map((tech, i) => (
                <React.Fragment key={tech}>
                  {i > 0 && <span aria-hidden="true" className="text-slate-600">·</span>}
                  <span className="font-mono text-slate-200">{tech}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Key Implemented Features</span>
            </h4>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, index) => (
                <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Verification Note */}
          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400">
            <strong className="text-slate-300 font-medium">Academic Rigor Note:</strong> This project was implemented as an engineering demonstration under faculty guidance at PSR Engineering College. Verified locally using real student face sample sets without synthetic vanity metrics.
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-[#0B0F17]/90">
          <div className="text-xs text-slate-500">
            Academic Project Architecture & Verified Implementations
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
