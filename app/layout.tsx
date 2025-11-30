import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Bubbles from "@/components/Bubbles";
import WhatsappButton from "@/components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://poolbestservice.com'),
  title: "Best Pools Technical Services CO.",
  description: "Professional pool services, landscaping, and technical solutions in Dubai. Expert pool construction, maintenance, cleaning, and renovation services.",
  icons: {
    icon: "/logos.png",
    shortcut: "/logos.png",
    apple: "/logos.png",
  },
  openGraph: {
    title: "Best Pools Technical Services CO.",
    description: "Professional pool services, landscaping, and technical solutions in Dubai. Expert pool construction, maintenance, cleaning, and renovation services.",
    images: [
      {
        url: "/logos.png",
        width: 1200,
        height: 630,
        alt: "Best Pools Technical Services CO.",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pools Technical Services CO.",
    description: "Professional pool services, landscaping, and technical solutions in Dubai. Expert pool construction, maintenance, cleaning, and renovation services.",
    images: ["/logos.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Bubbles />
        <div className="relative z-10">{children}</div>
        <div className="fixed bottom-10 right-10 z-1000">
          <WhatsappButton />
        </div>
      </body>
    </html>
  );
}
