import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import "./globals.css";

const siteUrl = "https://engrahmad.com";
const siteTitle = "Muhammad Ahmad | Flutter Developer & Mobile Software Engineer";
const siteDescription =
  "Production-focused Flutter Developer and Mobile Software Engineer building cross-platform mobile applications with Flutter, Dart, BLoC/Cubit, REST APIs, Firebase, Supabase, backend/API integration, and dual app-store deployment.";

const themeScript = `(function(){var theme="light";try{var saved=localStorage.getItem("portfolio-theme");if(saved==="light"||saved==="dark")theme=saved}catch(error){}document.documentElement.setAttribute("data-theme",theme);document.documentElement.style.colorScheme=theme})()`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Muhammad Ahmad", url: siteUrl }],
  creator: "Muhammad Ahmad",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muhammad Ahmad",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
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
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Ahmad",
  jobTitle: "Flutter Developer & Mobile Software Engineer",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  email: "mailto:muah48157@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/muhammad-ahmad5556/",
    "https://github.com/muah48157",
  ],
  knowsAbout: [
    "Flutter",
    "Dart",
    "Mobile Application Development",
    "Android Development",
    "iOS Development",
    "BLoC",
    "Cubit",
    "REST APIs",
    "Firebase",
    "Supabase",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Bulk Bytes",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <WebVitalsReporter />
        {children}
      </body>
    </html>
  );
}
