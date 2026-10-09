import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Globe2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { aboutNarrative, profileData } from '../data/portfolioData';

const highlights = [
  {
    icon: GraduationCap,
    label: 'Academic Foundation',
    title: 'MA & B.Ed. Degrees',
    detail: 'Dual postgraduate training in Arts and Science Education, grounded in empirical research.',
    index: '01',
  },
  {
    icon: Building2,
    label: 'Corporate Experience',
    title: 'SJ Innovation LLC',
    detail: 'B2B prospect research, CRM data hygiene, and verified outreach intelligence.',
    index: '02',
  },
  {
    icon: Globe2,
    label: 'Global Engagements',
    title: 'Fiverr & Upwork',
    detail: 'International client communication, project scoping, and dependable remote delivery.',
    index: '03',
  },
  {
    icon: Sparkles,
    label: 'Research & Leadership',
    title: 'Published Author',
    detail: 'Secondary mathematics research alongside team captaincy and tour leadership.',
    index: '04',
  },
];

const organizations = [
  { name: 'SJ Innovation LLC', color: 'bg-[#3478F6]' },
  { name: 'Upwork Global', color: 'bg-emerald-500' },
  { name: 'Fiverr International', color: 'bg-emerald-400' },
  { name: 'ResearchGate Publication', color: 'bg-[#00CCBB]' },
  { name: 'University Athletics & Tours', color: 'bg-amber-400' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section relative overflow-hidden border-b border-white/[0.05] bg-[#0B0C0E]">
      <div className="pointer-events-none absolute -left-52 top-28 h-[440px] w-[440px] rounded-full bg-[#1A6DFF]/[0.035] blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-8 h-[420px] w-[420px] rounded-full bg-emerald-400/[0.025] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="eyebrow-tag mb-8">{aboutNarrative.eyebrow}</div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#F5F6F8] sm:text-5xl">
              {aboutNarrative.heading}
            </h2>

            <div className="mt-10 border-l-2 border-[#3478F6] pl-6">
              <p className="max-w-xl text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
                {aboutNarrative.lead}
              </p>
            </div>

            <div className="mt-10 max-w-xl">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#778195]">At a glance</p>
              <ul className="space-y-3.5 text-[15px] leading-6 text-[#A8B0BC] sm:text-base">
                {aboutNarrative.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3478F6]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-11 flex flex-wrap items-center gap-4">
              <a
                href={profileData.resumeUrl}
                download="Shakil_Sarker_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-[#3478F6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#3478F6]/20 transition-all hover:bg-[#2563EB] hover:shadow-[#3478F6]/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Download Resume</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#D1D5DB] transition-colors hover:border-[#3478F6]/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6]"
              >
                <span>View Experience</span>
                <ArrowUpRight size={15} className="text-[#3478F6] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-flow-dense">
              {highlights.map(({ icon: Icon, label, title, detail, index }) => (
                <article
                  key={title}
                  className="about-highlight-card group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#15171C]/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3478F6]/50 hover:bg-[#191C23] hover:shadow-[0_20px_45px_-26px_rgba(52,120,246,0.55)]"
                >
                  <span className="pointer-events-none absolute right-7 top-6 text-5xl font-extrabold tracking-tighter text-white/[0.035] transition-colors duration-300 group-hover:text-[#3478F6]/[0.11]">
                    {index}
                  </span>
                  <div className="relative flex h-full flex-col">
                    <div className="mb-auto flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-[#1E2128] text-[#3478F6] transition-transform duration-300 group-hover:scale-110">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.16em] text-[#6F7A8E]">{index}</span>
                    </div>
                    <div className="mt-12">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#4D8CFF]">{label}</p>
                      <h3 className="text-xl font-bold tracking-tight text-[#F5F6F8]">{title}</h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#9AA3B1]">{detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 rounded-2xl border border-white/[0.08] bg-[#111317]/70 p-7 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#778195]">Organizations &amp; Platforms</p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-medium text-[#A8B0BC]">
              {organizations.map((organization) => (
                <span key={organization.name} className="flex items-center gap-2 transition-colors hover:text-white">
                  <span className={`h-1.5 w-1.5 rounded-full ${organization.color}`} />
                  {organization.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
