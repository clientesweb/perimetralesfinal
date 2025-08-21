import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Anton } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"
import Script from "next/script"
import JsonLd from "./jsonld"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const anton = Anton({ subsets: ["latin"], variable: "--font-anton", weight: "400" })

// Definimos la URL base del sitio
const siteUrl = "https://www.perimetraleslasflores.com"

export const metadata: Metadata = {
  title: "Perimetrales las Flores - Líderes en Soluciones de Seguridad Perimetral",
  description:
    "Empresa líder en instalación de cercos perimetrales y venta de materiales de seguridad con más de 10 años de experiencia. Ofrecemos concertina, malla electrosoldada, tejido romboidal y más.",
  keywords:
    "cercos perimetrales, seguridad perimetral, concertina, malla electrosoldada, tejido romboidal, cercos para piletas, pinches de seguridad, tela mosquitera, Las Flores, Buenos Aires",
  authors: [{ name: "Perimetrales Las Flores" }],
  creator: "Perimetrales Las Flores",
  publisher: "Perimetrales Las Flores",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: "Perimetrales las Flores - Expertos en Seguridad Perimetral desde hace más de 10 años",
    description:
      "Instalación profesional de cercos perimetrales y venta de materiales de alta calidad. Servicio en toda la zona de Las Flores y alrededores.",
    siteName: "Perimetrales Las Flores",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perimetrales las Flores - Líderes en Soluciones de Seguridad Perimetral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perimetrales las Flores - Expertos en Seguridad Perimetral",
    description:
      "Instalación profesional de cercos perimetrales y venta de materiales de alta calidad. Servicio en toda la zona de Las Flores y alrededores.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@PerimetralesLF",
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
  verification: {
    google: "verificacion-google", // Reemplazar con tu código de verificación de Google
  },
  category: "business",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#e11d48",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Aseguramos que las meta tags de OG tengan URLs absolutas */}
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Perimetrales las Flores - Líderes en Soluciones de Seguridad Perimetral" />
        <meta
          property="og:description"
          content="Empresa líder en instalación de cercos perimetrales y venta de materiales de seguridad con más de 10 años de experiencia."
        />
        <meta property="og:site_name" content="Perimetrales Las Flores" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        <meta name="twitter:title" content="Perimetrales las Flores - Expertos en Seguridad Perimetral" />
        <meta
          name="twitter:description"
          content="Instalación profesional de cercos perimetrales y venta de materiales de alta calidad."
        />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Las Flores" />
        <meta name="geo.position" content="-36.0552;-59.0955" />
        <meta name="ICBM" content="-36.0552, -59.0955" />
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${anton.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then(registration => {
                    console.log('Service Worker registrado con éxito:', registration.scope);
                  })
                  .catch(error => {
                    console.log('Error al registrar el Service Worker:', error);
                  });
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
