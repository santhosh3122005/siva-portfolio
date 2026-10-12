import React, { useState } from 'react';
import { SkillCategory } from '../types/portfolio';
import { Code2, Globe, Database, Wrench, Cpu, CheckCircle2, Sliders } from 'lucide-react';

interface SkillsProps {
  categories: SkillCategory[];
  onOpenCustomize: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ categories, onOpenCustomize }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-4 h-4 text-indigo-400" />;
      case 'web-dev':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'tools-testing':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Cpu className="w-4 h-4 text-violet-400" />;
    }
  };

  const displayedCategories =
    activeCategoryId === 'all'
      ? categories
      : categories.filter((c) => c.id === activeCategoryId);

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Technical Skills
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Verified academic and practical skills grouped by engineering domain. Fully editable to reflect current coursework and proficiencies.
            </p>
          </div>

          <button
            onClick={onOpenCustomize}
            className="inline-flex items-center gap-1.5 self-start md:self-auto px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Sliders className="w-3.5 h-3.5 text-indigo-400" />
            <span>Customize Skills</span>
          </button>
        </div>

        {/* Interactive Segmented Filter Control (Allowed per constitution) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl mb-8 max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeCategoryId === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategoryId === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List with clean unboxed metadata */}
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/50 hover:border-slate-700/60 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span>{skill.name}</span>
                        </span>
                        {/* Unboxed level text with typographic hierarchy */}
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.level}
                        </span>
                      </div>
                      {skill.context && (
                        <div className="text-[11px] text-slate-500 pl-5">
                          {skill.context}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{category.skills.length} skills listed</span>
                <span>Editable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
