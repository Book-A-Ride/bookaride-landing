import { motion } from "framer-motion";

const CARDS = [
  {
    label: "Mission",
    title: "Move students without friction",
    front: "Give every BOUESTI student a safe, reliable and affordable way to get around.",
    back: "We built Book A Ride to solve a problem every BOUESTI student knows first-hand: getting between campus and Ikere town shouldn't mean long walks, unreliable okadas or unpredictable fares. We connect students with verified drivers through simple, booking-based rides — on schedule, and on budget.",
  },
  {
    label: "Vision",
    title: "A campus that never has to trek",
    front: "A future where transportation is never the hardest part of a student's day.",
    back: "We're starting in Ikere-Ekiti, but the goal is bigger: a trusted, student-run mobility network on every campus where getting around is a source of stress. Verified drivers, fair pricing and a system students can actually depend on — wherever they study.",
  },
];

export default function MissionVision() {
  return (
    <section id="mission" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">Purpose</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Our mission &amp; vision
          </h2>
          <p className="mt-4 text-muted">Hover a card to read the full story.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group h-72 [perspective:1400px]"
            >
              <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* front */}
                <div className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-white p-8 [backface-visibility:hidden]">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">
                    {card.label}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{card.front}</p>
                  </div>
                  <span className="text-xs text-muted">Hover to read more →</span>
                </div>

                {/* back */}
                <div className="absolute inset-0 flex flex-col justify-center rounded-3xl bg-primary p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="font-mono text-xs uppercase tracking-wider text-secondary">
                    {card.label}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">{card.back}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
