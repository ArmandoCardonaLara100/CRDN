/* eslint-disable @next/next/no-page-custom-font -- The HTML source loads these same global font styles. */
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crdn.studio"),
  title: {
    default: "CRDN — Retail, Brand & Commercial Design",
    template: "%s — CRDN",
  },
  description:
    "CRDN es un estudio de diseño comercial. Arquitectura comercial, interiorismo y visual merchandising que convierten el espacio en una herramienta estratégica de negocio.",
  keywords: [
    "diseño comercial",
    "retail",
    "commercial architecture",
    "interiorismo",
    "visual merchandising",
    "CRDN",
  ],
  openGraph: {
    title: "CRDN — Retail, Brand & Commercial Design",
    description:
      "Arquitectura comercial, interiorismo y visual merchandising para convertir el espacio en una herramienta estratégica de negocio.",
    siteName: "CRDN",
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf6f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
