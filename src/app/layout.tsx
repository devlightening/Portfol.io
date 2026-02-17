import type { Metadata } from "next";
import "./globals.css";
import { GlobalOverlay } from "@/components/ui/GlobalOverlay";
import { LenisProvider } from "@/components/ui/LenisProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { site } from "@/lib/site";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <GlobalOverlay />
        <ToastProvider>
          <LenisProvider>{children}</LenisProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
