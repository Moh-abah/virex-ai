import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import AssistantPopup from "@/components/VoiceAgentButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIREX AI | Sovereign Engineering & Multi-Sector Innovation",
  description:
    "VIREX AI is a global hub for sovereign engineering, advanced software implementation, algorithmic intelligence, and deep innovation incubation. We bridge the gap between visionary ideas and tangible technological solutions across industries.",
  keywords: [
    "VIREX AI",
    "Sovereign Engineering",
    "AI development",
    "custom software",
    "algorithmic trading",
    "IoT",
    "embedded systems",
    "innovation prototyping",
    "academic research support",
    "intellectual property protection",
    "Next.js",
    "TypeScript",
    "React",
    "software engineering",
    "Saudi Arabia",
    "Shanghai",
  ],
  authors: [{ name: "VIREX AI Team" }],
  icons: {
    icon: "/favicon.ico",

  },
  openGraph: {
    title: "VIREX AI | Sovereign Engineering & Multi-Sector Innovation",
    description:
      "We engineer proprietary software, algorithmic engines, and integrated ecosystems that redefine technological boundaries. From patents to production, we empower innovators worldwide.",
    url: "https://virex-ai.com", 
    siteName: "VIREX AI",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "VIREX AI - Sovereign Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIREX AI | Sovereign Engineering & Multi-Sector Innovation",
    description:
      "We build sovereign digital systems, algorithmic intelligence, and deep innovations that lead global transformation.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}

        <AssistantPopup />
        

        <Toaster />


      </body>
    </html>
  );
}