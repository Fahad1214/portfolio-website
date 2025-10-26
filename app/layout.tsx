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
  title: "Fahad Ali | Full Stack Developer & UI/UX Expert",
  description:
    "I'm Fahad Ali, a Full Stack Developer specialized in React, Next.js, and React Native. I build modern, responsive, and high-performance websites and apps with a focus on exceptional UI/UX and seamless user experiences.",
  keywords: [
    "Fahad Ali",
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
  authors: [{ name: "Fahad Ali" }],
  creator: "Fahad Ali",
  publisher: "Fahad Ali",
  robots: "index, follow",
  metadataBase: new URL("https://fahad-s-portfolio-fahad12145s-projects.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahad-s-portfolio-fahad12145s-projects.vercel.app/",
    title: "Fahad Ali | Full Stack Developer & UI/UX Expert",
    description:
      "Crafting beautiful, high-performance digital experiences with React, Next.js, and stunning UI/UX design. Explore my projects and development journey.",
    siteName: "Fahad Ali Portfolio",
    images: [
      {
       url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Fahad Ali – Full Stack Developer & UI/UX Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Ali | Full Stack Developer & UI/UX Expert",
    description:
      "Building modern, responsive web & mobile apps using React, Next.js, and React Native — with a focus on elegant UI/UX.",
    images: ["/meta-image.png"],
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
