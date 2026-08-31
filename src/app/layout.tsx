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
  title: "Muhammad Mubashir | Product Engineer & Full-Stack Developer",
  description:
    "Portfolio of Muhammad Mubashir — Product Engineer building AI-powered tools and professional business utilities. Creator of BookAI (AI receptionist & 24/7 appointment booking SaaS) and a suite of production-ready generators for freelancers and businesses in Pakistan.",
  keywords: [
    "Muhammad Mubashir",
    "Product Engineer",
    "Full Stack Developer",
    "BookAI",
    "Pakistan",
    "SaaS",
    "Next.js",
    "AI tools",
  ],
  authors: [{ name: "Muhammad Mubashir", email: "mmubashi75@gmail.com" }],
  openGraph: {
    title: "Muhammad Mubashir | Product Engineer",
    description:
      "Building AI products and professional tools that help freelancers and businesses work smarter.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Mubashir | Product Engineer",
    description:
      "Building AI products and professional tools that help freelancers and businesses work smarter.",
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
