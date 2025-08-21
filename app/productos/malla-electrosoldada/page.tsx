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
const sizeOptions1m = [
  { id: "10x10", name: "10x10 cm" },
  { id: "13x13", name: "13x13 cm" },
  { id: "25x25", name: "25x25 cm" },
  { id: "50x50", name: "50x50 cm" },
]

const sizeOptions15m = [
  { id: "150x50", name: "150x50 cm" },
  { id: "100x50", name: "100x50 cm" },
]

const heightOptions = [
  { id: "1m", name: "1.00 metro" },
  { id: "1.5m", name: "1.50 metros" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/malla-electrosoldada-1.png")
  const [selectedHeight, setSelectedHeight] = useState(heightOptions[0].id)
  const [selectedSize, setSelectedSize] = useState(sizeOptions1m[1].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const getCurrentSizeOptions = () => {
    return selectedHeight === "1m" ? sizeOptions1m : sizeOptions15m
  }

  const handleHeightChange = (heightId: string) => {
    setSelectedHeight(heightId)
    // Reset size selection when height changes
    const newSizeOptions = heightId === "1m" ? sizeOptions1m : sizeOptions15m
    setSelectedSize(newSizeOptions[0].id)
  }

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      const currentSizeOptions = getCurrentSizeOptions()
      addItem({
        id: 3,
        name: "Malla Electrosoldada",
        image: "/images/products/malla-electrosoldada-1.png",
        quantity: quantity,
        selectedOptions: {
          Altura: heightOptions.find((h) => h.id === selectedHeight)?.name || "",
          Tamaño: currentSizeOptions.find((s) => s.id === selectedSize)?.name || "",
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
              { label: "Malla Electrosoldada", href: "/productos/malla-electrosoldada", active: true },
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
                  alt="Malla Electrosoldada"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/malla-electrosoldada-1.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/malla-electrosoldada-1.png")}
                >
                  <Image
                    src="/images/products/malla-electrosoldada-1.png"
                    alt="Malla Electrosoldada"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/malla-electrosoldada-2.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/malla-electrosoldada-2.png")}
                >
                  <Image
                    src="/images/products/malla-electrosoldada-2.png"
                    alt="Malla Electrosoldada detalle"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/malla-electrosoldada-3.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/malla-electrosoldada-3.png")}
                >
                  <Image
                    src="/images/products/malla-electrosoldada-3.png"
                    alt="Malla Electrosoldada rollo"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">MALLA ELECTROSOLDADA</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.7 (87 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>
                <p className="text-gray-700 mb-6">
                  La malla electrosoldada es una solución robusta y duradera para cercos perimetrales. Disponible en
                  diferentes alturas y medidas específicas para cada aplicación. Fabricada con alambre de acero
                  galvanizado de alta calidad.
                </p>

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
                        onClick={() => handleHeightChange(height.id)}
                      >
                        {height.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Medidas disponibles</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {getCurrentSizeOptions().map((size) => (
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
                      <p className="text-sm text-gray-500">Acero galvanizado de alta resistencia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Durabilidad superior</p>
                      <p className="text-sm text-gray-500">Resistente a la intemperie y corrosión</p>
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
                <h3>Malla Electrosoldada - Resistencia y Durabilidad para su Cerco</h3>
                <p>
                  La malla electrosoldada es una solución de cercado de alta calidad, fabricada mediante un proceso de
                  soldadura por puntos que une firmemente los alambres horizontales y verticales en cada intersección.
                  Este proceso de fabricación garantiza una estructura rígida y uniforme que proporciona excelente
                  resistencia y estabilidad.
                </p>
                <p>
                  Nuestras mallas electrosoldadas están fabricadas con alambre de acero galvanizado que ofrece una
                  protección superior contra la corrosión, lo que las hace ideales para su uso en exteriores y en
                  diferentes condiciones climáticas. La capa de zinc proporciona una barrera protectora que prolonga
                  significativamente la vida útil del producto.
                </p>
                <h4>Características principales:</h4>
                <ul>
                  <li>Estructura rígida y uniforme gracias al proceso de electrosoldadura</li>
                  <li>Fabricada con alambre de acero galvanizado para máxima resistencia a la corrosión</li>
                  <li>Disponible en diferentes tamaños de cuadrícula: 10x10 cm, 13x13 cm, 25x25 cm y 50x50 cm</li>
                  <li>Alturas disponibles: 1.00 metro y 1.50 metros</li>
                  <li>Fácil instalación en postes metálicos o de madera</li>
                  <li>Resistente a impactos y deformaciones</li>
                  <li>Bajo mantenimiento y larga vida útil</li>
                </ul>
                <p>
                  Ideal para delimitar propiedades residenciales, comerciales, industriales, agrícolas, instalaciones
                  deportivas, parques, jardines y cualquier espacio que requiera un cercado resistente y duradero.
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
                      <td className="py-3 font-medium">Alturas disponibles</td>
                      <td className="py-3">1.00m, 1.50m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Medidas para 1.00m</td>
                      <td className="py-3">10x10, 13x13, 25x25, 50x50 cm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Medidas para 1.50m</td>
                      <td className="py-3">150x50, 100x50 cm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Proceso de fabricación</td>
                      <td className="py-3">Electrosoldadura por puntos</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la corrosión</td>
                      <td className="py-3">Alta, tratamiento galvanizado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Vida útil estimada</td>
                      <td className="py-3">15-20 años (dependiendo de condiciones ambientales)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instalacion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Guía de Instalación</h3>
                <p>
                  La instalación de malla electrosoldada es relativamente sencilla, pero requiere una planificación
                  adecuada y algunas herramientas básicas. Siga estos pasos para lograr una instalación correcta y
                  duradera:
                </p>
                <h4>Materiales necesarios:</h4>
                <ul>
                  <li>Malla electrosoldada</li>
                  <li>Postes metálicos o de madera</li>
                  <li>Alambre galvanizado para fijación</li>
                  <li>Tensores (opcional)</li>
                  <li>Alicates y tenazas</li>
                  <li>Nivel y cinta métrica</li>
                  <li>Hormigón para fijar los postes (si es necesario)</li>
                  <li>Guantes de trabajo</li>
                </ul>
                <h4>Pasos para la instalación:</h4>
                <ol>
                  <li>
                    <strong>Planificación:</strong> Mida el perímetro donde instalará la malla y determine la cantidad
                    de material necesario. Marque la ubicación de los postes, que generalmente se colocan a una
                    distancia de 2-3 metros entre sí.
                  </li>
                  <li>
                    <strong>Instalación de postes:</strong> Cave hoyos para los postes (aproximadamente 40-50 cm de
                    profundidad). Coloque los postes y asegúrese de que estén nivelados verticalmente. Fíjelos con
                    hormigón y deje secar completamente.
                  </li>
                  <li>
                    <strong>Preparación de la malla:</strong> Desenrolle la malla electrosoldada a lo largo del
                    perímetro. Es recomendable que esta tarea la realicen al menos dos personas para evitar que la malla
                    se deforme.
                  </li>
                  <li>
                    <strong>Fijación de la malla:</strong> Comience a fijar la malla a los postes utilizando alambre
                    galvanizado. Asegure primero las esquinas y luego proceda a lo largo de cada poste, manteniendo la
                    malla tensa.
                  </li>
                  <li>
                    <strong>Tensado:</strong> Para lograr una instalación óptima, es importante mantener la malla
                    tensada uniformemente. Puede utilizar tensores en las esquinas y en tramos largos para mejorar la
                    tensión.
                  </li>
                  <li>
                    <strong>Unión de tramos:</strong> Si necesita unir varios tramos de malla, superponga los extremos
                    en al menos 10 cm y únalos con alambre galvanizado en varios puntos.
                  </li>
                  <li>
                    <strong>Acabado:</strong> Una vez instalada toda la malla, verifique que esté correctamente tensada
                    y fijada a todos los postes. Corte cualquier exceso de alambre para evitar bordes afilados.
                  </li>
                </ol>
                <h4>Recomendaciones adicionales:</h4>
                <ul>
                  <li>
                    Para terrenos irregulares, puede ser necesario adaptar la altura de los postes para mantener la
                    malla nivelada en la parte superior.
                  </li>
                  <li>
                    En zonas con fuertes vientos, considere utilizar postes más robustos y reducir la distancia entre
                    ellos.
                  </li>
                  <li>
                    Para mayor seguridad, puede instalar la malla enterrando unos 5-10 cm en el suelo para evitar que
                    animales o intrusos puedan pasar por debajo.
                  </li>
                  <li>
                    Realice inspecciones periódicas para verificar la tensión de la malla y el estado de los postes,
                    especialmente después de condiciones climáticas adversas.
                  </li>
                </ul>
                <p>
                  Si prefiere una instalación profesional, ofrecemos servicios de instalación completos realizados por
                  nuestro equipo de técnicos experimentados. Consulte por nuestros servicios de instalación para obtener
                  un presupuesto personalizado.
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
              <Link href="/productos/pinches-seguridad" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/pinches-seguridad-1.png"
                    alt="Pinches de Seguridad"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Pinches de Seguridad</h3>
                <p className="text-red-600 font-medium text-sm mt-1">Consultar precio</p>
              </Link>
            </div>
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
              <Link href="/productos/tela-para-cercos" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/tela-para-cercos-1.png"
                    alt="Tela para Cercos"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Tela para Cercos</h3>
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
