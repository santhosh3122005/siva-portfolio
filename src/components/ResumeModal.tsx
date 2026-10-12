import React, { useState, useRef } from 'react';
import { X, Printer, Download, Upload, Check, AlertCircle, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { ProfileInfo, SkillCategory, Project, EducationItem } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  skillCategories: SkillCategory[];
  projects: Project[];
  education: EducationItem[];
  onUploadCustomPdf: (fileUrl: string, fileName: string) => void;
  customPdfUrl?: string;
  customPdfName?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  skillCategories,
  projects,
  education,
  onUploadCustomPdf,
  customPdfUrl,
  customPdfName,
}) => {
  const [copiedText, setCopiedText] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please select a valid PDF file.');
        return;
      }
      const url = URL.createObjectURL(file);
      onUploadCustomPdf(url, file.name);
    }
  };

  const handleCopyPlaintext = () => {
    const text = `
${profile.name.toUpperCase()}
${profile.headline}
Location: ${profile.location} | Email: ${profile.email} | Phone: ${profile.phone}
LinkedIn: ${profile.linkedin}

OBJECTIVE:
${profile.careerGoal}. Seeking entry-level software development / IT engineering roles.

EDUCATION:
${education.map(e => `${e.institution} - ${e.degree} in ${e.field} (${e.duration})\nScore: ${e.score}`).join('\n\n')}

TECHNICAL SKILLS:
${skillCategories.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

PROJECTS:
${projects.map(p => `${p.title} (${p.category})\nTechnologies: ${p.technologies.join(', ')}\n- ${p.description}\nKey Features: ${p.keyFeatures.slice(0, 3).join('; ')}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto no-print"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-800 bg-[#0B0F17]/95 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white tracking-tight">
              Curriculum Vitae Preview
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">ATS-Optimized Engineering Format</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              title="Print directly or save as PDF via system print dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            {customPdfUrl ? (
              <a
                href={customPdfUrl}
                download={customPdfName || `${profile.name.replace(/\s+/g, '_')}_Resume.pdf`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/80 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Uploaded PDF</span>
              </a>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                title="Attach your physical PDF file to enable 1-click direct download"
              >
                <Upload className="w-3.5 h-3.5 text-indigo-400" />
                <span>Upload PDF</span>
              </button>
            )}

            <button
              onClick={handleCopyPlaintext}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/40 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              title="Copy ATS Plaintext"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedText ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hidden file input for uploading student's PDF */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Resume status notification */}
        {!customPdfUrl && (
          <div className="px-6 py-2 bg-indigo-950/40 border-b border-indigo-900/40 text-xs text-indigo-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>
                Standard preview loaded. Click <strong>Print / Save as PDF</strong> to generate a clean PDF, or <strong>Upload PDF</strong> to attach your college placement resume.
              </span>
            </div>
          </div>
        )}

        {/* Scrollable Printable CV Sheet */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/90 flex justify-center">
          <div
            id="printable-resume"
            className="w-full max-w-3xl bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-xl print-page font-sans text-left"
          >
            {/* Header: Candidate Info */}
            <div className="border-b-2 border-slate-900 pb-4 mb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                  {profile.name}
                </h1>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  {profile.headline}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  {profile.college} · {profile.department}
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Objective */}
            <div className="mb-6">
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Career Objective
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                {profile.careerGoal}. Final-year engineering student at PSR Engineering College with demonstrable problem-solving and software development skills. Committed to writing maintainable code and adapting rapidly to new technology stacks.
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <div className="flex items-baseline justify-between font-bold text-slate-900">
                      <span>{edu.institution}</span>
                      <span className="font-normal text-slate-600">{edu.duration}</span>
                    </div>
                    <div className="flex items-baseline justify-between text-slate-700">
                      <span>{edu.degree} — {edu.field}</span>
                      <span className="font-medium text-slate-900">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="font-bold text-slate-800 min-w-44 shrink-0">
                      {cat.title}:
                    </span>
                    <span className="text-slate-700">
                      {cat.skills.map((s) => s.name).join(' · ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Projects */}
            <div className="mb-6">
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Academic Projects
              </h2>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex items-baseline justify-between font-bold text-slate-900">
                      <span>{proj.title}</span>
                      <span className="font-normal text-slate-600 font-mono text-[11px]">{proj.category}</span>
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 mt-0.5">
                      Technologies: {proj.technologies.join(', ')}
                    </div>
                    <p className="text-slate-700 mt-1 leading-relaxed">
                      {proj.description}
                    </p>
                    <ul className="list-disc list-inside text-slate-600 mt-1 space-y-0.5">
                      {proj.keyFeatures.slice(0, 3).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Ethics & Declaration */}
            <div className="pt-3 border-t border-slate-300 text-[10px] text-slate-500 flex justify-between items-center">
              <span>Declaration: All academic details and project implementations are accurate.</span>
              <span>Candidate: {profile.name}</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#0B0F17]/95 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Tip: Use Ctrl+P / Cmd+P to save as a physical or PDF document anytime.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
