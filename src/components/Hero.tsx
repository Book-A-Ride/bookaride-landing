import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Hero() {
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!pathRef.current || !markerRef.current) return;
    const tween = gsap.to(markerRef.current, {
      duration: 6,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
      },
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36"
    >
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(37,99,235,0.08), transparent), radial-gradient(45% 40% at 10% 30%, rgba(250,204,21,0.10), transparent)",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
          >
            🎓 Launching first at BOUESTI, Ikere-Ekiti
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Stop trekking.
            <br />
            Get a ride <span className="text-primary">in minutes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md text-lg text-muted"
          >
            Book A Ride is a structured, booking-based transport system for
            BOUESTI students — schedule ahead, request an instant pickup, and
            move between campus and Ikere town with verified drivers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://waitlist.bookaride.cv/"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-8"
          >
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">120+</p>
              <p className="text-xs text-muted">students on the waitlist</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">Small Fee</p>
              <p className="text-xs text-muted">flat fare, no surge</p>
            </div>
          </motion.div>
        </div>

        {/* Signature element: the route from Campus to Town, echoing the logo's loop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <svg viewBox="0 0 400 420" className="w-full" aria-hidden>
            <motion.path
              ref={pathRef}
              d="M 60 70 C 220 70, 40 190, 200 210 C 360 230, 180 350, 340 350"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="3"
            />
            <motion.path
              d="M 60 70 C 220 70, 40 190, 200 210 C 360 230, 180 350, 340 350"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Campus pin */}
            <g transform="translate(60 70)">
              <circle r="20" fill="#2563EB" opacity="0.1" />
              <circle r="10" fill="#2563EB" />
              <text x="0" y="-28" textAnchor="middle" className="font-display" fontSize="13" fontWeight={600} fill="#0F172A">
                Campus
              </text>
            </g>

            {/* Town pin */}
            <g transform="translate(340 350)">
              <circle r="20" fill="#FACC15" opacity="0.15" />
              <circle r="10" fill="#EAB308" />
              <text x="0" y="36" textAnchor="middle" className="font-display" fontSize="13" fontWeight={600} fill="#0F172A">
                Ikere Town
              </text>
            </g>

            {/* moving ride marker */}
            <g ref={markerRef} className="ride-marker">
              <circle r="9" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
              <circle r="3" fill="#2563EB" />
            </g>
          </svg>

          {/* floating ride card, echoes the waitlist product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border bg-white/90 p-4 shadow-xl shadow-foreground/10 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">Campus → Town</p>
                <p className="font-display text-sm font-semibold text-foreground">
                  Verified driver · 5 min away
                </p>
              </div>
              <span className="font-mono rounded-full bg-secondary/20 px-2.5 py-1 text-xs font-semibold text-secondary-dark">
                REQUEST
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
