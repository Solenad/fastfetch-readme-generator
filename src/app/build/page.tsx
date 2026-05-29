"use client";

import Link from "next/link";
import { ReadmeBuilder } from "@/components/readme-builder";

export default function BuildPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-2xl font-bold">
          <Link href="/" className="text-term-green hover:underline">
            fastfetch readme generator
          </Link>
        </h1>

        <section>
          <h2 className="mb-1 mt-8 text-lg font-bold">
            <span className="text-term-green">build your own</span>
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Enter your GitHub username to auto-populate, or fill in the fields
            manually. Toggle ASCII art, then paste the snippet into your README.
          </p>
          <ReadmeBuilder />
        </section>

        <footer className="mt-16 text-xs text-muted-foreground">
          <span className="text-term-green">~</span>
          <span className="mx-1 text-term-blue">❯</span>
          <span className="cursor-blink">▍</span>
        </footer>
      </div>
    </main>
  );
}