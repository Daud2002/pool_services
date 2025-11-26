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
  title: "Best Pools Technical Services CO.",
  icons: {
    icon: "/logos.png",
    shortcut: "/logos.png",
    apple: "/logos.png",
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
