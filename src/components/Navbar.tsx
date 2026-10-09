import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div
        className={`pointer-events-auto mx-auto max-w-[1240px] rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? 'border-white/[0.14] bg-[#101318]/80 py-2 shadow-[0_16px_50px_rgba(0,0,0,0.38)] backdrop-blur-2xl'
            : 'border-white/[0.10] bg-[#101318]/58 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between px-3 sm:px-4">
          {/* Portrait logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 rounded-xl px-1 py-0.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6]"
            aria-label="Shakil Sarker Home"
          >
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/[0.16] bg-[#1E2128] ring-1 ring-black/20 transition-colors group-hover:border-[#3478F6]/70">
              <img
                src={profileData.portraits.main}
                alt=""
                className="h-full w-full scale-125 object-cover object-top transition-transform duration-300 group-hover:scale-[1.32]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#F5F6F8] transition-colors group-hover:text-white sm:text-base">
                {profileData.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#A8B0BC] font-medium -mt-0.5">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 rounded-full border border-white/[0.07] bg-black/20 p-1 lg:flex" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`rounded-full px-2.5 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6] ${
                    isActive
                      ? 'bg-[#3478F6] text-white shadow-sm shadow-[#3478F6]/30 font-semibold'
                      : 'text-[#A8B0BC] hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs font-semibold text-[#F5F6F8] transition-all hover:border-[#3478F6]/40 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6]"
            >
              <Download size={13} className="text-[#3478F6]" />
              <span>ATS Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#3478F6] px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-[#3478F6]/20 transition-all hover:bg-[#2563EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3478F6]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-white/10 bg-black/20 p-2 text-[#A8B0BC] hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3478F6] lg:hidden"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mx-auto mt-3 max-w-[1240px] rounded-2xl border border-white/[0.12] bg-[#101318]/95 px-4 pb-6 pt-3 shadow-2xl backdrop-blur-2xl transition-all lg:hidden">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#3478F6] text-white font-semibold'
                      : 'text-[#A8B0BC] hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={profileData.resumeUrl}
              download="Shakil_Sarker_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#15171C] text-[#F5F6F8] font-semibold text-sm border border-white/10 hover:border-[#3478F6]"
            >
              <Download size={15} className="text-[#3478F6]" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#3478F6] text-white font-semibold text-sm shadow-md shadow-[#3478F6]/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
