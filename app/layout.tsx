import type React from "react";
import type { Metadata } from "next";
import { Work_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ameer Hamza | Full Stack Developer & UI/UX Expert",
  description:
    "I'm Ameer Hamza, a Full Stack Developer specialized in React, Next.js, and React Native. I build modern, responsive, and high-performance websites and apps with a focus on exceptional UI/UX and seamless user experiences.",
  keywords: [
    "Ameer Hamza",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "TypeScript",
    "JavaScript",
    "Portfolio Website",
    "Modern Web Development",
    "Responsive Design",
    "Creative Developer",
  ],
  authors: [{ name: "Ameer Hamza" }],
  creator: "Ameer Hamza",
  publisher: "Ameer Hamza",
  robots: "index, follow",
  metadataBase: new URL("https://hamza-dev-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamza-dev-portfolio.vercel.app/",
    title: "Ameer Hamza | Full Stack Developer & UI/UX Expert",
    description:
      "Crafting beautiful, high-performance digital experiences with React, Next.js, and stunning UI/UX design. Explore my projects and development journey.",
    siteName: "Ameer Hamza Portfolio",
    images: [
      {
       url: "/meta-image.png", // 👈 Use your new generated OG image here
        width: 1200,
        height: 630,
        alt: "Ameer Hamza – Full Stack Developer & UI/UX Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameer Hamza | Full Stack Developer & UI/UX Expert",
    description:
      "Building modern, responsive web & mobile apps using React, Next.js, and React Native — with a focus on elegant UI/UX.",
    images: ["/meta-image.png"],
    creator: "@ameerhamza", // 👈 optional, if you have a Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "portfolio",
  generator: "Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${openSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
