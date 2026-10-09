import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  // Staggered presentation: Split into two columns for editorial balance
  const leftColumnProjects = filteredProjects.filter((_, idx) => idx % 2 === 0);
  const rightColumnProjects = filteredProjects.filter((_, idx) => idx % 2 === 1);

  return (
    <section id="portfolio" className="content-section relative overflow-hidden border-b border-white/[0.05] bg-[#0B0C0E]">
      {/* Subtle ambient glow matching Hero elegance */}
      <div className="absolute top-1/3 -left-48 -translate-y-1/2 w-[520px] h-[520px] bg-[#1A6DFF]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Header Row (Inspired by Reference) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.08] pb-12 lg:pb-16">
          <div className="max-w-3xl">
            <div className="eyebrow-tag mb-6">
              SELECTED WORK
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5F6F8] tracking-tight leading-[1.08]">
              A Closer Look at My Work
            </h2>
            <p className="mt-5 text-[#A8B0BC] text-base leading-7 sm:text-lg max-w-2xl">
              Authentic work samples spanning corporate B2B lead generation, academic mathematics research, digital advertising strategy, and SEO optimization.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#research"
              className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#3478F6] transition-colors group"
            >
              <span>Explore Academic Publication</span>
              <ArrowRight size={14} className="text-[#3478F6] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-6 lg:mt-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              filter === 'all'
                ? 'bg-[#3478F6] text-white'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            All Work ({projectsData.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('lead generation')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              filter === 'lead generation'
                ? 'bg-[#3478F6] text-white'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            B2B Lead Gen &amp; Ops
          </button>
          <button
            type="button"
            onClick={() => setFilter('academic')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              filter === 'academic'
                ? 'bg-[#3478F6] text-white'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            Academic Research
          </button>
          <button
            type="button"
            onClick={() => setFilter('marketing')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              filter === 'marketing'
                ? 'bg-[#3478F6] text-white'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            Digital Marketing &amp; Ads
          </button>
          <button
            type="button"
            onClick={() => setFilter('seo')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#3478F6] ${
              filter === 'seo'
                ? 'bg-[#3478F6] text-white'
                : 'bg-[#15171C] text-[#A8B0BC] hover:text-white hover:bg-[#1E2128]'
            }`}
          >
            SEO &amp; Search
          </button>
        </div>

        {/* Asymmetrical Staggered Project Grid (Mirroring Reference Layout) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column (offset slightly) */}
          <div className="space-y-8">
            {leftColumnProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Right Column (staggered editorial rhythm) */}
          <div className="space-y-8 lg:mt-12">
            {rightColumnProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={() => setSelectedProject(project)}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

// Reusable Project Card Component matching Reference Visuals
interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const projectIndex = projectsData.findIndex((item) => item.id === project.id) + 1;

  return (
    <div
      onClick={onOpenModal}
      className="project-card editorial-card group relative overflow-hidden bg-[#15171C] rounded-2xl border border-white/[0.08] hover:border-[#3478F6]/50 p-7 sm:p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      <span className="pointer-events-none absolute right-7 top-5 text-5xl font-extrabold tracking-tighter text-white/[0.035] group-hover:text-[#3478F6]/[0.10] transition-colors">
        {String(projectIndex).padStart(2, '0')}
      </span>
      {/* Top Header Row with Tags (Like Reference) */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3478F6]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#A8B0BC]">
            {project.badge}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {project.tools.slice(0, 2).map((t, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#1E2128] text-[#8E97A6] border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Project Title */}
      <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F6F8] mb-3 group-hover:text-white transition-colors leading-snug">
        {project.title}
      </h3>

      {/* Brief Summary */}
      <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed mb-6 line-clamp-2">
        {project.summary}
      </p>

      {/* Project Visual Container with Hover Zoom */}
      <div className="rounded-xl overflow-hidden bg-[#0B0C0E] border border-white/[0.06] aspect-[16/10] relative group-hover:border-[#3478F6]/30 transition-all shadow-inner mt-7">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[#0B0C0E]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <span className="px-4 py-2 rounded-lg bg-[#3478F6] text-white font-semibold text-xs shadow-lg flex items-center gap-1.5">
            <span>View Case Details</span>
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {/* Bottom Link with Directional Arrow */}
      <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-white group-hover:text-[#3478F6] transition-colors">
        <span>Detailed Case Study</span>
        <ArrowUpRight size={16} className="text-[#3478F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  );
};
