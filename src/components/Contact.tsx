import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  MapPin,
  Download,
  Copy,
  Check,
  BookOpen,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { LinkedInIcon } from './LinkedInIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Direct mailto generation ensures authentic communication without pretending a fake backend delivered it
    const subjectLine = encodeURIComponent(
      formData.subject || `Professional Inquiry from ${formData.name} via Portfolio`
    );
    const bodyText = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open mail client
    window.location.href = `mailto:${profileData.email}?subject=${subjectLine}&body=${bodyText}`;

    setSubmittedStatus('Mail client launched! You can also email me directly at ' + profileData.email);
  };

  return (
    <section id="contact" className="content-section relative overflow-hidden border-b border-white/[0.05] bg-[#0B0C0E]">
      {/* Subtle ambient glow matching Hero elegance */}
      <div className="absolute bottom-10 -right-48 w-[560px] h-[560px] bg-[#1A6DFF]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Top Eyebrow */}
        <div className="eyebrow-tag mb-6">
          LET'S CONNECT
        </div>

        {/* Two-Column Layout (Matching Inspiration Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start mb-24">
          
          {/* Left Column: Heading & Recruiter Invitation (5 cols) */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F6F8] tracking-tight leading-[1.08] mb-7">
              Interested in <br />
              my background? <br />
              <span className="text-[#3478F6] inline-flex items-center gap-2">
                Let's talk <ArrowRight size={36} className="inline" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A8B0BC] leading-relaxed mb-8">
              Open to discussions regarding full-time roles, corporate positions, marketing and lead generation opportunities, academic inquiries, or public-sector career pathways.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#15171C] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1E2128] text-[#3478F6] flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#8E97A6] uppercase tracking-wider block">Email Me</span>
                    <a href={`mailto:${profileData.email}`} className="text-sm font-semibold text-white hover:text-[#3478F6] transition-colors">
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#1E2128] text-xs font-semibold text-[#A8B0BC] hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#15171C] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#1E2128] text-[#3478F6] flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8E97A6] uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-semibold text-white">{profileData.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#15171C] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#1E2128] text-[#3478F6] flex items-center justify-center">
                  <Download size={16} />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#8E97A6] uppercase tracking-wider block">Official Resume</span>
                    <span className="text-sm font-semibold text-white">Shakil Sarker CV (PDF)</span>
                  </div>
                  <a
                    href={profileData.resumeUrl}
                    download="Shakil_Sarker_Resume.pdf"
                    className="text-xs font-bold text-[#3478F6] hover:text-white uppercase tracking-wider transition-colors"
                  >
                    Download ↓
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Editorial Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#15171C] p-8 sm:p-12 rounded-3xl border border-white/[0.08]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Name */}
              <div className="border-b border-white/10 pb-2 focus-within:border-[#3478F6] transition-colors">
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#A8B0BC] mb-2">
                  Enter your name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
                />
              </div>

              {/* Field 2: Email */}
              <div className="border-b border-white/10 pb-2 focus-within:border-[#3478F6] transition-colors">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#A8B0BC] mb-2">
                  Your email address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. contact@company.com"
                  className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
                />
              </div>

              {/* Field 3: Subject */}
              <div className="border-b border-white/10 pb-2 focus-within:border-[#3478F6] transition-colors">
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#A8B0BC] mb-2">
                  Subject / Organization
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Interview Invitation / Project Opportunity"
                  className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
                />
              </div>

              {/* Field 4: Message */}
              <div className="border-b border-white/10 pb-2 focus-within:border-[#3478F6] transition-colors">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#A8B0BC] mb-2">
                  Describe your project or inquiry *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide brief details on your organization, position requirements, or project scope..."
                  className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button Row */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#3478F6] hover:bg-[#2563EB] text-white font-bold text-sm shadow-lg shadow-[#3478F6]/25 hover:shadow-[#3478F6]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] group"
                >
                  <span>Contact me</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-xs text-[#8E97A6]">
                  Launches your email client directly.
                </span>
              </div>

              {submittedStatus && (
                <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  {submittedStatus}
                </div>
              )}

            </form>
          </div>

        </div>

        {/* Bottom Banner Card (Exact recreation of the reference footer banner card) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#15171C] border border-white/[0.08] shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left: Avatar, Name, Title & Socials */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-[#1E2128] border-2 border-white/10 shrink-0">
                <img
                  src={profileData.portraits.main}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h4 className="text-lg font-extrabold text-[#F5F6F8]">
                  {profileData.name}
                </h4>
                <p className="text-xs text-[#A8B0BC] font-medium mb-2">
                  {profileData.tagline}
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-md bg-[#1E2128] text-[#A8B0BC] hover:text-white hover:bg-[#3478F6] flex items-center justify-center transition-colors text-xs"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={13} />
                  </a>
                  <a
                    href={profileData.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-md bg-[#1E2128] text-[#A8B0BC] hover:text-white hover:bg-[#00CCBB] flex items-center justify-center transition-colors text-xs"
                    aria-label="ResearchGate"
                  >
                    <BookOpen size={13} />
                  </a>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="w-7 h-7 rounded-md bg-[#1E2128] text-[#A8B0BC] hover:text-white hover:bg-[#3478F6] flex items-center justify-center transition-colors text-xs"
                    aria-label="Email"
                  >
                    <Mail size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Direct Channels */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.06]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#737B8B] block mb-1">
                  EMAIL ME:
                </span>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm font-semibold text-white hover:text-[#3478F6] transition-colors"
                >
                  {profileData.email}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#737B8B] block mb-1">
                  LOCATION:
                </span>
                <span className="text-sm font-semibold text-white">
                  {profileData.location}
                </span>
              </div>

              <div>
                <a
                  href={profileData.resumeUrl}
                  download="Shakil_Sarker_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1E2128] text-[#F5F6F8] hover:text-white hover:bg-[#252A34] text-xs font-bold border border-white/10 transition-colors"
                >
                  <Download size={13} className="text-[#3478F6]" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
