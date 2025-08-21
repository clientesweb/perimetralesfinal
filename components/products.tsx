"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

// Lista de productos con imágenes configuradas
const productList = [
  {
    id: 1,
    name: "Cinta cubre cerco",
    description: "Ideal para brindar privacidad y mejorar la estética de su cerco perimetral.",
    image: "/images/products/cinta-cubre-cerco-main.jpeg",
    rating: 4.0,
    reviews: 24,
    badge: "Más vendido",
    slug: "cinta-cubre-cerco",
  },
  {
    id: 2,
    name: "Concertina",
    description: "Alambre de concertina de acero inoxidable para máxima seguridad perimetral.",
    image: "/images/products/concertina-1.png",
    rating: 4.9,
    reviews: 112,
    slug: "concertina",
  },
  {
    id: 3,
    name: "Malla Electrosoldada",
    description: "Malla electrosoldada para cercos de alta resistencia y durabilidad.",
    image: "/images/products/malla-electrosoldada-1.png",
    rating: 4.7,
    reviews: 87,
    slug: "malla-electrosoldada",
  },
  {
    id: 4,
    name: "Pinches de Seguridad",
    description: "Sistema anti-escalamiento para muros y cercos perimetrales.",
    image: "/images/products/pinches-seguridad-main.jpeg",
    rating: 4.8,
    reviews: 56,
    badge: "Nuevo",
    slug: "pinches-seguridad",
  },
  {
    id: 5,
    name: "Tejido Romboidal",
    description: "Malla de alambre galvanizado en patrón romboidal para cercos perimetrales.",
    image: "/images/products/tejido-romboidal-main.jpeg",
    rating: 4.6,
    reviews: 93,
    slug: "tejido-romboidal",
  },
  {
    id: 6,
    name: "Tejido Hexagonal",
    description: "Malla de alambre en patrón hexagonal para múltiples aplicaciones.",
    image: "/images/products/tejido-hexagonal-1.png",
    rating: 4.5,
    reviews: 78,
    slug: "tejido-hexagonal",
  },
  {
    id: 7,
    name: "Tela Mosquitera",
    description: "Malla fina para protección contra insectos en ventanas y puertas.",
    image: "/images/products/tela-mosquitera-1.png",
    rating: 4.8,
    reviews: 105,
    badge: "Popular",
    slug: "tela-mosquitera",
  },
  {
    id: 8,
    name: "Tela para Cercos",
    description: "Media sombra de alta densidad para privacidad y protección contra el viento.",
    image: "/images/products/tela-para-cercos-1.png",
    rating: 4.5,
    reviews: 68,
    slug: "tela-para-cercos",
  },
  {
    id: 9,
    name: "Sogas y Cadenas",
    description: "Sogas trenzadas y cadenas galvanizadas para múltiples aplicaciones.",
    image: "/images/products/soga-trenzada-1.jpeg",
    rating: 4.7,
    reviews: 42,
    slug: "sogas-cadenas",
  },
  {
    id: 10,
    name: "Cercos para Piletas",
    description: "Sistemas de seguridad para piscinas que cumplen con todas las normativas.",
    image: "/images/products/cerco-pileta-1.jpeg",
    rating: 4.9,
    reviews: 76,
    badge: "Seguridad",
    slug: "cercos-piletas",
  },
]

export function Products() {
  const { addItem } = useCart()

  return (
    <section id="productos" className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span>Catálogo de Productos</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            MATERIALES DE ALTA CALIDAD
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de productos para todo tipo de proyectos de cercado y seguridad perimetral,
            seleccionados por su durabilidad y excelente desempeño.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {productList.slice(0, 6).map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl group h-full flex flex-col"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain" // Cambiado de object-cover a object-contain para mostrar la imagen completa
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-700 text-white" variant="secondary">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-lg font-anton">
                  {product.slug ? (
                    <Link href={`/productos/${product.slug}`} className="hover:text-red-600 transition-colors">
                      {product.name}
                    </Link>
                  ) : (
                    product.name
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2 flex-grow">
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-gray-500">({product.reviews} reseñas)</span>
                </div>
                <p className="text-sm font-medium text-red-600">Consultar precio</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-2 justify-between mt-auto">
                <Button
                  className="bg-red-600 hover:bg-red-700 flex items-center gap-2 w-full sm:w-auto"
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                >
                  <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                  <span>Agregar</span>
                </Button>

                {product.slug && (
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <Link href={`/productos/${product.slug}`} className="flex items-center gap-1">
                      <span>Ver más</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/productos" className="flex items-center gap-2">
              Ver todos los productos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
