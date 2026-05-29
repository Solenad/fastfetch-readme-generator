import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "chiikawa readme card generator",
  description:
    "Dynamic SVG card generator for GitHub READMEs — Chiikawa x Catppuccin terminal aesthetic.",
  openGraph: {
    title: "chiikawa readme card generator",
    description:
      "Dynamic SVG card generator for GitHub READMEs — Chiikawa x Catppuccin terminal aesthetic.",
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
