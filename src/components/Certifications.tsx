import React, { useState } from 'react';
import { CertificationItem } from '../types/portfolio';
import { Award, BookOpen, Trophy, Users, ShieldCheck, Sliders } from 'lucide-react';

interface CertificationsProps {
  certifications: CertificationItem[];
  onOpenCustomize: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  onOpenCustomize,
}) => {
  const [filter, setFilter] = useState<'all' | 'Certification' | 'Workshop' | 'Achievement' | 'Extracurricular'>('all');

  const filteredItems =
    filter === 'all'
      ? certifications
      : certifications.filter((item) => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Certification':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'Workshop':
        return <BookOpen className="w-4 h-4 text-indigo-400" />;
      case 'Achievement':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      default:
        return <Users className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
              Credentials & Activities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Certifications & Achievements
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Professional learning milestones, hands-on faculty workshops, technical symposiums, and extracurricular participation.
            </p>
          </div>

          <button
            onClick={onOpenCustomize}
            className="inline-flex items-center gap-1.5 self-start md:self-auto px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Sliders className="w-3.5 h-3.5 text-indigo-400" />
            <span>Customize Credentials</span>
          </button>
        </div>

        {/* Filter Tabs (Interactive filter control per constitution) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilter('Certification')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'Certification'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => setFilter('Workshop')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'Workshop'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Workshops
          </button>
          <button
            onClick={() => setFilter('Achievement')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'Achievement'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Competitions & Awards
          </button>
          <button
            onClick={() => setFilter('Extracurricular')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'Extracurricular'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Extracurricular
          </button>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata Line */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    {getCategoryIcon(item.category)}
                    <span className="font-medium text-slate-400">{item.category}</span>
                  </div>
                  <span className="font-mono tabular-nums">{item.year}</span>
                </div>

                <h3 className="text-base font-semibold text-white tracking-tight mb-1.5">
                  {item.title}
                </h3>

                <div className="text-xs font-medium text-indigo-300 mb-3">
                  {item.issuer}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.credentialId && (
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>ID: {item.credentialId}</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
