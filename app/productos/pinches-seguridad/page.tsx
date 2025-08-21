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
const typeOptions = [
  { id: "standard", name: "Estándar (4 puntas)" },
  { id: "reforzado", name: "Reforzado (6 puntas)" },
]

const lengthOptions = [
  { id: "1m", name: "1 metro" },
  { id: "2m", name: "2 metros" },
  { id: "3m", name: "3 metros" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/pinches-seguridad-1.png")
  const [selectedType, setSelectedType] = useState(typeOptions[0].id)
  const [selectedLength, setSelectedLength] = useState(lengthOptions[1].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 4,
        name: "Pinches de Seguridad",
        image: "/images/products/pinches-seguridad-1.png",
        quantity: quantity,
        selectedOptions: {
          Tipo: typeOptions.find((t) => t.id === selectedType)?.name || "",
          Longitud: lengthOptions.find((l) => l.id === selectedLength)?.name || "",
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
              { label: "Pinches de Seguridad", href: "/productos/pinches-seguridad", active: true },
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
                  alt="Pinches de Seguridad"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/pinches-seguridad-1.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/pinches-seguridad-1.png")}
                >
                  <Image
                    src="/images/products/pinches-seguridad-1.png"
                    alt="Pinches de Seguridad"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/pinches-seguridad-2.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/pinches-seguridad-2.png")}
                >
                  <Image
                    src="/images/products/pinches-seguridad-2.png"
                    alt="Pinches de Seguridad detalle"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/pinches-seguridad-3.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/pinches-seguridad-3.png")}
                >
                  <Image
                    src="/images/products/pinches-seguridad-3.png"
                    alt="Pinches de Seguridad instalados"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">PINCHES DE SEGURIDAD</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.8 (56 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>
                <p className="text-gray-700 mb-6">
                  Los pinches de seguridad son un sistema anti-escalamiento eficaz para muros y cercos perimetrales.
                  Fabricados en polipropileno de alta resistencia con protección UV, estos pinches disuaden intentos de
                  intrusión sin causar daños graves. Son una solución estética y efectiva para aumentar la seguridad de
                  su propiedad.
                </p>

                {/* Type Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Tipo</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {typeOptions.map((type) => (
                      <button
                        key={type.id}
                        className={`border rounded py-2 px-3 text-sm font-medium transition-colors ${
                          selectedType === type.id
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-red-600"
                        }`}
                        onClick={() => setSelectedType(type.id)}
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Length Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Longitud</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {lengthOptions.map((length) => (
                      <button
                        key={length.id}
                        className={`border rounded py-2 px-3 text-sm font-medium transition-colors ${
                          selectedLength === length.id
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-red-600"
                        }`}
                        onClick={() => setSelectedLength(length.id)}
                      >
                        {length.name}
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
                      <p className="text-sm text-gray-500">Polipropileno de alta resistencia con protección UV</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Fácil instalación</p>
                      <p className="text-sm text-gray-500">Sistema de montaje simple y rápido</p>
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
                <h3>Pinches de Seguridad - Protección Anti-escalamiento Efectiva</h3>
                <p>
                  Los pinches de seguridad son un sistema disuasorio diseñado para prevenir el escalamiento de muros,
                  cercos y otras superficies perimetrales. Fabricados con polipropileno de alta resistencia con
                  protección contra rayos UV, estos pinches ofrecen una solución efectiva y estética para aumentar la
                  seguridad de su propiedad.
                </p>
                <p>
                  A diferencia de otros sistemas más agresivos, nuestros pinches de seguridad están diseñados para
                  disuadir intentos de intrusión sin causar daños graves. Su diseño de puntas romas pero efectivas
                  cumple con las normativas de seguridad actuales, evitando posibles responsabilidades legales asociadas
                  con sistemas más peligrosos.
                </p>
                <h4>Características principales:</h4>
                <ul>
                  <li>Fabricados en polipropileno de alta resistencia con protección UV</li>
                  <li>Disponibles en versión estándar (4 puntas) y reforzada (6 puntas)</li>
                  <li>Longitudes disponibles: 1 metro, 2 metros y 3 metros</li>
                  <li>Color negro que se integra discretamente con la mayoría de estructuras</li>
                  <li>Resistentes a la intemperie y a temperaturas extremas</li>
                  <li>Fácil instalación mediante tornillos, adhesivo o clavos (según superficie)</li>
                  <li>Diseño disuasorio efectivo pero que cumple con normativas de seguridad</li>
                </ul>
                <p>
                  Ideal para la protección de viviendas, comercios, industrias, muros perimetrales, techos, canaletas,
                  rejas, portones y cualquier superficie susceptible de ser escalada. También son efectivos para evitar
                  que aves se posen en cornisas, letreros y otras estructuras.
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
                      <td className="py-3">Polipropileno de alta resistencia</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Protección UV</td>
                      <td className="py-3">Sí, resistente a la decoloración y degradación solar</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Tipos disponibles</td>
                      <td className="py-3">Estándar (4 puntas), Reforzado (6 puntas)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Longitudes disponibles</td>
                      <td className="py-3">1 metro, 2 metros, 3 metros</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Color</td>
                      <td className="py-3">Negro</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Altura de las puntas</td>
                      <td className="py-3">3-4 cm (según modelo)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Base</td>
                      <td className="py-3">5 cm de ancho con orificios para fijación</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la temperatura</td>
                      <td className="py-3">-20°C a 80°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Vida útil estimada</td>
                      <td className="py-3">8-10 años en exteriores</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Peso aproximado</td>
                      <td className="py-3">300-450 g por metro (según modelo)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instalacion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Guía de Instalación</h3>
                <p>
                  La instalación de los pinches de seguridad es un proceso sencillo que puede realizar usted mismo. Siga
                  estos pasos para lograr una instalación efectiva:
                </p>
                <h4>Materiales necesarios:</h4>
                <ul>
                  <li>Pinches de seguridad</li>
                  <li>Tornillos y tacos (para superficies de concreto o ladrillo)</li>
                  <li>Adhesivo de montaje fuerte (para superficies lisas)</li>
                  <li>Clavos (para superficies de madera)</li>
                  <li>Taladro y brocas (si se utilizan tornillos)</li>
                  <li>Pistola de silicona (si se utiliza adhesivo)</li>
                  <li>Cinta métrica</li>
                  <li>Guantes de trabajo</li>
                </ul>
                <h4>Pasos para la instalación:</h4>
                <ol>
                  <li>
                    <strong>Planificación:</strong> Determine las áreas donde instalará los pinches de seguridad. Mida
                    la longitud total necesaria.
                  </li>
                  <li>
                    <strong>Preparación de la superficie:</strong> Limpie la superficie donde se instalarán los pinches,
                    eliminando polvo, suciedad o grasa. La superficie debe estar seca.
                  </li>
                  <li>
                    <strong>Método de fijación:</strong> Elija el método de fijación según el tipo de superficie:
                    <ul>
                      <li>
                        <strong>Superficies de concreto o ladrillo:</strong> Marque la posición de los orificios,
                        taladre e inserte tacos antes de atornillar.
                      </li>
                      <li>
                        <strong>Superficies lisas (metal, plástico):</strong> Aplique adhesivo de montaje en la base de
                        los pinches y presione firmemente sobre la superficie.
                      </li>
                      <li>
                        <strong>Superficies de madera:</strong> Fije directamente con clavos o tornillos para madera.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Colocación:</strong> Instale los pinches en línea recta, asegurándose de que queden
                    firmemente fijados. Para esquinas o curvas, puede cortar las tiras con una sierra para ajustarlas a
                    la forma necesaria.
                  </li>
                  <li>
                    <strong>Unión de tramos:</strong> Si necesita unir varios tramos, colóquelos uno junto al otro sin
                    dejar espacios para evitar puntos débiles.
                  </li>
                  <li>
                    <strong>Verificación:</strong> Una vez instalados todos los pinches, verifique que estén
                    correctamente fijados y estables.
                  </li>
                </ol>
                <h4>Recomendaciones adicionales:</h4>
                <ul>
                  <li>
                    Instale los pinches en la parte superior de muros, rejas o superficies a proteger, orientando las
                    puntas hacia arriba y hacia afuera.
                  </li>
                  <li>Para mayor efectividad, instale los pinches en dos o tres filas escalonadas.</li>
                  <li>
                    En zonas con alta exposición al sol, asegúrese de que los pinches estén bien fijados, ya que el
                    calor puede afectar algunos adhesivos.
                  </li>
                  <li>
                    Considere colocar señalización que advierta sobre la presencia de los pinches para evitar
                    accidentes.
                  </li>
                </ul>
                <p>
                  Si prefiere una instalación profesional, ofrecemos servicios de instalación realizados por nuestro
                  equipo técnico. Consulte por nuestros servicios para obtener un presupuesto personalizado.
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
              <Link href="/productos/concertina" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/concertina-1.png"
                    alt="Concertina"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Concertina</h3>
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
              <Link href="/productos/cercos-piletas" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/cerco-pileta-1.jpeg"
                    alt="Cercos para Piletas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Cercos para Piletas</h3>
                <p className="text-red-600 font-medium text-sm mt-1">Consultar precio</p>
              </Link>
            </div>
            <div className="group">
              <Link href="/productos/sogas-cadenas" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/soga-trenzada-1.jpeg"
                    alt="Sogas y Cadenas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Sogas y Cadenas</h3>
                <p className="text-red-600 font-medium text-sm mt-1">Consultar precio</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Back to products button */}
        <div className="container py-8 border-t">
          <Button variant="outline" asChild className="flex items-center gap-2">
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
