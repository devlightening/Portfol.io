import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GlobalOverlay } from "@/components/ui/GlobalOverlay";
import { LenisProvider } from "@/components/ui/LenisProvider";
import { site } from "@/lib/site";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: `${site.role} based in ${site.location}.`,
  openGraph: {
    type: "website",
    title: site.name,
    description: `${site.role} based in ${site.location}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: `${site.role} based in ${site.location}.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <GlobalOverlay />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
