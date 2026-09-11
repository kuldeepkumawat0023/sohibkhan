import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { defaultSEO } from "@/utils/seoConfig";
import { ThemeProvider } from "@/provider/ThemeProvider";
import HydrationGuard from "@/provider/HydrationGuard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { RouteScrollReset } from "@/components/common/RouteScrollReset";
import { CursorParticles } from "@/components/common/CursorParticles";
import { WelcomeSplash } from "@/components/common/WelcomeSplash";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: defaultSEO.metadataBase,

  title: {
    default: defaultSEO.title,
    template: "%s",
  },

  description: defaultSEO.description,

  keywords: defaultSEO.keywords,

  authors: [
    {
      name: defaultSEO.author,
      url: defaultSEO.baseUrl,
    },
  ],

  creator: defaultSEO.author,
  publisher: defaultSEO.author,

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

  manifest: "/manifest.webmanifest",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sohib Khan QA",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: defaultSEO.baseUrl,
    siteName: defaultSEO.siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: defaultSEO.ogImage,
        width: 1920,
        height: 1080,
        alt: defaultSEO.ogImageAlt,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [defaultSEO.ogImage],
    creator: defaultSEO.twitterCreator,
    site: defaultSEO.twitterCreator,
  },

  alternates: {
    canonical: defaultSEO.baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${defaultSEO.baseUrl}/#person`,
        name: "Sohib Khan",
        jobTitle: "Full Stack QA Intern / Software Tester",
        worksFor: {
          "@type": "Organization",
          name: "Artifact Geeks",
        },
        url: defaultSEO.baseUrl,
        image: `${defaultSEO.baseUrl}/logo.png`,
        email: "mailto:sohiblodhi59@gmail.com",
        telephone: "+919145921300",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.linkedin.com/in/sohib-lodhi-6059083ab/",
          "https://github.com/Sohib-Khan",
        ],
        knowsAbout: [
          "Manual Testing",
          "Automated Testing",
          "Selenium WebDriver",
          "Playwright",
          "Postman API Testing",
          "Regression Testing",
          "Test Case Design",
          "Core Java",
          "Bug Reporting",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${defaultSEO.baseUrl}/#website`,
        url: defaultSEO.baseUrl,
        name: defaultSEO.siteName,
        description: defaultSEO.description,
        publisher: {
          "@id": `${defaultSEO.baseUrl}/#person`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <HydrationGuard>
            <WelcomeSplash />
            <RouteScrollReset />
            <CursorParticles />
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
            <ScrollToTop />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLdData),
              }}
            />
          </HydrationGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}
