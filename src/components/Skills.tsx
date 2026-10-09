import React, { useState, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Layers,
  Search,
  Mail,
  TrendingUp,
  BarChart3,
  Globe,
  Database,
  CheckCircle2,
  Briefcase,
  MessageSquare,
  Users,
  Clock,
  Compass,
  Award,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import type { SkillItem } from '../types/portfolio';

// Icon map helper
const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={22} className="text-[#3478F6]" />,
  Layers: <Layers size={22} className="text-[#60A5FA]" />,
  Search: <Search size={22} className="text-[#38BDF8]" />,
  Mail: <Mail size={22} className="text-[#818CF8]" />,
  TrendingUp: <TrendingUp size={22} className="text-[#34D399]" />,
  BarChart3: <BarChart3 size={22} className="text-[#FBBF24]" />,
  Globe: <Globe size={22} className="text-[#60A5FA]" />,
  Database: <Database size={22} className="text-[#A78BFA]" />,
  CheckCircle2: <CheckCircle2 size={22} className="text-[#34D399]" />,
  Briefcase: <Briefcase size={22} className="text-[#F472B6]" />,
  MessageSquare: <MessageSquare size={22} className="text-[#60A5FA]" />,
  Users: <Users size={22} className="text-[#38BDF8]" />,
  Clock: <Clock size={22} className="text-[#FCD34D]" />,
  Compass: <Compass size={22} className="text-[#818CF8]" />,
  Award: <Award size={22} className="text-[#F59E0B]" />,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'marketing' | 'research' | 'professional'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="content-section relative overflow-hidden border-b border-white/[0.05] bg-[#0B0C0E]">
      {/* Subtle ambient glow matching Hero elegance */}
      <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-[520px] h-[520px] bg-[#1A6DFF]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Header & Carousel Buttons Row (Inspired by Reference) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.08] pb-12 lg:pb-16">
          <div className="max-w-3xl">
            <div className="eyebrow-tag mb-6">
              WHAT I BRING
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F6F8] tracking-tight leading-[1.08]">
              A Practical Mix of Research, Marketing, and Communication
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#A8B0BC] sm:text-lg">
              Practical strengths developed through research, client operations, and digital marketing work.
            </p>
          </div>

          {/* Carousel Arrow Controls (Exactly like inspiration: dark prev, blue next) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full bg-[#15171C] hover:bg-[#1E2128] text-[#A8B0BC] hover:text-white border border-white/10 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] active:scale-95"
              aria-label="Scroll Skills Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full bg-[#3478F6] hover:bg-[#2563EB] text-white flex items-center justify-center shadow-lg shadow-[#3478F6]/20 transition-all focus:outline-none focus:ring-2 focus:ring-white active:scale-95"
              aria-label="Scroll Skills Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-6 lg:mt-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              activeCategory === 'all'
                ? 'bg-[#3478F6] text-white shadow-sm'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            All Areas ({skillsData.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('marketing')}
            className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              activeCategory === 'marketing'
                ? 'bg-[#3478F6] text-white shadow-sm'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            Digital Marketing (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('research')}
            className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              activeCategory === 'research'
                ? 'bg-[#3478F6] text-white shadow-sm'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            Research &amp; Business (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('professional')}
            className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              activeCategory === 'professional'
                ? 'bg-[#3478F6] text-white shadow-sm'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            Professional Skills (5)
          </button>
        </div>

        {/* Carousel / Grid Container */}
        <div
          ref={scrollContainerRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-7 scroll-smooth scrollbar-thin scrollbar-thumb-[#1E2128] snap-x snap-mandatory focus:outline-none"
          tabIndex={0}
          aria-label="Skills list horizontal scroll"
        >
          {filteredSkills.map((skill: SkillItem, index: number) => (
            <div
              key={`${skill.name}-${index}`}
              className="skill-card editorial-card relative min-w-[290px] sm:min-w-[340px] max-w-[360px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#15171C] p-8 hover:border-[#3478F6]/40 flex flex-col justify-between shrink-0 snap-start group"
            >
              <span className="pointer-events-none absolute right-6 top-5 text-5xl font-extrabold tracking-tighter text-white/[0.035] group-hover:text-[#3478F6]/[0.10] transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                {/* Top Icon Badge in Rounded Square */}
                <div className="w-12 h-12 rounded-xl bg-[#1E2128] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-105 group-hover:border-[#3478F6]/40 transition-all">
                  {iconMap[skill.iconName] || <Target size={22} className="text-[#3478F6]" />}
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-[#F5F6F8] mb-2 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="text-sm text-[#A8B0BC] leading-relaxed mb-8 font-normal">
                  {skill.description}
                </p>
              </div>

              <div>
                {/* Category & Scope Tag */}
                <div className="text-[11px] font-semibold text-[#3478F6] uppercase tracking-wider mb-4">
                  {skill.proficiencyNote}
                </div>

                {/* Small Horizontal Accent Bar (matching inspiration screenshot) */}
                <div className="w-8 h-1 bg-white/20 group-hover:bg-[#3478F6] group-hover:w-16 rounded-full transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Hint */}
        <div className="mt-5 flex items-center justify-between text-xs text-[#737B8B]">
          <span>Horizontal carousel • Use arrow buttons or swipe on touch screens</span>
          <span className="font-medium text-[#A8B0BC]">Showing {filteredSkills.length} competencies</span>
        </div>

      </div>
    </section>
  );
};
