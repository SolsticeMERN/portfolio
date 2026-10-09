import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  Mail,
  BookOpen,
  Globe,
  FileText,
  Download,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { LinkedInIcon } from './LinkedInIcon';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', id);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-[#0B0C0E] overflow-hidden"
    >
      {/* Subtle ambient radial glow centered behind portrait */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-[#1A6DFF]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* 
        ========================================================================
        1. BIG CENTERED HERO IMAGE IN BACKGROUND (Covering center stage, clear of text)
        ========================================================================
      */}
      <div className="absolute inset-x-0 bottom-0 top-16 sm:top-12 flex items-end justify-center pointer-events-none z-0">
        <div className="relative w-full max-w-[620px] lg:max-w-[740px] xl:max-w-[820px] h-[84%] sm:h-[90%] lg:h-[95%] flex items-end justify-center">
          <img
            src="/images/hero-bg-remover.png"
            alt={profileData.name}
            className="hero-portrait h-full w-auto max-w-none object-contain object-bottom select-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            loading="eager"
          />

          {/* Smooth blend overlay into dark section floor */}
          <div className="absolute inset-x-0 -bottom-1 h-32 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/80 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 
        ========================================================================
        2. SURROUNDING INFORMATION (Full screen editorial framing matching reference)
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10 pt-16 sm:pt-20 lg:pt-12">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-8">

          {/* LEFT FLANK: 3-line impactful headline aligned with reference visual */}
          <div className="hero-copy w-full lg:max-w-[420px] xl:max-w-[460px] flex flex-col justify-between lg:pt-12">

            <div>
              {/* White accent bar (Matching reference) */}
              <div className="w-11 h-1 bg-white mb-5 rounded-full" />

              {/* Original Headline strictly in 3 lines: Curious Mind / Purposeful Work / Continuous Growth */}
              <h1 className="text-[30px] sm:text-[34px] lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
                <span className="block whitespace-nowrap">Curious Mind.</span>
                <span className="block whitespace-nowrap">Purposeful Work.</span>
                <span className="block whitespace-nowrap text-[#3478F6]">Continuous Growth.</span>
              </h1>

              {/* Original narrative kept to strictly 3 lines with safe margin */}
              <p className="text-xs sm:text-sm text-[#A0A6B2] leading-relaxed mb-7 max-w-[360px] font-normal">
                Qualified professional with academic roots in Science Education from Khulna University (B.Ed., CGPA 3.58), corporate B2B lead generation at SJ Innovation LLC, and published research.
              </p>
            </div>

            {/* Action Buttons: Enlarged Circular Down Arrow + Download Resume Button */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                aria-label="Scroll down to About section"
                className="w-14 h-14 rounded-full bg-[#1A6DFF] hover:bg-[#0052E0] text-white flex items-center justify-center shadow-[0_0_35px_rgba(26,109,255,0.45)] hover:shadow-[0_0_50px_rgba(26,109,255,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-white shrink-0"
              >
                <ArrowDown size={22} className="stroke-[2.5] group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="/Md_Shakil_Sarker_Resume.pdf"
                download="Md_Shakil_Sarker_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#181B21] hover:bg-[#1E2128] text-white font-semibold text-xs border border-white/10 hover:border-[#1A6DFF]/50 shadow-lg shadow-black/40 hover:shadow-[#1A6DFF]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1A6DFF]"
              >
                <Download size={15} className="text-[#3478F6] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* RIGHT FLANK: Reference-matched Editorial Column with generous vertical distribution */}
          <div className="w-full lg:max-w-[290px] xl:max-w-[320px] flex flex-col justify-between">

            {/* Block 1: ABOUT ME */}
            <div className="pb-7 lg:pb-9">
              <h3 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-white block mb-3.5 lg:mb-4">
                ABOUT ME
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#A0A6B2] leading-[1.65] font-normal mb-4 lg:mb-5">
                Bachelor of Education in Science Education from Khulna University (CGPA 3.58). Dedicated to methodical research, structured data pipelines, and evidence-based problem solving.
              </p>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-white hover:text-[#3478F6] tracking-[0.12em] uppercase transition-colors group"
              >
                <span>LEARN MORE</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* Subtle Divider Line */}
            <div className="w-full h-[1px] bg-white/[0.08]" />

            {/* Block 2: MY WORK (With generous top padding and bottom spacing) */}
            <div className="py-7 lg:py-9">
              <h3 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-white block mb-3.5 lg:mb-4">
                MY WORK
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#A0A6B2] leading-[1.65] font-normal mb-4 lg:mb-5">
                Former Lead Gen Specialist at SJ Innovation LLC and international freelance researcher on Upwork &amp; Fiverr. Practical skills in Google Ads, Meta Ads &amp; SEO.
              </p>
              <a
                href="#portfolio"
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-white hover:text-[#3478F6] tracking-[0.12em] uppercase transition-colors group"
              >
                <span>BROWSE PORTFOLIO</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* Subtle Divider Line */}
            <div className="w-full h-[1px] bg-white/[0.08]" />

            {/* Block 3: FOLLOW ME (With generous top padding) */}
            <div className="pt-7 lg:pt-9">
              <h3 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] text-white block mb-4 lg:mb-5">
                FOLLOW ME
              </h3>

              <div className="flex items-center gap-6 text-white/85">
                <a
                  href="https://shakilsrker.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all p-0.5"
                  aria-label="Website"
                  title="shakilsrker.vercel.app"
                >
                  <Globe size={20} />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all p-0.5"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInIcon size={20} />
                </a>
                <a
                  href={profileData.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all p-0.5"
                  aria-label="ResearchGate"
                  title="ResearchGate"
                >
                  <BookOpen size={20} />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-white hover:scale-110 transition-all p-0.5"
                  aria-label="Email"
                  title="Email Shakil"
                >
                  <Mail size={20} />
                </a>
                {onOpenResume && (
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="hover:text-white hover:scale-110 transition-all p-0.5"
                    aria-label="ATS Resume"
                    title="View ATS Resume"
                  >
                    <FileText size={20} />
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Subtle bottom scroll indicator (Signature feature from reference) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center pointer-events-none">
        <div className="w-[20px] h-[32px] rounded-full border border-white/25 flex justify-center pt-2">
          <div className="w-[3px] h-[6px] rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
