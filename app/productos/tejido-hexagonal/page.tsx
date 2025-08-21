"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Truck, Shield, Award, Star, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Opciones de producto
const sizeOptions = [
  { id: "13mm", name: '13 mm (1/2")' },
  { id: "25mm", name: '25 mm (1")' },
]

const heightOptions = [
  { id: "1.00m", name: "1.00 m" },
  { id: "1.20m", name: "1.20 m" },
  { id: "1.50m", name: "1.50 m" },
  { id: "1.80m", name: "1.80 m" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/tejido-hexagonal-1.png")
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0].id)
  const [selectedHeight, setSelectedHeight] = useState(heightOptions[0].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 6,
        name: "Tejido Hexagonal",
        image: "/images/products/tejido-hexagonal-1.png",
        quantity: quantity,
        selectedOptions: {
          Tamaño: sizeOptions.find((s) => s.id === selectedSize)?.name || "",
          Altura: heightOptions.find((h) => h.id === selectedHeight)?.name || "",
        },
      })

      setIsAdding(false)

      toast({
        title: "Producto agregado",
        description: "El producto ha sido agregado al carrito correctamente.",
      })
    }, 800)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Productos", href: "/productos" },
              { label: "Tejido Hexagonal", href: "/productos/tejido-hexagonal", active: true },
            ]}
          />
        </div>

        {/* Product Details */}
        <div className="container py-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative border rounded-lg overflow-hidden bg-white">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Tejido Hexagonal"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tejido-hexagonal-1.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tejido-hexagonal-1.png")}
                >
                  <Image
                    src="/images/products/tejido-hexagonal-1.png"
                    alt="Tejido Hexagonal"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tejido-hexagonal-2.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tejido-hexagonal-2.png")}
                >
                  <Image
                    src="/images/products/tejido-hexagonal-2.png"
                    alt="Tejido Hexagonal detalle"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tejido-hexagonal-3.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tejido-hexagonal-3.png")}
                >
                  <Image
                    src="/images/products/tejido-hexagonal-3.png"
                    alt="Tejido Hexagonal rollo"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">TEJIDO HEXAGONAL</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.5 (78 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>
                <p className="text-gray-700 mb-6">
                  El tejido hexagonal, también conocido como malla de gallinero, es una solución versátil para múltiples
                  aplicaciones. Disponible en medidas de 13mm (1/2") y 25mm (1") con alturas de 1.00m, 1.20m, 1.50m y
                  1.80m.
                </p>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Tamaño de hexágono</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {sizeOptions.map((size) => (
                      <button
                        key={size.id}
                        className={`border rounded py-2 px-3 text-sm font-medium transition-colors ${
                          selectedSize === size.id
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-red-600"
                        }`}
                        onClick={() => setSelectedSize(size.id)}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Height Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Altura</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {heightOptions.map((height) => (
                      <button
                        key={height.id}
                        className={`border rounded py-2 px-3 text-sm font-medium transition-colors ${
                          selectedHeight === height.id
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-red-600"
                        }`}
                        onClick={() => setSelectedHeight(height.id)}
                      >
                        {height.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex gap-4 mb-8">
                  <div className="w-24">
                    <label htmlFor="quantity" className="sr-only">
                      Cantidad
                    </label>
                    <select
                      id="quantity"
                      className="w-full rounded border-gray-300 py-2 px-3 text-sm"
                      value={quantity}
                      onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button
                    className="flex-1 bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2 h-11"
                    onClick={handleAddToCart}
                    disabled={isAdding}
                  >
                    {isAdding ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                        <span>Agregando...</span>
                      </>
                    ) : (
                      <>
                        <span>Agregar al Carrito</span>
                      </>
                    )}
                  </Button>
                </div>

                {/* Features */}
                <div className="border-t border-b py-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Envío disponible</p>
                      <p className="text-sm text-gray-500">Consulte costos de envío según su ubicación</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Garantía de calidad</p>
                      <p className="text-sm text-gray-500">Alambre galvanizado de alta resistencia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Versatilidad</p>
                      <p className="text-sm text-gray-500">Múltiples aplicaciones en un solo producto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="container py-12">
          <Tabs defaultValue="descripcion">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="descripcion"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6"
              >
                Descripción
              </TabsTrigger>
              <TabsTrigger
                value="especificaciones"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6"
              >
                Especificaciones
              </TabsTrigger>
              <TabsTrigger
                value="instalacion"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6"
              >
                Guía de Instalación
              </TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Tejido Hexagonal - Versatilidad y Resistencia</h3>
                <p>
                  El tejido hexagonal, también conocido como malla de gallinero o malla hexagonal, es un producto
                  versátil fabricado mediante el entrelazado de alambre galvanizado en un patrón de hexágonos regulares.
                  Esta configuración proporciona una excelente combinación de flexibilidad, resistencia y economía.
                </p>
                <p>
                  Gracias a su proceso de galvanizado, este tejido ofrece una protección superior contra la corrosión,
                  lo que lo hace ideal para aplicaciones tanto en interiores como en exteriores. Su diseño hexagonal
                  distribuye uniformemente las tensiones, proporcionando mayor durabilidad y resistencia estructural.
                </p>
                <h4>Características principales:</h4>
                <ul>
                  <li>Fabricado con alambre galvanizado para protección contra la corrosión</li>
                  <li>Diseño hexagonal que proporciona flexibilidad y resistencia</li>
                  <li>Disponible en diferentes tamaños de hexágono: 13 mm (1/2"), 25 mm (1")</li>
                  <li>Alturas disponibles: 1.00 m, 1.20 m, 1.50 m, 1.80 m</li>
                  <li>Fácil de cortar, doblar y adaptar a diferentes formas y superficies</li>
                  <li>Ligero pero resistente</li>
                  <li>Económico y de bajo mantenimiento</li>
                </ul>
                <h4>Aplicaciones:</h4>
                <ul>
                  <li>Cercos para aves y animales pequeños</li>
                  <li>Protección de cultivos y jardines</li>
                  <li>Refuerzo para yeso y concreto</li>
                  <li>Fabricación de jaulas y viveros</li>
                  <li>Filtros y tamices</li>
                  <li>Decoración y manualidades</li>
                  <li>Protección de árboles jóvenes</li>
                  <li>Soporte para plantas trepadoras</li>
                </ul>
                <p>
                  Su versatilidad lo convierte en un producto indispensable tanto para profesionales de la construcción
                  y agricultura como para proyectos de bricolaje y jardinería doméstica.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="especificaciones" className="pt-6">
              <div className="prose max-w-none">
                <h3>Especificaciones Técnicas</h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Material</td>
                      <td className="py-3">Alambre de acero galvanizado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Tamaños de hexágono</td>
                      <td className="py-3">13 mm (1/2"), 25 mm (1")</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Alturas disponibles</td>
                      <td className="py-3">1.00m, 1.20m, 1.50m, 1.80m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Proceso de fabricación</td>
                      <td className="py-3">Entrelazado con torsión</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la corrosión</td>
                      <td className="py-3">Alta, tratamiento galvanizado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Vida útil estimada</td>
                      <td className="py-3">5-10 años (dependiendo de condiciones ambientales)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instalacion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Guía de Instalación</h3>
                <p>
                  La instalación del tejido hexagonal es relativamente sencilla y puede adaptarse a diferentes
                  aplicaciones. A continuación, presentamos una guía general que puede ajustarse según sus necesidades
                  específicas:
                </p>
                <h4>Materiales necesarios:</h4>
                <ul>
                  <li>Tejido hexagonal</li>
                  <li>Postes o soportes (según la aplicación)</li>
                  <li>Alambre galvanizado para fijación</li>
                  <li>Tensores (opcional)</li>
                  <li>Alicates y tenazas</li>
                  <li>Tijeras para metal o cizalla</li>
                  <li>Guantes de trabajo</li>
                </ul>
                <h4>Pasos para la instalación como cerco:</h4>
                <ol>
                  <li>
                    <strong>Planificación:</strong> Mida el perímetro donde instalará el tejido y determine la cantidad
                    de material necesario. Marque la ubicación de los postes, que generalmente se colocan a una
                    distancia de 1.5-2 metros entre sí.
                  </li>
                  <li>
                    <strong>Instalación de postes:</strong> Instale los postes asegurándose de que estén firmemente
                    anclados al suelo y nivelados verticalmente.
                  </li>
                  <li>
                    <strong>Desenrollado del tejido:</strong> Desenrolle el tejido hexagonal a lo largo del perímetro.
                    Es recomendable que esta tarea la realicen al menos dos personas para mantener el tejido uniforme.
                  </li>
                  <li>
                    <strong>Fijación del tejido:</strong> Comience a fijar el tejido a los postes utilizando alambre
                    galvanizado o grapas especiales. Asegure primero la parte superior y luego proceda hacia abajo,
                    manteniendo el tejido tenso.
                  </li>
                  <li>
                    <strong>Tensado:</strong> Para lograr una instalación óptima, es importante mantener el tejido
                    tensado uniformemente. Puede utilizar tensores en las esquinas para mejorar la tensión.
                  </li>
                  <li>
                    <strong>Unión de tramos:</strong> Si necesita unir varios tramos de tejido, superponga los extremos
                    y únalos con alambre galvanizado en varios puntos.
                  </li>
                  <li>
                    <strong>Acabado:</strong> Una vez instalado todo el tejido, verifique que esté correctamente tensado
                    y fijado a todos los postes. Corte cualquier exceso de alambre para evitar bordes afilados.
                  </li>
                </ol>
                <h4>Aplicaciones específicas:</h4>
                <ul>
                  <li>
                    <strong>Para protección de cultivos:</strong> Puede crear estructuras simples con postes de madera o
                    PVC y cubrir con el tejido hexagonal, asegurándolo con grapas o alambre.
                  </li>
                  <li>
                    <strong>Para refuerzo de yeso:</strong> Corte el tejido al tamaño necesario y fíjelo a la superficie
                    con clavos o grapas antes de aplicar el yeso.
                  </li>
                  <li>
                    <strong>Para jaulas:</strong> Forme la estructura deseada y una los bordes con alambre galvanizado,
                    asegurándose de doblar cualquier extremo afilado hacia adentro.
                  </li>
                </ul>
                <h4>Recomendaciones adicionales:</h4>
                <ul>
                  <li>Utilice guantes de trabajo para evitar cortes durante la manipulación del tejido hexagonal.</li>
                  <li>
                    Para aplicaciones en exteriores, considere revisar periódicamente el estado del tejido y realizar
                    mantenimiento si es necesario.
                  </li>
                  <li>
                    Si necesita doblar el tejido para formar esquinas, hágalo gradualmente para evitar deformar los
                    hexágonos.
                  </li>
                  <li>
                    Para mayor durabilidad en ambientes húmedos o salinos, puede aplicar una capa adicional de pintura
                    anticorrosiva después de la instalación.
                  </li>
                </ul>
                <p>
                  Si tiene dudas sobre la instalación para una aplicación específica, no dude en contactar con nuestro
                  equipo técnico para recibir asesoramiento personalizado.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="container py-12 border-t">
          <h2 className="text-2xl font-anton mb-8">PRODUCTOS RELACIONADOS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Related products */}
            <div className="group">
              <Link href="/productos/tejido-romboidal" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/tejido-romboidal-1.png"
                    alt="Tejido Romboidal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Tejido Romboidal</h3>
                <p className="text-red-600 font-medium text-sm mt-1">Consultar precio</p>
              </Link>
            </div>
            <div className="group">
              <Link href="/productos/tela-mosquitera" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/tela-mosquitera-1.png"
                    alt="Tela Mosquitera"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Tela Mosquitera</h3>
                <p className="text-red-600 font-medium text-sm mt-1">Consultar precio</p>
              </Link>
            </div>
            <div className="group">
              <Link href="/productos/malla-electrosoldada" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/malla-electrosoldada-1.png"
                    alt="Malla Electrosoldada"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Malla Electrosoldada</h3>
                <p className="text-red-600 font-medium text-sm mt-1">Consultar precio</p>
              </Link>
            </div>
            <div className="group">
              <Link href="/productos/cinta-cubre-cerco" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/cinta-cubre-cerco-1.png"
                    alt="Cinta Cubre Cerco"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Cinta Cubre Cerco</h3>
                <p className="text-red-600 font-medium text-sm mt-1">Consultar precio</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Back to products button */}
        <div className="container py-8 border-t">
          <Button variant="outline" asChild className="flex items-center gap-2 bg-transparent">
            <Link href="/productos">
              <ArrowLeft className="h-4 w-4" />
              Volver a productos
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
