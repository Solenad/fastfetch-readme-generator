"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="flex flex-col justify-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="mb-6" variants={slideIn}>
            <p className="mb-1 text-xs text-term-cyan font-bold tracking-wider uppercase">
              RiceMe v1.0
            </p>
            <h1 className="mb-2 text-3xl font-black leading-tight sm:text-4xl">
              <span className="text-term-green">terminal aesthetic</span>
              <br />
              <span className="text-foreground">for your GitHub README</span>
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Dynamic terminal-style SVG cards with live GitHub stats, 23+
              color themes, CRT effects, and typewriter animations. Drop it
              into your profile README and watch it come alive.
            </p>
          </motion.div>

          <motion.div
            className="mb-8 rounded-md border border-border bg-card/40 p-4 text-xs leading-relaxed text-muted-foreground"
            variants={slideIn}
          >
            <p className="mb-2 text-term-green font-bold">$ cat intro.txt</p>
            <p className="mb-2">
              hi! i&apos;m{" "}
              <a
                href="https://github.com/Solenad"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-term-cyan hover:underline"
              >
                Solenad
              </a>
              , a software developer from the philippines. i built this to make
              GitHub profiles a little less boring and a lot more terminal-coded.
            </p>
            <p className="mb-2">
              if you find this useful, consider starring the repo — it helps a
              lot {"<"}3
            </p>
            <p>
              <span className="text-term-green">~</span>{" "}
              <span className="text-term-blue">❯</span>{" "}
              <a
                href="https://github.com/Solenad/chiikawa-readme"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-term-cyan hover:underline"
              >
                github.com/Solenad/chiikawa-readme
              </a>
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap gap-3" variants={slideIn}>
            <Link href="/build">
              <Button variant="default" size="lg" className="cursor-pointer">
                Build Your Own &rarr;
              </Button>
            </Link>
            <a
              href="https://github.com/Solenad/chiikawa-readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer gap-2"
              >
                <StarIcon />
                Star on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <div>
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
              GitHub&apos;s camo proxy caches the image, so updates appear
              within ~30 minutes.
            </p>
          </div>
        </div>
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

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
