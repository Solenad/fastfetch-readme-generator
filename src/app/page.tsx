"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [host, setHost] = useState("");

  useEffect(() => {
    setHost(window.location.origin);
  }, []);

  const origin = host || "";
  const svgUrl = `${origin}/api/public/readme.svg`;
  const markdown = `![solenad](${svgUrl})`;
  const html = `<p align="center">\n  <img src="${svgUrl}" alt="solenad" />\n</p>`;

  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <main className="min-h-screen px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            <span className="text-term-green">fastfetch readme generator</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Dynamic GitHub README SVG card with a Catppuccin terminal aesthetic.
            Stats refresh every ~30 min via GitHub&apos;s image cache.
          </p>
          <Link href="/build" className="mt-4 inline-block">
            <Button variant="default" size="lg" className="cursor-pointer">
              Build Your Own &rarr;
            </Button>
          </Link>
        </div>

        <section className="mb-16">
          <h2 className="mb-4 text-lg font-bold text-term-cyan">
            <span className="text-term-green">~</span>{" "}
            <span className="text-term-blue">❯</span> example
          </h2>

          <div className="mb-10 overflow-hidden rounded-lg border border-border bg-card/40 p-2">
            <img
              src="/api/public/readme.svg"
              alt="solenad readme card preview"
              className="block w-full"
            />
          </div>

          <Snippet
            label="Markdown (paste into README.md)"
            value={markdown}
            copied={copied === "md"}
            onCopy={() => copy(markdown, "md")}
          />
          <Snippet
            label="HTML (centered, for GitHub profile README)"
            value={html}
            copied={copied === "html"}
            onCopy={() => copy(html, "html")}
          />
          <Snippet
            label="Direct image URL"
            value={svgUrl}
            copied={copied === "url"}
            onCopy={() => copy(svgUrl, "url")}
          />

          <div className="mt-6 rounded-md border border-border bg-card/40 p-4 text-xs text-muted-foreground">
            <p className="mb-2 text-term-cyan font-bold">how it works</p>
            <p>
              GitHub READMEs only render images, not iframes or scripts. This
              endpoint returns a dynamic SVG that embeds live GitHub stats
              (repos, followers, following, total stars) fetched server-side.
              GitHub&apos;s camo proxy caches the image, so updates appear within
              ~30 minutes.
            </p>
          </div>
        </section>

        <footer className="text-xs text-muted-foreground">
          <span className="text-term-green">~</span>
          <span className="mx-1 text-term-blue">❯</span>
          <span className="cursor-blink">▍</span>
        </footer>
      </div>
    </main>
  );
}

function Snippet({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <button
          type="button"
          onClick={onCopy}
          className="rounded border border-border bg-card px-2 py-1 font-bold text-term-green hover:border-term-green/60 hover:bg-card/80"
        >
          {copied ? "copied ✓" : "copy"}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-md border border-border bg-card/60 p-3 text-xs text-foreground/90">
        <code>{value}</code>
      </pre>
    </div>
  );
}