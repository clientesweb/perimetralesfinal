"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { WhatsAppButton } from "@/components/whatsapp-button"

const categories = [
  { id: "todos", name: "Todos" },
  { id: "cercos", name: "Cercos" },
  { id: "seguridad", name: "Seguridad" },
  { id: "accesorios", name: "Accesorios" },
]

const products = [
  {
    id: "cinta-cubre-cerco",
    name: "Cinta Cubre Cerco",
    description: "Protección y privacidad para cercos perimetrales",
    image: "/images/products/cinta-cubre-cerco-main.jpeg",
    category: "cercos",
  },
  {
    id: "tejido-romboidal",
    name: "Tejido Romboidal",
    description: "Cerco resistente y económico para todo tipo de perímetros",
    image: "/images/products/tejido-romboidal-main.jpeg",
    category: "cercos",
  },
  {
    id: "malla-electrosoldada",
    name: "Malla Electrosoldada",
    description: "Máxima resistencia y durabilidad para cercos perimetrales",
    image: "/images/products/malla-electrosoldada-1.png",
    category: "cercos",
  },
  {
    id: "concertina",
    name: "Concertina",
    description: "Sistema de seguridad perimetral con alambre de cuchillas",
    image: "/images/products/concertina-1.png",
    category: "seguridad",
  },
  {
    id: "pinches-seguridad",
    name: "Pinches de Seguridad",
    description: "Sistema anti-escalamiento para muros y cercos",
    image: "/images/products/pinches-seguridad-main.jpeg",
    category: "seguridad",
  },
  {
    id: "tejido-hexagonal",
    name: "Tejido Hexagonal",
    description: "Versátil malla para múltiples aplicaciones",
    image: "/images/products/tejido-hexagonal-1.png",
    category: "cercos",
  },
  {
    id: "tela-mosquitera",
    name: "Tela Mosquitera",
    description: "Protección efectiva contra insectos",
    image: "/images/products/tela-mosquitera-1.png",
    category: "accesorios",
  },
  {
    id: "tela-para-cercos",
    name: "Tela para Cercos",
    description: "Media sombra para privacidad y protección",
    image: "/images/products/tela-para-cercos-1.png",
    category: "cercos",
  },
  {
    id: "sogas-cadenas",
    name: "Sogas y Cadenas",
    description: "Soluciones versátiles para sujeción y seguridad",
    image: "/images/products/soga-trenzada-1.jpeg",
    category: "accesorios",
  },
  {
    id: "cercos-piletas",
    name: "Cercos para Piletas",
    description: "Seguridad certificada para piletas residenciales",
    image: "/images/products/cerco-pileta-1.jpeg",
    category: "seguridad",
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const filteredProducts =
    selectedCategory === "todos" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Productos", href: "/productos", active: true },
            ]}
          />
        </div>

        {/* Hero Section */}
        <div className="bg-gray-50 py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-anton tracking-tight mb-4">NUESTROS PRODUCTOS</h1>
              <p className="text-lg text-gray-600 mb-8">
                Ofrecemos una amplia gama de productos para cercos perimetrales, seguridad y accesorios. Todos nuestros
                productos son de alta calidad y durabilidad, respaldados por nuestra experiencia de más de 10 años en el
                mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container py-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-red-600 hover:bg-red-700" : ""}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/productos/${product.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div className="aspect-square relative bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4" // Cambiado de object-cover a object-contain
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-anton tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                        {
                          {
                            cercos: "Cercos",
                            seguridad: "Seguridad",
                            accesorios: "Accesorios",
                          }[product.category]
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gray-50 py-16 mt-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-anton tracking-tight mb-4">¿NECESITA ASESORAMIENTO?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro equipo de expertos está listo para ayudarle a elegir los productos adecuados para su proyecto.
                Contáctenos hoy mismo para recibir asesoramiento personalizado y un presupuesto sin compromiso.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="/#contacto">Contactar</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
