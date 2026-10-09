import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Leadership } from './components/Leadership';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const appRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const heroCopy = appRef.current?.querySelector<HTMLElement>('.hero-copy');
    const heroPortrait = appRef.current?.querySelector<HTMLElement>('.hero-portrait');
    const footer = appRef.current?.querySelector<HTMLElement>('footer');
    const sections = gsap.utils.toArray<HTMLElement>('main > section', appRef.current).slice(1);
    const hoverCleanup: Array<() => void> = [];

    if (heroCopy) {
      gsap.from(heroCopy, { autoAlpha: 0, x: -34, duration: 0.9, ease: 'power3.out', delay: 0.12 });
    }

    if (heroPortrait) {
      gsap.fromTo(
        heroPortrait,
        { autoAlpha: 0.2, scale: 0.88 },
        {
          autoAlpha: 1,
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: heroPortrait, start: 'top 88%', end: 'bottom 38%', scrub: 0.7 },
        }
      );
    }

    sections.forEach((section) => {
      gsap.from(section, {
        autoAlpha: 0,
        y: 34,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 84%', once: true },
      });

      const heading = section.querySelector<HTMLElement>('h2');
      if (heading) {
        gsap.fromTo(
          heading,
          { autoAlpha: 0.18, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'top 82%', end: 'top 48%', scrub: 0.5 },
          }
        );
      }

      const cards = Array.from(
        section.querySelectorAll<HTMLElement>('.editorial-card, .about-highlight-card, .skill-card, .project-card')
      );
      if (cards.length) {
        gsap.from(cards, {
          autoAlpha: 0,
          y: 24,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 76%', once: true },
        });

        cards.forEach((card) => {
          const enter = () => gsap.to(card, { y: -5, duration: 0.28, ease: 'power2.out', overwrite: 'auto' });
          const leave = () => gsap.to(card, { y: 0, duration: 0.38, ease: 'power2.out', overwrite: 'auto' });
          card.addEventListener('mouseenter', enter);
          card.addEventListener('mouseleave', leave);
          hoverCleanup.push(() => {
            card.removeEventListener('mouseenter', enter);
            card.removeEventListener('mouseleave', leave);
          });
        });
      }
    });

    if (footer) {
      gsap.from(footer, {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: footer, start: 'top 90%', once: true },
      });
    }

    return () => hoverCleanup.forEach((cleanup) => cleanup());
  }, { scope: appRef });

  useEffect(() => {
    // Scroll progress bar calculation
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection observer for section detection
    const sections = ['home', 'about', 'experience', 'skills', 'portfolio', 'research', 'leadership', 'education', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={appRef} className="site-shell min-h-screen bg-[#0B0C0E] text-[#F5F6F8] selection:bg-[#3478F6] selection:text-white font-['Manrope',sans-serif]">
      <div className="site-ambient" aria-hidden="true" />
      {/* Subtle top reading progress bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-[#3478F6] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 1. Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="relative overflow-x-hidden">
        {/* 2. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. About Me Section */}
        <About />

        {/* 4. Professional Journey */}
        <Experience />

        {/* 5. Skills and Expertise */}
        <Skills />

        {/* 6. Selected Work and Projects */}
        <Projects />

        {/* 7. Academic Research */}
        <Research />

        {/* 8. Leadership and Achievements */}
        <Leadership />

        {/* 9. Education */}
        <Education />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
