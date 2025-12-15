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
  title: "Punta Food & Wine 2025 | Grand Tasting",
  description: "El festival gastronómico más exclusivo del verano en Punta del Este. Chefs internacionales, bodegas de primera línea y una experiencia inolvidable.",
  keywords: ["Punta del Este", "Food & Wine", "Festival Gastronómico", "Eventos Uruguay 2025", "Vinos", "Chefs"],
  openGraph: {
    title: "Punta Food & Wine 2025",
    description: "El festival gastronómico más exclusivo del verano.",
    url: "https://puntafoodandwine.com", // Placeholder
    siteName: "Punta Food & Wine",
    locale: "es_UY",
    type: "website",
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
    "name": "Punta Food & Wine 2025",
    "startDate": "2025-02-05T20:00",
    "endDate": "2025-02-06T00:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "La Susana",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Punta del Este",
        "addressCountry": "UY"
      }
    },
    "image": [
      "https://puntafoodandwine.com/og-image.jpg"
    ],
    "description": "El festival gastronómico más exclusivo del verano en Punta del Este."
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
      </body>
    </html>
  );
}
