// Trigger Vercel rebuild for deep linking and CSS configurations
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tryradar.app"),
  title: {
    template: "%s | RADAR",
    default: "Waitlist | RADAR - The Intelligence Layer for High-Performers",
  },
  description: "Join the waitlist for RADAR. Advanced curated feeds, weekly digests, and expert insights to help you level up and stay ahead.",
  keywords: [
    "radar app",
    "mobile app",
    "iOS news app",
    "Android productivity app",
    "content reader app",
    "news aggregator app",
    "curation tool",
    "smart news app",
    "knowledge management app"
  ],
  alternates: {
    canonical: "https://tryradar.app",
  },
  openGraph: {
    title: "RADAR",
    description: "Level Up & Stay Up to Date with RADAR",
    url: "https://tryradar.app",
    siteName: "RADAR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RADAR",
    description: "Level Up & Stay Up to Date with RADAR",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TryRadar",
    "url": "https://tryradar.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tryradar.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-navy flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
