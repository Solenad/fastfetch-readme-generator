import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "RiceMe",
  description:
    "RiceMe: generate dynamic terminal-style SVG cards for GitHub READMEs with 23+ color themes.",
  openGraph: {
    title: "RiceMe",
    description:
      "RiceMe: generate dynamic terminal-style SVG cards for GitHub READMEs with 23+ color themes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <footer className="px-4 pb-6 sm:px-8">
              <div className="mx-auto max-w-7xl rounded-xl border-2 border-border bg-card/40 p-4 text-xs text-muted-foreground">
                <p className="mb-1">
                  <span className="text-term-green">~</span>{" "}
                  <span className="text-term-blue">❯ </span> RiceMe v1.0 · MIT
                  License · &copy; 2025 Solenad
                </p>
                <p>
                  <span className="text-term-green">~</span>{" "}
                  <span className="text-term-blue">❯</span> built with Next.js +
                  shadcn/ui ·{" "}
                  <a
                    href="https://github.com/Solenad/chiikawa-readme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-term-cyan hover:underline"
                  >
                    star on github
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://github.com/Solenad/riceme-readme-generator/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-term-red hover:underline"
                  >
                    report bug
                  </a>
                </p>
              </div>
            </footer>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
