import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Mubashir | AI Engineer & SaaS Builder",
  description:
    "AI Engineer building production SaaS products — AI Receptionist (BookAI), CRM, POS, InvoiceFlow, HR, and 20+ live business tools. Hire me or use my products.",
  keywords: [
    "Muhammad Mubashir",
    "AI Engineer",
    "SaaS Developer",
    "BookAI",
    "AI Receptionist",
    "Pakistan",
    "Next.js",
    "AI tools",
    "Full Stack",
  ],
  authors: [{ name: "Muhammad Mubashir" }],
  openGraph: {
    title: "Muhammad Mubashir | AI Engineer",
    description:
      "Building AI-powered SaaS products businesses actually use. BookAI, CRM, POS, Invoice tools & more — all live.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Mubashir | AI Engineer",
    description:
      "Building AI-powered SaaS products businesses actually use. BookAI, CRM, POS, Invoice tools & more — all live.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
