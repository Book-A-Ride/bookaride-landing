import { motion } from "framer-motion";
import { team } from "../data/team";

export default function Team() {
  const lead = team.find((m) => m.lead);
  const rest = team.filter((m) => !m.lead);

  return (
    <section id="team" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">The people behind it</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Meet the team
          </h2>
          <p className="mt-4 text-muted">Students and locals building a system BOUESTI can rely on.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {lead && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between rounded-3xl border border-border bg-white p-8 lg:col-span-1 lg:row-span-2"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-semibold text-white">
                {lead.initials}
              </div>
              <div className="mt-8">
                <h3 className="font-display text-2xl font-semibold">{lead.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{lead.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{lead.bio}</p>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
            {rest.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-semibold text-primary">
                  {member.initials}
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
