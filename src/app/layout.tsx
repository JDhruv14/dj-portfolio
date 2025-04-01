
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { GoogleAnalytics } from "@/components/googleAnalytics";
import ReadingProgressBar from "@/components/readingProgressBar";
import ScrollToTopButton from "@/components/scrollToTopButton";
import { ThemeProvider } from "@/components/themeProvider";
import { cx } from "@/lib/utils";

import Footer from "../components/footer";
import { Navbar } from "../components/nav";

import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "dhruv jaradi",
    template: "%s | dhruv jaradi",
  },
  description: "dhruv's site.",
  authors: [{ name: "Dhruv Jaradi" }],
  keywords: ["jdhruv", "dhruv", "jaradi", "dhruv jaradi"],
  creator: "Dhruv Jaradi",
  publisher: "Dhruv Jaradi",
  openGraph: {
    title: "dhruv jaradi",
    description: "dhruv's site.",
    url: baseUrl,
    siteName: "dhruv jaradi",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent("dhruv jaradi")}`,
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    title: "dhruv jaradi",
    description: "dhruv's site.",
    creator: "",
    card: "summary_large_image",
    images: [`${baseUrl}/og?title=${encodeURIComponent("dhruv jaradi")}`],
    site: "",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon.ico",
        href: "/images/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon.ico",
        href: "/images/favicon.ico",
      },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const DepartureMono = localFont({ src: "../../public/fonts/DepartureMono-Regular.woff2" });
const fontClasses = `${GeistSans.variable} ${GeistMono.variable} ${DepartureMono.className}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx(fontClasses, "dark")} suppressHydrationWarning>
      <head>
        <title>{metadata.title?.toString() || "Default Title"}</title>
        <meta name="description" content={metadata.description ?? "Default description"} />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme={false}
          disableTransitionOnChange
        >
          <ReadingProgressBar />
          <div className="max-w-3xl mx-auto px-4 py-8 container">
            <Navbar />
            <main className="mt-6">{children}</main>
            <Footer />
          </div>
          <ScrollToTopButton />
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
        </ThemeProvider>
      </body>
    </html>
  );
}
