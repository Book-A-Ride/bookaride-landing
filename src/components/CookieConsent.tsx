import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "bookaride-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-white/95 p-5 shadow-xl shadow-foreground/10 backdrop-blur-xl sm:inset-x-auto sm:right-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <p className="text-sm text-foreground">
            We use cookies to keep Book A Ride running smoothly and understand how
            students use the site. Read our{" "}
            <a href="/privacy-policy" className="font-medium text-primary underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => decide("accepted")}
              className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Accept
            </button>
            <button
              onClick={() => decide("declined")}
              className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
