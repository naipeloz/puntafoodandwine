import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Universo Troisgros | Punta Food & Wine 2025",
  description: "Frente al océano, cuando cae el sol, te espera la magia. Thomas Troisgros llega desde Río a La Susana para presentar Universo Troisgros. Una experiencia gastronómica única.",
  keywords: ["Punta del Este", "Food & Wine", "Universo Troisgros", "Thomas Troisgros", "La Susana", "José Ignacio", "Oseille", "Toto Ipanema", "CT Boucherie", "Tijolada", "Eventos Uruguay 2025"],
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
    title: "Universo Troisgros | Punta Food & Wine 2025",
    description: "Frente al océano, cuando cae el sol, te espera la magia. Thomas Troisgros llega a La Susana.",
    url: "https://puntafoodandwine.com",
    siteName: "Punta Food & Wine",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: 'https://puntafoodandwine.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Universo Troisgros',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Universo Troisgros - Punta Food & Wine",
    "startDate": "2025-02-05T18:00", // Start time updated to 18:00 based on text
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
      "name": "Punta Food & Wine"
    }
  };

  return (
    <html lang="es">
      <body
        className={`${displayFont.variable} ${sansFont.variable} antialiased font-sans`}
      >
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
