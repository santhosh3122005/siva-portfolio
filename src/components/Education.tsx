import React from 'react';
import { EducationItem } from '../types/portfolio';
import { GraduationCap, MapPin, Calendar, Check, Sliders } from 'lucide-react';

interface EducationProps {
  education: EducationItem[];
  onOpenCustomize: () => void;
}

export const Education: React.FC<EducationProps> = ({ education, onOpenCustomize }) => {
  return (
    <section id="education" className="py-16 sm:py-20 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
              Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Education
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Chronological academic history from secondary schooling through final-year engineering at PSR Engineering College.
            </p>
          </div>

          <button
            onClick={onOpenCustomize}
            className="inline-flex items-center gap-1.5 self-start md:self-auto px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Sliders className="w-3.5 h-3.5 text-indigo-400" />
            <span>Edit Academic Records</span>
          </button>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                item.isCurrent
                  ? 'bg-slate-900/60 border-indigo-900/60 shadow-lg shadow-indigo-950/20'
                  : 'bg-slate-900/30 border-slate-800/70'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <GraduationCap className={`w-5 h-5 ${item.isCurrent ? 'text-indigo-400' : 'text-slate-400'}`} />
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.institution}
                    </h3>
                  </div>

                  <div className="text-sm font-medium text-slate-300 mb-1">
                    {item.degree} — <span className="text-indigo-300">{item.field}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Score badge / indicator */}
                <div className="self-start md:self-auto text-left md:text-right">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-0.5">
                    Academic Standing
                  </div>
                  <div className="text-sm font-semibold text-white font-mono tabular-nums">
                    {item.score}
                  </div>
                </div>
              </div>

              {/* Coursework & Institution Notes */}
              <div className="pt-4 border-t border-slate-800/60">
                <ul className="space-y-1.5">
                  {item.notes.map((note, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-1" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
