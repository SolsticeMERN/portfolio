import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="bg-[#111317] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Toolbar */}
        <div className="p-4 bg-[#15171C] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 id="resume-modal-title" className="text-sm font-bold text-white">
              Official ATS Single-Column Executive Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.open('/resume.html', '_blank')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E2128] text-[#F5F6F8] hover:text-white hover:bg-white/10 text-xs font-semibold border border-white/5 transition-colors"
              title="Open standalone printable page in new tab"
            >
              <ExternalLink size={13} />
              <span className="hidden sm:inline">Open Print View</span>
            </button>

            <a
              href="/Md_Shakil_Sarker_Resume.pdf"
              download="Md_Shakil_Sarker_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#3478F6] text-white hover:bg-[#2563EB] text-xs font-bold shadow-sm transition-colors"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1E2128] text-[#A8B0BC] hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close Resume Preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Preview Container (Clean White Executive Sheet) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0B0C0E]/90 flex justify-center">
          <div className="bg-white text-[#111827] w-full max-w-[800px] p-8 sm:p-12 shadow-2xl rounded-sm font-['Inter',sans-serif] text-[11px] leading-[1.45] select-text">
            
            {/* Header */}
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-[#111827] mb-1">
                Md Shakil Sarker
              </h1>
              <div className="text-[10px] text-[#4B5563] space-x-1.5">
                <span>Bogura, Bangladesh</span>
                <span>•</span>
                <a href="mailto:shakil.srkr.bd@gmail.com" className="text-[#1D4ED8] underline">shakil.srkr.bd@gmail.com</a>
                <span>•</span>
                <span>+8801783025100</span>
                <span>•</span>
                <a href="https://www.linkedin.com/in/shakilleadgen/" target="_blank" rel="noreferrer" className="text-[#1D4ED8] underline">linkedin.com/in/shakilleadgen</a>
                <span>•</span>
                <a href="https://cienceleads.com/" target="_blank" rel="noreferrer" className="text-[#1D4ED8] underline">cienceleads.com</a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-3">
              <div className="text-[11.5px] font-bold uppercase tracking-wider text-[#111827]">
                Professional Summary
              </div>
              <div className="h-[1px] bg-[#374151] w-full mt-0.5 mb-1.5" />
              <p className="text-[10.5px] text-[#1F2937] text-justify leading-relaxed">
                Versatile professional with corporate employment and freelance experience specializing in B2B lead generation, online business research, data management, client communication, and digital marketing. Holds a Bachelor of Education (B.Ed.) in Science Education from Khulna University (CGPA 3.58/4.00) with published empirical research in secondary mathematics pedagogy. Knowledgeable in Google Ads, Meta Ads, SEO, email marketing, and market research. Demonstrates strong analytical, organizational, and cross-functional leadership abilities suited for banking, corporate operations, digital marketing, and administration.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="mb-3">
              <div className="text-[11.5px] font-bold uppercase tracking-wider text-[#111827]">
                Professional Experience
              </div>
              <div className="h-[1px] bg-[#374151] w-full mt-0.5 mb-1.5" />

              {/* Freelance */}
              <div className="mb-2.5">
                <div className="flex justify-between items-baseline font-bold text-[11px] text-[#111827]">
                  <span>Freelance Lead Generation Specialist</span>
                  <span className="text-[10px] text-[#374151]">January 2021 — Present | Remote</span>
                </div>
                <div className="text-[10.5px] text-[#374151] mb-1">
                  Independent Freelance Professional (Fiverr &amp; Upwork)
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-[#1F2937]">
                  <li>Delivered end-to-end B2B lead generation, prospect identification, and web research services to international business clients.</li>
                  <li>Conducted targeted LinkedIn research and curated verified decision-maker contact lists tailored to niche industry criteria.</li>
                  <li>Executed multi-step data verification to eliminate duplicate records, validate email deliverability, and maintain CRM hygiene.</li>
                  <li>Managed client project requirements, maintained prompt async communication, and delivered structured spreadsheets on schedule.</li>
                  <li><strong>Areas of Expertise:</strong> B2B Sales &amp; Lead Generation, CRM Data Management, Online Research, Client Coordination.</li>
                </ul>
              </div>

              {/* SJ Innovation */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-[11px] text-[#111827]">
                  <span>Lead Generation Specialist</span>
                  <span className="text-[10px] text-[#374151]">August 2021 — February 2023 | Remote</span>
                </div>
                <div className="text-[10.5px] text-[#374151] mb-1">
                  SJ Innovation LLC (IT &amp; Software Development)
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-[#1F2937]">
                  <li>Conducted strategic B2B lead generation and targeted online research to identify prospective enterprise and mid-market accounts.</li>
                  <li>Researched, verified, and organized business contact intelligence across multiple international commercial sectors.</li>
                  <li>Maintained CRM data accuracy and upheld quality benchmarks through systematic data cleansing and email domain verification.</li>
                  <li>Collaborated cross-functionally with sales and marketing teams to align prospect lists with campaign parameters and strict delivery timelines.</li>
                  <li><strong>Areas of Expertise:</strong> B2B Lead Prospecting, CRM Data Organization, Prospect Verification, Account Discovery.</li>
                </ul>
              </div>
            </div>

            {/* Academic Research */}
            <div className="mb-3">
              <div className="text-[11.5px] font-bold uppercase tracking-wider text-[#111827]">
                Academic Research &amp; Publication
              </div>
              <div className="h-[1px] bg-[#374151] w-full mt-0.5 mb-1.5" />
              <div className="flex justify-between items-baseline font-bold text-[11px] text-[#111827]">
                <span>Effect of Student-Centered Teaching on Mathematics Performance at Secondary Level</span>
                <span className="text-[10px] text-[#374151]">Published: September 12, 2024 | ResearchGate</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-[#1F2937] mt-1">
                <li>Conducted empirical research investigating how student-centered pedagogical models impact academic performance in secondary mathematics.</li>
                <li>Utilized a quasi-experimental design and convenience sampling to assess comparative gains between experimental and control cohorts.</li>
                <li>Publication URL: <a href="https://www.researchgate.net/publication/387678538_Effect_of_Student-Centered_Teaching_Approach_on_Academic_Performance_in_Mathematics_at_the_Secondary_School_Level" target="_blank" rel="noreferrer" className="text-[#1D4ED8] underline">researchgate.net/publication/387678538</a></li>
              </ul>
            </div>

            {/* Education */}
            <div className="mb-3">
              <div className="text-[11.5px] font-bold uppercase tracking-wider text-[#111827]">
                Education
              </div>
              <div className="h-[1px] bg-[#374151] w-full mt-0.5 mb-1.5" />
              <div className="flex justify-between items-baseline font-bold text-[11px] text-[#111827]">
                <span>Bachelor of Education (B.Ed.) in Science Education</span>
                <span className="text-[10px] text-[#374151]">Graduated 2023 | Khulna, Bangladesh</span>
              </div>
              <div className="text-[10.5px] text-[#374151]">
                Khulna University • 4-Year Full-Time Degree Program • <strong>CGPA: 3.58 / 4.00</strong>
              </div>
            </div>

            {/* Leadership & Achievements */}
            <div className="mb-3">
              <div className="text-[11.5px] font-bold uppercase tracking-wider text-[#111827]">
                Leadership &amp; Extracurricular Achievements
              </div>
              <div className="h-[1px] bg-[#374151] w-full mt-0.5 mb-1.5" />
              <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-[#1F2937]">
                <li><strong>University Athletics Captaincy:</strong> Served as Captain of the Khulna University Men's Cricket Team and Men's Volleyball Team; official Trainer for the University Women's Volleyball Team.</li>
                <li><strong>Annual Tour Leadership:</strong> Directed Khulna University annual tours for 3 consecutive years; coordinated logistics, lodging, transport, safety, and budget for groups of 70–80 participants.</li>
                <li><strong>Event Organization &amp; Honors:</strong> Organized institutional debates, academic seminars, and school programs; earned multiple sports medals, awards, and certificates in cricket, football, volleyball, and badminton.</li>
              </ul>
            </div>

            {/* Skills & Competencies */}
            <div>
              <div className="text-[11.5px] font-bold uppercase tracking-wider text-[#111827]">
                Skills &amp; Competencies
              </div>
              <div className="h-[1px] bg-[#374151] w-full mt-0.5 mb-1.5" />
              <div className="space-y-1 text-[10.5px]">
                <div className="flex">
                  <span className="font-bold text-[#111827] w-36 shrink-0">Digital Marketing:</span>
                  <span className="text-[#1F2937]">Google Ads, Meta Ads, Search Engine Optimization (SEO), Email Marketing, Advertising &amp; Promotion, Market Research</span>
                </div>
                <div className="flex">
                  <span className="font-bold text-[#111827] w-36 shrink-0">Research &amp; Data:</span>
                  <span className="text-[#1F2937]">B2B Lead Generation, LinkedIn Research, CRM Data Management, Data Verification, Online Market Research, Business Research</span>
                </div>
                <div className="flex">
                  <span className="font-bold text-[#111827] w-36 shrink-0">Professional Skills:</span>
                  <span className="text-[#1F2937]">Client Communication, Analytical Thinking, Problem Solving, Project Coordination, Time Management, Team Leadership</span>
                </div>
                <div className="flex">
                  <span className="font-bold text-[#111827] w-36 shrink-0">Technical Tools:</span>
                  <span className="text-[#1F2937]">CRM Platforms, LLM-Based Tools, Slack, Discord, Google Workspace, Advanced Spreadsheets</span>
                </div>
                <div className="flex">
                  <span className="font-bold text-[#111827] w-36 shrink-0">Languages:</span>
                  <span className="text-[#1F2937]">Bengali (Native / High Proficiency), English (High Professional Working Proficiency)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
