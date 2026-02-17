import type { Metadata } from "next";
import "./globals.css";
import { GlobalOverlay } from "@/components/ui/GlobalOverlay";
import { LenisProvider } from "@/components/ui/LenisProvider";
import { ToastProvider } from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "portfol.io",
  applicationName: "portfol.io",
  icons: {
    icon: [{ url: "/porfol.io_Logo.jpg", type: "image/jpeg" }],
    shortcut: ["/porfol.io_Logo.jpg"],
    apple: [{ url: "/porfol.io_Logo.jpg", type: "image/jpeg" }],
  },
  description: "Junior .NET Backend Developer based in Türkiye.",
  openGraph: {
    type: "website",
    title: "portfol.io",
    description: "Junior .NET Backend Developer based in Türkiye.",
  },
  twitter: {
    card: "summary_large_image",
    title: "portfol.io",
    description: "Junior .NET Backend Developer based in Türkiye.",
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
