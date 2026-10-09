import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Tag, Layers } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-[#111317] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#1E2128] text-[#A8B0BC] hover:text-white hover:bg-white/10 border border-white/5 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-[#3478F6]"
          aria-label="Close Case Study Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header & Visual Preview */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] bg-[#15171C]/50">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#3478F6]/20 text-[#60A5FA] border border-[#3478F6]/30">
              {project.badge}
            </span>
            <span className="text-xs text-[#A8B0BC] font-medium">
              {project.category}
            </span>
          </div>

          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#F5F6F8] leading-tight mb-4">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[#A8B0BC] leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Project Preview Image */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#15171C] aspect-[16/9] shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Modal Case Study Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Tools & Frameworks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3 flex items-center gap-2">
              <Layers size={14} className="text-[#3478F6]" />
              <span>Core Tools &amp; Methodologies</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-lg bg-[#1E2128] text-[#D1D5DB] border border-white/5 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Context & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-[#15171C] border border-white/[0.06]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3478F6] block mb-1.5">
                Objective &amp; Context
              </span>
              <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                {project.detailedCaseStudy.context}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#15171C] border border-white/[0.06]">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1.5">
                The Operational Challenge
              </span>
              <p className="text-xs sm:text-sm text-[#A8B0BC] leading-relaxed">
                {project.detailedCaseStudy.challenge}
              </p>
            </div>
          </div>

          {/* Methodology Steps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3 flex items-center gap-2">
              <Tag size={14} className="text-[#3478F6]" />
              <span>Execution Process &amp; Methodology</span>
            </h4>
            <div className="space-y-2.5">
              {project.detailedCaseStudy.methodology.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#15171C] border border-white/[0.06]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#3478F6]/20 text-[#60A5FA] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {sIdx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Outcomes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3 flex items-center gap-2">
              <CheckCircle size={14} className="text-emerald-400" />
              <span>Verified Deliverables &amp; Outcomes</span>
            </h4>
            <div className="space-y-2">
              {project.detailedCaseStudy.outcomes.map((outcome, oIdx) => (
                <div key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8B0BC]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* External Action Button */}
          {project.externalUrl && (
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-[#A8B0BC]">
                External verified documentation available
              </span>
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3478F6] hover:bg-[#2563EB] text-white font-semibold text-xs shadow-md transition-all"
              >
                <span>Visit External Link</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
