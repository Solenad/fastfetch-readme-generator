import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "solenad readme card",
  description:
    "Dynamic SVG card for Roe Dizon (solenad) — drop it into any GitHub README.",
  openGraph: {
    title: "solenad readme card",
    description:
      "Dynamic SVG card for Roe Dizon (solenad) — drop it into any GitHub README.",
    type: "website",
  },
  twitter: {
    card: "summary",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
