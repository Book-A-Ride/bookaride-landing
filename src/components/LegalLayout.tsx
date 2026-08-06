import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Book A Ride logo" className="h-7 w-auto" />
          </Link>
          <Link to="/" className="text-sm font-medium text-muted transition-colors hover:text-primary">
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">Legal</p>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>

        <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-foreground/80">
          {children}
        </div>
      </main>
    </div>
  );
}
