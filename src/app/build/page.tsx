"use client";

import Link from "next/link";
import { ReadmeBuilder } from "@/components/readme-builder";

export default function BuildPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-2 flex items-baseline justify-between">
          <h1 className="text-2xl font-bold">
            <Link href="/" className="text-term-green hover:underline">
              RiceMe
            </Link>
          </h1>
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">
            &larr; back
          </Link>
        </div>

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
      </div>
    </main>
  );
}
