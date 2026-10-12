import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, ExternalLink, AlertCircle, Sparkles } from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface ContactProps {
  profile: ProfileInfo;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<null | {
    type: 'success';
    mailtoUrl: string;
    summary: string;
  }>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a clear subject line.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedBody = `Hello Siva,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    const mailtoUrl = `mailto:${encodeURIComponent(profile.email)}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formattedBody)}`;

    const summary = `To: ${profile.email}\nSubject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;

    setSubmittedStatus({
      type: 'success',
      mailtoUrl,
      summary,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopySummary = () => {
    if (!submittedStatus) return;
    navigator.clipboard.writeText(submittedStatus.summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-2">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Contact Me
          </h2>
          <p className="text-sm text-slate-400">
            Interested in discussing entry-level IT roles, on-campus placements, or technical collaboration? Reach out directly via email or the verified channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary College Email Card */}
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-900/50 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                      Institutional Email (PSR College)
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                    <div className="text-xs text-slate-500 mt-1">
                      Department Student ID: 23AD015
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Secondary / Personal Email Card */}
            {profile.secondaryEmail && (
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-400 border border-slate-700/60 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                      Alternative Email
                    </div>
                    <a
                      href={`mailto:${profile.secondaryEmail}`}
                      className="text-sm font-medium text-slate-200 hover:text-white transition-colors break-all"
                    >
                      {profile.secondaryEmail}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-400 border border-slate-700/60 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                    Phone & WhatsApp
                  </div>
                  <div className="text-sm font-medium text-slate-200">
                    {profile.phone}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Available during standard working hours
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-400 border border-slate-700/60 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                    Campus & Location
                  </div>
                  <div className="text-sm font-medium text-slate-200">
                    {profile.location}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {profile.college}, Sevalpatti, Sivakasi
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">
                Professional Network
              </div>
              <div className="flex flex-col gap-2.5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 p-2 rounded-lg transition-colors"
                >
                  <span className="font-medium">LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Real Validation & Honest Dispatch */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below. Once reviewed, you can dispatch it directly through your preferred email client or copy the formatted text.
              </p>

              {submittedStatus ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-emerald-300 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 font-semibold mb-1">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Message Formatted Successfully</span>
                    </div>
                    <p className="text-emerald-400/90 text-xs leading-relaxed">
                      This portfolio operates without third-party email trackers. Choose how you would like to send your inquiry to <strong>{profile.email}</strong>:
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={submittedStatus.mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                    >
                      {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSummary ? 'Copied' : 'Copy Message'}</span>
                    </button>

                    <button
                      onClick={() => setSubmittedStatus(null)}
                      className="px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>

                  {/* Message Summary Preview */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300 whitespace-pre-wrap">
                    {submittedStatus.summary}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / HR Recruiter"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950/80 text-white border rounded-lg focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. hr@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950/80 text-white border rounded-lg focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Placement Drive / Software Engineer Opportunity"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950/80 text-white border rounded-lg focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note regarding interview opportunities, project discussion, or recruitment queries..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950/80 text-white border rounded-lg focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-600" />
                      <span>Zero spam · Verified direct dispatch</span>
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                    >
                      <span>Prepare Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
