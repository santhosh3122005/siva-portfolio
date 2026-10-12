import React from 'react';
import { ArrowDown, Download, Mail, ExternalLink, MapPin, Building, GraduationCap } from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface HeroProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800/60 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen Hero (Left: Typography & CTAs, Right: Media Frame) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Kicker (Anti-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-indigo-400 mb-4 tracking-wide">
              <span>{profile.college}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{profile.currentYear}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{profile.department}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight sm:leading-none mb-4">
              {profile.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-300 mb-6">
              {profile.headline}
            </p>

            <p className="text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
              {profile.bio}
            </p>

            {/* Action Buttons: View My Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-950 transition-colors whitespace-nowrap shrink-0"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 hover:text-white border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/40 border border-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Unboxed Location & Contact Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-4 border-t border-slate-800/80">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{profile.location}</span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{profile.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 hover:text-indigo-300 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Developer Terminal & Academic Highlights (No photo) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#0F172A]/90 shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#0B0F17]/90">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  siva@psr-eng:~$ profile.json
                </div>
                <div className="text-[10px] font-mono text-emerald-400">
                  Ready
                </div>
              </div>

              {/* Developer Spec Sheet Content */}
              <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
                {/* Monogram & Title header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-base font-bold text-indigo-300 font-sans shrink-0">
                    SK
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-sans">
                      {profile.name}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {profile.degree} · Final Year
                    </div>
                  </div>
                </div>

                {/* Structured JSON-like parameters */}
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-slate-500">"institution":</span>
                    <span className="text-indigo-300 text-right truncate">"{profile.college}"</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-slate-500">"department":</span>
                    <span className="text-slate-200 text-right truncate">"{profile.department}"</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-slate-500">"cgpa":</span>
                    <span className="text-emerald-400 font-semibold">{profile.cgpa}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-slate-500">"primary_languages":</span>
                    <span className="text-amber-300">["Python", "Java", "C++", "SQL"]</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-slate-500">"flagship_project":</span>
                    <span className="text-blue-300">"Face Attendance System"</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-slate-500">"placement_status":</span>
                    <span className="text-emerald-400">"Actively Seeking Roles"</span>
                  </div>
                </div>

                {/* Terminal Quick Prompt */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>verified_student = True</span>
                  <a
                    href="#contact"
                    className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors font-sans"
                  >
                    Direct Message ›
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Fact Strip below the hero split (as required by Section 2.B) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
              Institution
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-1.5">
              <Building className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="truncate">{profile.college}</span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">{profile.collegeLocation}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
              Degree & Major
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="truncate">{profile.degree}</span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5 truncate">{profile.department}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
              Academic Standing
            </div>
            <div className="text-sm font-semibold text-white font-mono tabular-nums">
              {profile.cgpa}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Verified Academic Record</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
              Placement Readiness
            </div>
            <div className="text-sm font-semibold text-emerald-400">
              Immediate / Placement Ready
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Internships & Entry-Level Roles</div>
          </div>
        </div>
      </div>
    </section>
  );
};
