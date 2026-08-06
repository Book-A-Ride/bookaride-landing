import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Why Us", href: "#why-choose" },
  { label: "Mission", href: "#mission" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[92%] max-w-3xl -translate-x-1/2"
    >
      <div
        className={`flex items-center justify-between gap-3 rounded-full border border-border/60 bg-white/70 px-4 py-2.5 backdrop-blur-xl transition-shadow ${
          scrolled ? "shadow-lg shadow-foreground/5" : "shadow-sm"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Book A Ride logo" className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://bookaride-waitlist.vercel.app/"
          className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Join Waitlist
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-foreground"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex flex-col gap-1 rounded-2xl border border-border/60 bg-white/90 p-3 backdrop-blur-xl md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-surface"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://bookaride-waitlist.vercel.app/"
            className="mt-1 rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-white"
          >
            Join Waitlist
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
