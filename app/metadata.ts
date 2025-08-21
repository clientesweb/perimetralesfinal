import type { Metadata } from "next"

// Datos base para el sitio
const siteName = "Perimetrales las Flores"
const siteUrl = "https://www.perimetraleslasflores.com"
const siteDescription =
  "Empresa líder en instalación de cercos perimetrales y venta de materiales de seguridad con más de 10 años de experiencia."

// Función para generar metadatos para páginas de productos
export function generateProductMetadata(
  productName: string,
  productDescription: string,
  productImage: string,
): Metadata {
  const title = `${productName} | ${siteName}`
  const description = productDescription
  // Aseguramos que la URL de la imagen sea absoluta
  const ogImage = productImage.startsWith("http") ? productImage : `${siteUrl}${productImage}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/productos/${productName.toLowerCase().replace(/\s+/g, "-")}`,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: productName,
        },
      ],
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${siteUrl}/productos/${productName.toLowerCase().replace(/\s+/g, "-")}`,
    },
  }
}

// Metadatos para la página de productos
export const productsMetadata: Metadata = {
  title: `Nuestros Productos | ${siteName}`,
  description:
    "Descubre nuestra amplia gama de productos para seguridad perimetral: concertina, malla electrosoldada, tejido romboidal y más.",
  openGraph: {
    title: `Catálogo de Productos | ${siteName}`,
    description:
      "Descubre nuestra amplia gama de productos para seguridad perimetral: concertina, malla electrosoldada, tejido romboidal y más.",
    url: `${siteUrl}/productos`,
    siteName,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Catálogo de Productos de Perimetrales las Flores",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Catálogo de Productos | ${siteName}`,
    description:
      "Descubre nuestra amplia gama de productos para seguridad perimetral: concertina, malla electrosoldada, tejido romboidal y más.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/productos`,
  },
}
