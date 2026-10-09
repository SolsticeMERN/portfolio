import React from 'react';
import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C0E] px-4 pb-4 pt-10 sm:px-6 sm:pb-6 lg:px-8 lg:pt-16">
      <div className="footer-statement relative mx-auto max-w-[1320px] overflow-hidden border border-white/[0.12] bg-[#0D1118] px-7 pt-10 sm:px-10 sm:pt-12 lg:px-14 lg:pt-14">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18rem] bg-[radial-gradient(ellipse_at_center_bottom,rgba(52,120,246,0.34),rgba(52,120,246,0.10)_38%,transparent_72%)]" />
        <div className="relative grid gap-10 sm:grid-cols-3 lg:max-w-3xl lg:gap-16">
          <div>
            <p className="footer-label">Navigation</p>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#portfolio">Portfolio</a>
            </nav>
          </div>

          <div>
            <p className="footer-label">Resources</p>
            <nav className="footer-links" aria-label="Footer resources">
              <a href={profileData.resumeUrl} download="Shakil_Sarker_Resume.pdf">Download resume</a>
              <a href="#research">Research</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div>
            <p className="footer-label">Connect</p>
            <nav className="footer-links" aria-label="Social links">
              <a href={profileData.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
              <a href={profileData.researchGate} target="_blank" rel="noreferrer">ResearchGate <ArrowUpRight size={12} /></a>
              <a href={`mailto:${profileData.email}`}>Email <Mail size={12} /></a>
            </nav>
          </div>
        </div>

        <div className="relative mt-16 flex items-center justify-between border-t border-white/[0.10] py-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A8B0BC] sm:mt-20">
          <p>© {currentYear} {profileData.name}</p>
          <p className="hidden sm:block">Bogura, Bangladesh · GMT +6</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#F5F6F8] transition-colors hover:text-[#78A7FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6]"
          >
            Back to top <ArrowUp size={13} className="text-[#3478F6]" />
          </button>
        </div>

        <p className="footer-wordmark relative -mb-[0.13em] select-none text-center font-black uppercase leading-[0.72] tracking-[-0.09em] text-[#F5F6F8]">
          Shakil
        </p>
      </div>
    </footer>
  );
};
