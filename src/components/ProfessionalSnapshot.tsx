import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const metrics = [
  {
    value: 3,
    suffix: '+',
    label: 'Years delivering remotely',
    detail: 'Independent client work through Fiverr and Upwork since January 2021.',
  },
  {
    value: 2,
    suffix: '',
    label: 'Postgraduate degrees',
    detail: 'MA and B.Ed. studies combine academic research with classroom insight.',
  },
  {
    value: 1,
    suffix: '',
    label: 'Published research study',
    detail: 'Empirical research on secondary mathematics education, available on ResearchGate.',
  },
];

export const ProfessionalSnapshot: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    const setCounterValues = (animated: boolean) => {
      metrics.forEach((metric, index) => {
        const output = counterRefs.current[index];
        if (!output) return;

        if (!animated) {
          output.textContent = `${metric.value}${metric.suffix}`;
          return;
        }

        const number = { value: 0 };
        gsap.to(number, {
          value: metric.value,
          duration: 1.1 + index * 0.12,
          ease: 'power2.out',
          onUpdate: () => {
            output.textContent = `${Math.round(number.value)}${metric.suffix}`;
          },
        });
      });
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCounterValues(false);
      return;
    }

    let hasPlayed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed) return;
        hasPlayed = true;
        setCounterValues(true);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(widget);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={widgetRef} className="metric-dashboard mt-16 rounded-2xl border border-white/[0.08] bg-[#111317]/70 p-6 sm:p-8">
      <div className="flex flex-col gap-3 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#778195]">Professional snapshot</p>
          <p className="mt-2 text-sm text-[#A8B0BC]">Select a metric to explore the work behind it.</p>
        </div>
        <p className="text-xs font-semibold text-[#78A7FF]">Interactive overview</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {metrics.map((metric, index) => {
          const isActive = activeMetric === index;
          return (
            <button
              key={metric.label}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveMetric(index)}
              onMouseEnter={() => setActiveMetric(index)}
              onFocus={() => setActiveMetric(index)}
              className={`rounded-xl border p-5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6] ${
                isActive
                  ? 'border-[#3478F6]/55 bg-[#3478F6]/10 shadow-[0_14px_30px_-20px_rgba(52,120,246,0.8)]'
                  : 'border-white/[0.07] bg-black/10 hover:border-white/[0.17] hover:bg-white/[0.03]'
              }`}
            >
              <span
                ref={(element) => {
                  counterRefs.current[index] = element;
                }}
                className="block text-4xl font-extrabold tracking-[-0.05em] text-[#F5F6F8]"
              >
                0{metric.suffix}
              </span>
              <span className="mt-2 block text-sm font-semibold leading-snug text-[#D7DCE5]">{metric.label}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-5 min-h-12 max-w-2xl text-sm leading-6 text-[#A8B0BC]" aria-live="polite">
        {metrics[activeMetric].detail}
      </p>
    </div>
  );
};
