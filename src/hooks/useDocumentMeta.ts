import { useEffect } from "react";

const DOMAIN = "https://bookaride.cv";

interface DocumentMeta {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/privacy-policy" */
  path: string;
}

function getOrCreate(
  selector: string,
  attrs: Record<string, string>
): Element {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
}

export function useDocumentMeta({ title, description, path }: DocumentMeta) {
  useEffect(() => {
    const canonicalUrl = `${DOMAIN}${path === "/" ? "/" : path}`;

    // Title
    document.title = title;

    // <meta name="description">
    getOrCreate('meta[name="description"]', {
      name: "description",
    }).setAttribute("content", description);

    // <link rel="canonical">
    const canonical =
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      (() => {
        const el = document.createElement("link");
        el.rel = "canonical";
        document.head.appendChild(el);
        return el;
      })();
    canonical.href = canonicalUrl;

    // Open Graph
    getOrCreate('meta[property="og:title"]', {
      property: "og:title",
    }).setAttribute("content", title);

    getOrCreate('meta[property="og:description"]', {
      property: "og:description",
    }).setAttribute("content", description);

    getOrCreate('meta[property="og:url"]', {
      property: "og:url",
    }).setAttribute("content", canonicalUrl);

    // Twitter
    getOrCreate('meta[name="twitter:title"]', {
      name: "twitter:title",
    }).setAttribute("content", title);

    getOrCreate('meta[name="twitter:description"]', {
      name: "twitter:description",
    }).setAttribute("content", description);

    getOrCreate('meta[name="twitter:url"]', {
      name: "twitter:url",
    }).setAttribute("content", canonicalUrl);
  }, [title, description, path]);
}
