import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="content-section relative overflow-hidden border-b border-white/[0.05] bg-[#0B0C0E]">
      {/* Subtle ambient glow matching Hero elegance */}
      <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-[520px] h-[520px] bg-[#1A6DFF]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-white/[0.08] pb-12 lg:mb-16 lg:pb-16">
          <div className="eyebrow-tag mb-6">
            EDUCATION
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F6F8] tracking-tight leading-[1.08] max-w-3xl">
            Academic Foundation
          </h2>
          <p className="mt-5 text-[#A8B0BC] text-base leading-7 sm:text-lg max-w-2xl font-normal">
            Dual postgraduate academic degrees pairing humanities analysis with formal science education pedagogy and empirical inquiry.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
            className="editorial-card min-h-[360px] p-8 sm:p-10 bg-[#15171C] rounded-3xl border border-white/[0.08] hover:border-[#3478F6]/40 flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1E2128] text-[#3478F6] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <GraduationCap size={24} />
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1E2128] text-[#60A5FA] border border-white/5">
                    {edu.result}
                  </span>
                </div>

                {/* Degree Name */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F6F8] mb-1 group-hover:text-white transition-colors">
                  {edu.degree}
                </h3>

                {/* Field */}
                <span className="text-xs font-bold uppercase tracking-wider text-[#3478F6] block mb-3">
                  Field: {edu.field}
                </span>

                {/* Institution Details */}
                <p className="text-xs sm:text-sm font-medium text-white/90 mb-2">
                  {edu.institution}
                </p>

                {/* Timeline info */}
                <p className="text-xs text-[#8E97A6] mb-4">
                  {edu.passingYear}
                </p>

                {/* Curriculum Focus */}
                <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed pt-3 border-t border-white/[0.06]">
                  {edu.notes}
                </p>
              </div>

              {/* Verified Status Note */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8E97A6]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 size={14} />
                  <span>Official Transcript &amp; Certificate Conferred</span>
                </div>
                <span className="text-[11px] text-[#737B8B]">Bangladesh</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Verification */}
        <div className="mt-10 p-6 rounded-2xl bg-[#15171C]/60 border border-white/[0.04] text-sm text-[#8E97A6] flex items-center justify-between flex-wrap gap-4">
          <span>* Certified copies of academic marksheets and certificates are available upon formal employer request.</span>
          <span className="text-[#3478F6] font-semibold">Available for BDJobs &amp; Corporate Verifications</span>
        </div>

      </div>
    </section>
  );
};
