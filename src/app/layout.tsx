import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteTransition from "@/components/layout/RouteTransition";
import ScrollProgress from "@/components/layout/ScrollProgress";
import JsonLd from "@/components/seo/JsonLd";
import { profile, skills } from "@/constants/portfolio";
import { DEFAULT_DESCRIPTION, SEO_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Junaid Ali | Full Stack & Frontend Developer",
    template: "%s | Junaid Ali",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [...SEO_KEYWORDS, "Junaid Ali"],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: "Junaid Ali",
  publisher: "Junaid Ali",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: "Junaid Ali | Full Stack & Frontend Developer",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/myprofile.jpg", width: 1200, height: 1200, alt: "Junaid Ali, full-stack developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junaid Ali | Full Stack & Frontend Developer",
    description: DEFAULT_DESCRIPTION,
    images: ["/myprofile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: { google: "50f10be814dc33ec" },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: profile.name,
        url: SITE_URL,
        image: `${SITE_URL}/myprofile.jpg`,
        jobTitle: "Full Stack Developer",
        description: DEFAULT_DESCRIPTION,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Islamabad",
          addressCountry: "PK",
        },
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: [...skills, "Frontend Development", "SaaS Development", "Web Application Development"],
      },
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <JsonLd data={websiteSchema} />
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
