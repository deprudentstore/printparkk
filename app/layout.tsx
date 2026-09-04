import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// next/font self-hosts + preloads Inter at build time (no render-blocking
// Google Fonts request) — this is the main Core Web Vitals / PageSpeed win.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://printparkk.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "PrintParkk — Premium Custom T-Shirt Design Services",
    template: "%s | PrintParkk"
  },
  description:
    "We create original, custom and trendy T-Shirt designs that help your brand stand out from the crowd. Fast delivery, unlimited revisions, 100% money-back guarantee.",
  keywords: ["custom t-shirt design", "graphic tee design service", "streetwear design", "t-shirt designer for hire", "apparel design studio"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "PrintParkk",
    title: "PrintParkk — Premium Custom T-Shirt Design Services",
    description: "Original, custom and trendy T-Shirt designs that help your brand stand out from the crowd.",
    images: [{ url: "https://picsum.photos/seed/printparkk-og/1200/630", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintParkk — Premium Custom T-Shirt Design Services",
    description: "Original, custom and trendy T-Shirt designs that help your brand stand out from the crowd."
  },
  icons: { icon: "/icon.svg" },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Tailwind CSS via CDN, configured with brand theme */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: { brand: "#F5A623", dark: "#0B0B0F" },
                    fontFamily: { sans: ["var(--font-inter)", "sans-serif"] }
                  }
                }
              };
            `
          }}
        />
      </head>
      <body className="bg-white text-dark antialiased font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand text-dark px-3 py-2 rounded z-[100]">
          Skip to content
        </a>
        <Header />
        <div id="main">{children}</div>
        <Footer />

        {/* Google Analytics — only loads if NEXT_PUBLIC_GA_ID is set, so it never blocks page speed by default */}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
