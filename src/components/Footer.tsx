import { Link } from "react-router-dom";

const SITE_LINKS = [
  { label: "Why Us", href: "#why-choose" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/bookaride.cv",
    icon: (
      <path
        d="M12 2.2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.2.36.5.19.9.45 1.3.85.4.4.66.8.85 1.3.14.4.31 1.1.36 2.2.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.36 2.2a3.5 3.5 0 0 1-.85 1.3 3.5 3.5 0 0 1-1.3.85c-.4.14-1.1.31-2.2.36-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.2-.36a3.5 3.5 0 0 1-1.3-.85 3.5 3.5 0 0 1-.85-1.3c-.14-.4-.31-1.1-.36-2.2C2.2 15 2.2 14.7 2.2 12s.01-3 .06-4.1c.05-1.1.22-1.8.36-2.2.19-.5.45-.9.85-1.3.4-.4.8-.66 1.3-.85.4-.14 1.1-.31 2.2-.36C9 2.2 9.3 2.2 12 2.2zm0 1.8c-2.65 0-2.96.01-4.01.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.3 7.74 4.29 8.05 4.29 12s.01 2.26.06 3.31c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.36.06 4.01.06s2.96-.01 4.01-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.36.06-3.31s-.01-2.26-.06-3.31c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.96 4.01 14.65 4 12 4zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm4.8-2a1.08 1.08 0 1 1 0 2.15 1.08 1.08 0 0 1 0-2.15z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@bookaride",
    icon: (
      <path
        d="M13.5 2.5v9.2a4.7 4.7 0 1 1-2-3.8V2.5h2c.3 2 1.7 3.5 3.8 3.9v2a5.9 5.9 0 0 1-3.8-1.6z"
        fill="currentColor"
      />
    ),
  },
  // {
  //   label: "WhatsApp",
  //   href: "https://wa.me/2340000000000",
  //   icon: (
  //     <path
  //       d="M17 14.3c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s1 2.5 1.1 2.6c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"
  //       fill="currentColor"
  //     />
  //   ),
  // },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src="/logo.png" alt="Book A Ride logo" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A structured, booking-based ride system for BOUESTI students —
              safe, reliable and affordable, from campus to Ikere town.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold">Explore</p>
            <ul className="mt-4 space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold">Legal</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm text-muted transition-colors hover:text-primary">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Book A Ride. Moving BOUESTI forward.</p>
          <p className="font-mono text-xs text-muted">Your ride, anytime, anywhere.</p>
        </div>
      </div>
    </footer>
  );
}
