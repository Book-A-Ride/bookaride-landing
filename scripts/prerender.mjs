/**
 * scripts/prerender.mjs
 *
 * Run after `vite build`. Spins up a local static server against dist/,
 * visits each route with a headless browser, waits for React to finish
 * rendering, then writes the fully-rendered HTML back to dist/ so
 * crawlers that can't run JavaScript still receive real content.
 */

import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");
const PORT = 4173;
const BASE = `http://localhost:${PORT}`;

const ROUTES = [
  { route: "/", file: "index.html" },
  { route: "/privacy-policy", file: "privacy-policy/index.html" },
  { route: "/terms-and-conditions", file: "terms-and-conditions/index.html" },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function startServer() {
  return new Promise((resolve, reject) => {
    // `serve` CLI: -s = SPA fallback, -l = port, --no-clipboard = quiet
    const proc = spawn(
      "npx",
      ["serve", "-s", DIST, "-l", String(PORT), "--no-clipboard"],
      { stdio: ["ignore", "pipe", "pipe"] }
    );

    proc.stderr.on("data", (d) => {
      const msg = d.toString();
      if (!msg.includes("already in use")) return;
      reject(new Error(`Port ${PORT} already in use — stop any running servers and retry.`));
    });

    // Poll until the server responds
    const deadline = Date.now() + 15_000;
    const poll = setInterval(async () => {
      try {
        const res = await fetch(BASE);
        if (res.ok || res.status === 200) {
          clearInterval(poll);
          resolve(proc);
        }
      } catch {
        if (Date.now() > deadline) {
          clearInterval(poll);
          proc.kill();
          reject(new Error("Static server did not start within 15 s."));
        }
      }
    }, 300);
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

let serverProc;
let browser;

try {
  console.log("⏳  Starting static server …");
  serverProc = await startServer();
  console.log(`✅  Server ready at ${BASE}\n`);

  browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });
  const page = await browser.newPage();

  // Silence console noise from the page itself
  page.on("console", () => {});

  for (const { route, file } of ROUTES) {
    const url = `${BASE}${route}`;
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });
      // Wait for a real content element so we know React has painted.
      // Use 'main' — present on all pages (Landing wraps in <main>, legal pages have <main> too).
      await page.waitForSelector("main", { timeout: 15_000 });

      const html = await page.content();
      const outPath = path.join(DIST, file);

      // Ensure subfolder exists (e.g. dist/privacy-policy/)
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf8");

      console.log(`✅  ${route.padEnd(30)} → dist/${file}`);
    } catch (err) {
      console.error(`❌  ${route} — ${err.message}`);
      process.exitCode = 1;
    }
  }
} catch (err) {
  console.error("❌  Prerender failed:", err.message);
  process.exitCode = 1;
} finally {
  await browser?.close();
  serverProc?.kill();
  console.log("\n🏁  Prerender complete.");
}
