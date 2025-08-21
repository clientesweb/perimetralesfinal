import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://perimetraleslasflores.com"

  // Lista de productos
  const products = [
    "cinta-cubre-cerco",
    "concertina",
    "malla-electrosoldada",
    "pinches-seguridad",
    "tejido-romboidal",
    "tejido-hexagonal",
    "tela-mosquitera",
    "tela-para-cercos",
    "sogas-cadenas",
    "cercos-piletas",
  ]

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ] as MetadataRoute.Sitemap

  // Páginas de productos
  const productPages = products.map((product) => ({
    url: `${baseUrl}/productos/${product}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  })) as MetadataRoute.Sitemap

  return [...staticPages, ...productPages]
}
