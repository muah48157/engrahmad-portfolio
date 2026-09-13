import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://engrahmad.com";
const siteTitle = "Muhammad Ahmad | Flutter Developer & Mobile Software Engineer";
const siteDescription =
  "Production-focused Flutter Developer and Mobile Software Engineer building cross-platform mobile applications with Flutter, Dart, BLoC/Cubit, REST APIs, Firebase, Supabase, backend/API integration, and dual app-store deployment.";

const themeScript = `(function(){var theme="light";try{var saved=localStorage.getItem("portfolio-theme");if(saved==="light"||saved==="dark")theme=saved}catch(error){}document.documentElement.setAttribute("data-theme",theme);document.documentElement.style.colorScheme=theme})()`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Muhammad Ahmad",
    "Flutter Developer",
    "Mobile Software Engineer",
    "Flutter Developer Pakistan",
    "Dart Developer",
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "Flutter BLoC",
    "BLoC",
    "Cubit",
    "REST API",
    "Firebase",
    "Supabase",
    "Cross-Platform Development",
  ],
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
