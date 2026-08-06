import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    n: "01",
    title: "Request a ride",
    body: "Choose your destination — campus or town — and tap to request. It takes under 10 seconds.",
    illo: (
      <svg viewBox="0 0 200 200" className="h-32 w-32">
        <circle cx="100" cy="100" r="90" fill="#EFF6FF" />
        <rect x="70" y="55" width="60" height="100" rx="12" fill="#2563EB" />
        <rect x="78" y="66" width="44" height="70" rx="4" fill="#EFF6FF" />
        <circle cx="100" cy="146" r="4" fill="#EFF6FF" />
        <circle cx="150" cy="60" r="16" fill="#FACC15" />
        <path d="M143 60l5 5 9-10" stroke="#0F172A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Get matched",
    body: "We pair you with the nearest verified driver on campus or nearby — a fellow student or trusted local.",
    illo: (
      <svg viewBox="0 0 200 200" className="h-32 w-32">
        <circle cx="100" cy="100" r="90" fill="#FEFCE8" />
        <circle cx="70" cy="95" r="22" fill="#2563EB" />
        <circle cx="130" cy="95" r="22" fill="#EAB308" />
        <path d="M70 118c-14 0-26 10-26 26h52c0-16-12-26-26-26z" fill="#2563EB" />
        <path d="M130 118c-14 0-26 10-26 26h52c0-16-12-26-26-26z" fill="#EAB308" />
        <path
          d="M92 92 L108 92"
          stroke="#0F172A"
          strokeWidth="3"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Move easily",
    body: "Arrive safely, pay a fair flat fare, and get on with your day. No stress, no trekking.",
    illo: (
      <svg viewBox="0 0 200 200" className="h-32 w-32">
        <circle cx="100" cy="100" r="90" fill="#EFF6FF" />
        <rect x="45" y="105" width="110" height="34" rx="12" fill="#2563EB" />
        <path d="M60 105l14-24h44l14 24" fill="#3B82F6" />
        <circle cx="70" cy="140" r="12" fill="#0F172A" />
        <circle cx="130" cy="140" r="12" fill="#0F172A" />
        <circle cx="70" cy="140" r="5" fill="#FACC15" />
        <circle cx="130" cy="140" r="5" fill="#FACC15" />
      </svg>
    ),
  },
];

export default function ModeOfOperations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".op-step", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
      gsap.from(".op-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">The process</p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          How Book A Ride works
        </h2>
        <p className="mt-4 text-muted">Three steps. That&apos;s all it takes to move around BOUESTI.</p>
      </div>

      <div className="relative mt-16">
        <div className="op-line absolute left-0 right-0 top-16 hidden h-px bg-border md:block" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((step) => (
            <div key={step.n} className="op-step relative flex flex-col items-start">
              <div className="relative z-10 flex h-32 w-32 items-center justify-center">
                {step.illo}
              </div>
              <span className="font-mono mt-4 text-xs text-muted">{step.n}</span>
              <h3 className="font-display mt-1 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
