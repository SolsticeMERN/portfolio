import React from 'react';
import { Building2, Calendar, Check, Globe2, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section relative overflow-hidden border-b border-white/[0.05] bg-[#0B0C0E]">
      <div className="pointer-events-none absolute -left-52 top-1/3 h-[480px] w-[480px] rounded-full bg-[#1A6DFF]/[0.035] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pb-16">
          <div className="lg:col-span-7">
            <div className="eyebrow-tag mb-6">Experience</div>
            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#F5F6F8] sm:text-5xl">
              Where I&apos;ve learned, delivered, and grown.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#A8B0BC] lg:col-span-5 lg:pb-1 sm:text-lg">
            Corporate employment and cross-border freelance work that built practical research discipline, thoughtful client communication, and reliable execution.
          </p>
        </div>

        <div className="experience-list relative mt-16 space-y-10 lg:mt-20 lg:space-y-14">
          {experienceData.map((experience, index) => {
            const isFreelance = index === 0;
            const Icon = isFreelance ? Globe2 : Building2;

            return (
              <article key={experience.id} className="experience-card group relative rounded-3xl border border-white/[0.09] bg-[#15171C]/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3478F6]/50 hover:bg-[#191C23] hover:shadow-[0_24px_55px_-32px_rgba(52,120,246,0.6)] sm:p-10">
                <span className="pointer-events-none absolute right-7 top-5 text-6xl font-extrabold tracking-tighter text-white/[0.035] transition-colors group-hover:text-[#3478F6]/[0.11] sm:right-10 sm:top-7">
                  0{index + 1}
                </span>

                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#1E2128] text-[#3478F6] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>

                    <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.15em] text-[#4D8CFF]">{experience.type}</p>
                    <h3 className="mt-3 max-w-sm text-2xl font-extrabold leading-tight tracking-tight text-[#F5F6F8]">{experience.role}</h3>
                    <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/85">
                      <Icon size={15} className="text-[#3478F6]" />
                      {experience.company}
                    </p>

                    <div className="mt-8 space-y-3 border-t border-white/[0.08] pt-6 text-sm text-[#A8B0BC]">
                      <p className="flex items-start gap-2.5"><Calendar size={15} className="mt-0.5 shrink-0 text-[#3478F6]" />{experience.period}</p>
                      <p className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 shrink-0 text-[#3478F6]" />{experience.location}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 lg:border-l lg:border-white/[0.08] lg:pl-12">
                    <p className="max-w-2xl text-base leading-7 text-[#C2C9D3] sm:text-lg">{experience.description}</p>

                    <div className="mt-9">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#778195]">Key contributions</p>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {experience.keyResponsibilities.map((responsibility) => (
                          <div key={responsibility} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#0E1014]/55 p-4">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3478F6]/15 text-[#60A5FA]">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <p className="text-sm leading-6 text-[#A8B0BC]">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-white/[0.08] pt-6">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#778195]">Core strengths</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skillsUsed.map((skill) => (
                          <span key={skill} className="rounded-full border border-white/[0.08] bg-[#1E2128] px-3 py-1.5 text-xs font-medium text-[#C2C9D3] transition-colors hover:border-[#3478F6]/40 hover:text-white">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
