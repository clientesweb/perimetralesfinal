"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Productos actualizados: solo incluir productos con imágenes y detalles completos
const products = [
  {
    id: "cinta-cubre-cerco",
    name: "Cinta cubre cerco",
    description: "Ideal para brindar privacidad y mejorar la estética de su cerco perimetral.",
    image: "/images/products/cinta-cubre-cerco-1.png",
  },
  {
    id: "concertina",
    name: "Concertina",
    description: "Alambre de seguridad con cuchillas afiladas para máxima protección perimetral.",
    image: "/images/products/concertina-1.png",
  },
  {
    id: "malla-electrosoldada",
    name: "Malla Electrosoldada",
    description: "Solución robusta y duradera para cercos perimetrales residenciales e industriales.",
    image: "/images/products/malla-electrosoldada-1.png",
  },
  {
    id: "pinches-seguridad",
    name: "Pinches de Seguridad",
    description: "Sistema anti-escalamiento eficaz para muros y cercos perimetrales.",
    image: "/images/products/pinches-seguridad-1.png",
  },
  {
    id: "tejido-romboidal",
    name: "Tejido Romboidal",
    description: "Solución versátil y económica para cercos perimetrales, también conocido como malla ciclónica.",
    image: "/images/products/tejido-romboidal-1.png",
  },
  {
    id: "tejido-hexagonal",
    name: "Tejido Hexagonal",
    description: "Malla versátil para múltiples aplicaciones, ideal para cercos, jaulas y protección.",
    image: "/images/products/tejido-hexagonal-1.png",
  },
  {
    id: "tela-mosquitera",
    name: "Tela Mosquitera",
    description: "Proteja su hogar contra insectos mientras permite el paso del aire y la luz.",
    image: "/images/products/tela-mosquitera-1.png",
  },
  {
    id: "tela-para-cercos",
    name: "Tela para Cercos",
    description: "Media sombra ideal para privacidad, protección contra el viento y reducción de radiación solar.",
    image: "/images/products/tela-para-cercos-1.png",
  },
  {
    id: "sogas-cadenas",
    name: "Sogas y Cadenas",
    description: "Amplia gama de sogas trenzadas y cadenas galvanizadas para múltiples aplicaciones.",
    image: "/images/products/soga-trenzada-1.jpeg",
  },
  {
    id: "cercos-piletas",
    name: "Cercos para Piletas",
    description: "Sistemas de seguridad diseñados para prevenir accidentes, especialmente de niños y mascotas.",
    image: "/images/products/cerco-pileta-1.jpeg",
  },
]

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("todos")

  // Filtrar productos basados en término de búsqueda
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="container py-16">
      {/* Búsqueda y Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Buscar productos..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={category === "todos" ? "default" : "outline"}
            onClick={() => setCategory("todos")}
            className={category === "todos" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            Todos
          </Button>
          <Button
            variant={category === "cercos" ? "default" : "outline"}
            onClick={() => setCategory("cercos")}
            className={category === "cercos" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            Cercos
          </Button>
          <Button
            variant={category === "accesorios" ? "default" : "outline"}
            onClick={() => setCategory("accesorios")}
            className={category === "accesorios" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            Accesorios
          </Button>
        </div>
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/productos/${product.id}`}
            className="group bg-white border rounded-lg overflow-hidden transition-all hover:shadow-lg"
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg group-hover:text-red-600 transition-colors">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-red-600 font-medium">Consultar precio</span>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Ver más
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No se encontraron productos</h3>
          <p className="text-gray-500">
            No hemos encontrado productos que coincidan con su búsqueda. Intente con otros términos.
          </p>
        </div>
      )}
    </div>
  )
}
