import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crdn.studio"),
  title: {
    default: "CRDN — Architecture Studio",
    template: "%s — CRDN",
  },
  description:
    "CRDN is an independent architecture studio in Mexico City designing residences, workplaces and interiors of quiet permanence.",
  keywords: [
    "architecture studio",
    "architect",
    "residential architecture",
    "commercial architecture",
    "interior design",
    "Mexico City",
    "CRDN",
  ],
  openGraph: {
    title: "CRDN — Architecture Studio",
    description:
      "Residences, workplaces and interiors of quiet permanence. Est. 2009, Mexico City.",
    siteName: "CRDN",
    type: "website",
    locale: "en_US",
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
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="eyebrow fixed left-6 top-6 z-[200] -translate-y-24 bg-ink px-5 py-3 text-bone transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
