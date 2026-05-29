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
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
