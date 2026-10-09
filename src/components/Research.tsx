import React, { useState } from 'react';
import { BookOpen, ExternalLink, Calendar, CheckCircle2, Copy, Check } from 'lucide-react';
import { researchPublicationData } from '../data/portfolioData';

export const Research: React.FC = () => {
  const [copiedCitation, setCopiedCitation] = useState(false);

  const citationText = `Sarker, S. (2024). Effect of Student-Centered Teaching on Mathematics Performance at Secondary Level. Published September 12, 2024. ResearchGate.`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <section id="research" className="content-section relative overflow-hidden border-b border-white/[0.05] bg-[#0B0C0E]">
      {/* Subtle ambient glow matching Hero elegance */}
      <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-[520px] h-[520px] bg-[#1A6DFF]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Eyebrow */}
        <div className="eyebrow-tag mb-6">
          RESEARCH &amp; PUBLICATION
        </div>

        {/* Section Heading */}
        <div className="mb-12 border-b border-white/[0.08] pb-12 lg:mb-16 lg:pb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F6F8] tracking-tight leading-[1.08] max-w-3xl">
            Exploring Ideas Beyond the Workplace
          </h2>
          <p className="mt-5 text-[#A8B0BC] text-base leading-7 sm:text-lg max-w-2xl font-normal">
            Bridging pedagogical theory and empirical investigation through peer-reviewed academic inquiry into secondary mathematics learning.
          </p>
        </div>

        {/* Featured Publication Hero Layout (Distinct Editorial Design) */}
        <div className="editorial-card bg-[#15171C] rounded-3xl border border-white/[0.08] overflow-hidden p-8 sm:p-12 lg:p-14 relative">
          
          {/* Subtle top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3478F6] via-[#60A5FA] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Publication Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#3478F6]/20 text-[#60A5FA] border border-[#3478F6]/30 flex items-center gap-1.5">
                  <BookOpen size={13} />
                  <span>Research Publication</span>
                </span>
                
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#1E2128] text-[#A8B0BC] border border-white/5 flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#3478F6]" />
                  <span>Published: {researchPublicationData.publicationDate}</span>
                </span>

                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-[#00CCBB]/15 text-[#00CCBB] border border-[#00CCBB]/30">
                  {researchPublicationData.platform}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F6F8] leading-snug">
                {researchPublicationData.title}
              </h3>

              {/* Methodology Pill */}
              <div className="p-3 rounded-lg bg-[#1E2128]/60 border border-white/[0.04] text-xs sm:text-sm text-[#A8B0BC]">
                <span className="font-bold text-[#60A5FA] block sm:inline mr-2">Methodology:</span>
                <span>{researchPublicationData.methodology}</span>
              </div>

              {/* Concise Description */}
              <p className="text-sm sm:text-base text-[#A8B0BC] leading-relaxed">
                {researchPublicationData.description}
              </p>

              {/* Methodological Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block">
                  Key Research Dimensions:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {researchPublicationData.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#D1D5DB]">
                      <CheckCircle2 size={15} className="text-[#3478F6] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keywords */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {researchPublicationData.keywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#101216] text-[#8E97A6] border border-white/5"
                  >
                    #{kw}
                  </span>
                ))}
              </div>

              {/* CTA Row */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={researchPublicationData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#3478F6] hover:bg-[#2563EB] text-white font-bold text-sm shadow-lg shadow-[#3478F6]/25 hover:shadow-[#3478F6]/40 transition-all group focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                >
                  <span>Read Publication on ResearchGate</span>
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={copyCitation}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#292F39] hover:bg-[#323946] text-[#F5F6F8] font-semibold text-xs border border-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
                >
                  {copiedCitation ? (
                    <>
                      <Check size={15} className="text-emerald-400" />
                      <span className="text-emerald-400">Citation Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} className="text-[#3478F6]" />
                      <span>Copy Academic Citation</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right Graphic Preview (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full rounded-xl overflow-hidden bg-[#15171C] border border-white/10 shadow-2xl relative">
                <img
                  src="/images/projects/math-research.svg"
                  alt="Mathematics Performance Research Visualization"
                  className="w-full h-auto object-cover"
                />

                {/* Caption bar */}
                <div className="p-4 bg-[#15171C]/95 border-t border-white/10 text-[11px] text-[#A8B0BC] flex items-center justify-between">
                  <span className="font-semibold text-white">Quasi-Experimental Model</span>
                  <span className="text-[#3478F6] font-mono">p &lt; 0.05 Gain</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
