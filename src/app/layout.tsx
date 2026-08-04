import type { Metadata } from "next";
import "./globals.css";
import { GlobalOverlay } from "@/components/ui/GlobalOverlay";
import { LenisProvider } from "@/components/ui/LenisProvider";
import { ToastProvider } from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "Halil Yıldırım | .NET Backend Developer",
  applicationName: "Halil Yıldırım Portfolio",
  icons: {
    icon: [{ url: "/porfol.io_Logo.png?v=2", type: "image/png" }],
    shortcut: ["/porfol.io_Logo.png?v=2"],
    apple: [{ url: "/porfol.io_Logo.png?v=2", type: "image/png" }],
  },
  description:
    "Junior .NET Backend Developer focused on clean architecture, microservices, distributed systems, and reliable API design.",
  openGraph: {
    type: "website",
    title: "Halil Yıldırım | .NET Backend Developer",
    description:
      "Portfolio of Halil Yıldırım: .NET backend, microservices, distributed systems, and production-minded API architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halil Yıldırım | .NET Backend Developer",
    description:
      "Portfolio of Halil Yıldırım: .NET backend, microservices, distributed systems, and production-minded API architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <GlobalOverlay />
        <ToastProvider>
          <LenisProvider>{children}</LenisProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
