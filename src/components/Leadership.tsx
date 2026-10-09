import React from 'react';
import { Trophy, Activity, Sparkles, Navigation, Mic2, Medal, ShieldCheck } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

const leadershipIconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={24} className="text-amber-400" />,
  Activity: <Activity size={24} className="text-[#3478F6]" />,
  Sparkles: <Sparkles size={24} className="text-pink-400" />,
  Navigation: <Navigation size={24} className="text-emerald-400" />,
  Mic2: <Mic2 size={24} className="text-[#818CF8]" />,
  Medal: <Medal size={24} className="text-amber-300" />,
};

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="content-section relative overflow-hidden border-b border-white/[0.05] bg-[#0B0C0E]">
      {/* Subtle ambient glow matching Hero elegance */}
      <div className="absolute top-1/3 -left-48 -translate-y-1/2 w-[520px] h-[520px] bg-[#1A6DFF]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-white/[0.08] pb-12 lg:mb-16 lg:pb-16">
          <div className="eyebrow-tag mb-6">
            BEYOND PROFESSIONAL WORK
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F6F8] tracking-tight leading-[1.08] max-w-3xl">
            Leadership Is Built Through Participation
          </h2>
          <p className="mt-4 text-[#A8B0BC] text-base sm:text-lg max-w-2xl font-normal">
            Proven responsibility, team synchronization, large-scale tour coordination, and athletic discipline outside the corporate desk.
          </p>
        </div>

        {/* Highlight Banner: 3-Year Tour Coordination */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#15171C] to-[#101216] border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Highlighted Operational Responsibility
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F6F8]">
                University Tour Leadership for 3 Consecutive Years
              </h3>
              <p className="text-sm text-[#A8B0BC] leading-relaxed">
                Appointed head organizer for annual university excursions across three successive years. Spearheaded full-scale logistical planning, inter-city transport, budget management, and safety coordination for groups of 70 to 80 participants.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <div className="px-5 py-4 rounded-xl bg-[#181B22] border border-white/5 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#3478F6]">70–80</span>
                <span className="text-[11px] font-semibold text-[#8E97A6] uppercase">Delegates / Year</span>
              </div>
              <div className="px-5 py-4 rounded-xl bg-[#181B22] border border-white/5 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">3 Years</span>
                <span className="text-[11px] font-semibold text-[#8E97A6] uppercase">Consecutive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipData.map((item) => (
            <div
              key={item.id}
              className="editorial-card min-h-[280px] p-7 sm:p-8 bg-[#15171C] rounded-2xl border border-white/[0.08] hover:border-[#3478F6]/40 flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Top Icon and Metric Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1E2128] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {leadershipIconMap[item.icon] || <Trophy size={22} className="text-[#3478F6]" />}
                  </div>

                  {item.impactMetrics && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#1E2128] text-[#60A5FA] border border-white/5">
                      {item.impactMetrics}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F5F6F8] mb-1 group-hover:text-white transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Context Tag */}
                <span className="text-xs font-semibold text-[#3478F6] block mb-3">
                  {item.context}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Role indicator */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8E97A6]">
                <span className="font-medium text-white/80">{item.role}</span>
                <ShieldCheck size={14} className="text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
