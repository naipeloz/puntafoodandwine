import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Accessiblity best practice
  themeColor: "#F1EFEA",
};

const displayFont = localFont({
  src: "../public/fonts/newake-demo-400.otf",
  variable: "--font-newake",
});

const sansFont = localFont({
  src: [
    {
      path: "../public/fonts/Actay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ActayWide-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-actay",
});

export const metadata: Metadata = {
  title: "Punta del Este Food & Wine",
  description: "El festival gastronómico más exclusivo de América.",
  keywords: ["Punta del Este", "Food & Wine", "Festival Gastronómico", "Eventos Uruguay", "Gastronomía"],
  icons: {
    icon: [
      { url: '/assets/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/assets/favicon/site.webmanifest',
      },
    ],
  },
  openGraph: {
    title: "Punta del Este Food & Wine",
    description: "El festival gastronómico más exclusivo de América.",
    url: "https://puntafoodandwine.com",
    siteName: "Punta Food & Wine",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: 'https://puntafoodandwine.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Punta del Este Food & Wine',
      },
    ],
  },
};

import Loader from "./components/Loader";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "UNIVERSO TROISGROS - PUNTA DEL ESTE FOOD & WINE",
    "startDate": "2025-02-05T19:30",
    "endDate": "2025-02-06T00:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "La Susana",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "José Ignacio",
        "addressCountry": "UY"
      }
    },
    "image": [
      "https://puntafoodandwine.com/og-image.jpg"
    ],
    "description": "Frente al océano, cuando cae el sol, te espera la magia. Thomas Troisgros llega desde Río a La Susana para presentar, por primera vez, un recorrido por sus cuatro restaurantes icónicos.",
    "performer": {
      "@type": "Person",
      "name": "Thomas Troisgros"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Punta del Este Food & Wine"
    }
  };

  return (
    <html lang="es">
      <body
        className={`${displayFont.variable} ${sansFont.variable} antialiased font-sans`}
      >
        <Loader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
