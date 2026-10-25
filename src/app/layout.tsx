import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteTransition from "@/components/layout/RouteTransition";
import ScrollProgress from "@/components/layout/ScrollProgress";

const themeScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("portfolio-theme");
      var theme = savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.style.colorScheme = "dark";
    }
  })();
`;

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://junaidaly.vercel.app"),
  title: {
    default: "Junaid Ali — Full Stack Developer",
    template: "%s — Junaid Ali",
  },
  description:
    "Full Stack Developer in Islamabad building polished SaaS platforms, dashboards, booking systems, and AI-enabled web products with React, Next.js, Node.js, and Supabase.",
  keywords: [
    "Junaid Ali",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "SaaS Developer",
    "Islamabad",
  ],
  authors: [{ name: "Junaid Ali" }],
  creator: "Junaid Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://junaidaly.vercel.app/",
    siteName: "Junaid Ali — Portfolio",
    title: "Junaid Ali — Full Stack Developer",
    description: "Digital products engineered with clarity, performance, and a strong product sense.",
    images: [{ url: "/myprofile.jpg", width: 1200, height: 1200, alt: "Junaid Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junaid Ali — Full Stack Developer",
    description: "Digital products engineered with clarity, performance, and a strong product sense.",
    images: ["/myprofile.jpg"],
  },
  robots: { index: true, follow: true },
  verification: { google: "50f10be814dc33ec" },
  alternates: { canonical: "https://junaidaly.vercel.app" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>
          <RouteTransition>{children}</RouteTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
