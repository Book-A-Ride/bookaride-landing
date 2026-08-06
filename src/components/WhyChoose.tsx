import { motion } from "framer-motion";

const REASONS = [
  {
    title: "Reliable Rides",
    body: "No more waiting hours by the roadside. Get matched with a verified driver nearby in minutes, every time.",
    icon: (
      <path
        d="M4 17h1.5a3 3 0 0 1 5 0h5a3 3 0 0 1 5 0H22M4 17V9a1 1 0 0 1 1-1h9l4 4v5M4 17V13h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Verified Drivers",
    body: "Every driver is a BOUESTI student or a trusted Ikere-Ekiti local, vetted before they get near your booking.",
    icon: (
      <path
        d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3zM9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Student Pricing",
    body: "Transparent, flat pricing designed for a student budget — no surge, no bargaining, no surprises.",
    icon: (
      <path
        d="M12 2v20M17 6.5c0-2-2-3.5-5-3.5S7 4.5 7 6.5 9 9.5 12 9.5s5 1.5 5 4-2 4-5 4-5-1.5-5-3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">Why Book A Ride</p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Built around how students actually move
        </h2>
        <p className="mt-4 text-muted">
          Between lectures, hostels and Ikere town, getting around shouldn't be the
          hardest part of your day.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border bg-surface p-7 transition-shadow hover:shadow-lg hover:shadow-foreground/5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                {reason.icon}
              </svg>
            </div>
            <h3 className="font-display mt-5 text-lg font-semibold">{reason.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{reason.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
