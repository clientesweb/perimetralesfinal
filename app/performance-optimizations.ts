// Este archivo contiene funciones y configuraciones para optimizar el rendimiento del sitio

// Función para cargar recursos de manera diferida
export const lazyLoadResource = (resource: string, type: "script" | "style" = "script") => {
  if (typeof window === "undefined") return

  if (type === "script") {
    const script = document.createElement("script")
    script.src = resource
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  } else if (type === "style") {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = resource
    link.media = "print"
    link.onload = () => {
      link.media = "all"
    }
    document.head.appendChild(link)
  }
}

// Función para precargar imágenes críticas
export const preloadCriticalImages = (imagePaths: string[]) => {
  if (typeof window === "undefined") return

  imagePaths.forEach((path) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = path
    document.head.appendChild(link)
  })
}

// Configuración para optimizar las imágenes
export const imageOptimizationConfig = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ["image/webp", "image/avif"],
  minimumCacheTTL: 60,
  dangerouslyAllowSVG: false,
}

// Lista de imágenes críticas para precargar
export const criticalImages = [
  "/images/hero.jpeg",
  "/images/logo.png",
  "/images/products/cinta-cubre-cerco-main.jpeg",
  "/images/products/tejido-romboidal-main.jpeg",
  "/images/products/pinches-seguridad-main.jpeg",
]

// Función para implementar la carga diferida de componentes no críticos
export const deferNonCriticalStyles = () => {
  if (typeof window === "undefined") return

  // Ejemplo: cargar estilos de fuentes de manera diferida
  const fontStyles = ["https://fonts.googleapis.com/css2?family=Anton&display=swap"]

  fontStyles.forEach((style) => lazyLoadResource(style, "style"))
}
