import React from 'react';
import { Target, Lightbulb, Compass, Award } from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface AboutProps {
  profile: ProfileInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          {/* Section Kicker */}
          <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
            Profile Overview
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A grounded overview of my technical education, analytical mindset, academic focus, and career aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            {profile.detailedAbout.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 mt-6">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Current Career Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {profile.careerGoal}. Open to relocation, hybrid, and remote work setups, with a high commitment to continuous learning and team success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Attributes & Academic Focus Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-900/40">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Engineering Mindset</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Approaching software challenges through modular decomposition, clean algorithmic logic, and predictable system behavior.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-900/40">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Curiosity & Rapid Upskilling</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Comfortable reviewing API documentation, exploring modern framework patterns, and adapting swiftly to diverse engineering tech stacks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-900/40">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Academic Integrity & Collaboration</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Active contributor in group lab projects, technical seminars, and student coordination activities at PSR Engineering College.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
