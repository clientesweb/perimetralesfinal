"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Truck, Shield, Star, ArrowLeft, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Opciones de producto
const densityOptions = [
  { id: "50", name: "50% (Media sombra)" },
  { id: "80", name: "80% (Alta densidad)" },
  { id: "90", name: "90% (Máxima densidad)" },
]

const colorOptions = [
  { id: "verde", name: "Verde" },
  { id: "negro", name: "Negro" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/tela-para-cercos-1.png")
  const [selectedDensity, setSelectedDensity] = useState(densityOptions[1].id)
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 8,
        name: "Tela para Cercos",
        image: "/images/products/tela-para-cercos-1.png",
        quantity: quantity,
        selectedOptions: {
          Densidad: densityOptions.find((d) => d.id === selectedDensity)?.name || "",
          Color: colorOptions.find((c) => c.id === selectedColor)?.name || "",
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
              { label: "Tela para Cercos", href: "/productos/tela-para-cercos", active: true },
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
                  alt="Tela para Cercos"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tela-para-cercos-1.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tela-para-cercos-1.png")}
                >
                  <Image
                    src="/images/products/tela-para-cercos-1.png"
                    alt="Tela para Cercos"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tela-para-cercos-2.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tela-para-cercos-2.png")}
                >
                  <Image
                    src="/images/products/tela-para-cercos-2.png"
                    alt="Tela para Cercos detalle"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tela-para-cercos-3.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tela-para-cercos-3.png")}
                >
                  <Image
                    src="/images/products/tela-para-cercos-3.png"
                    alt="Tela para Cercos instalada"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">TELA PARA CERCOS</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.5 (68 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>
                <p className="text-gray-700 mb-6">
                  La tela para cercos, también conocida como media sombra, es una solución ideal para brindar
                  privacidad, protección contra el viento y reducción de la radiación solar. Fabricada con polietileno
                  de alta densidad (HDPE), ofrece excelente resistencia a la intemperie y durabilidad. Perfecta para
                  cercos perimetrales, jardines, terrazas y áreas recreativas.
                </p>

                {/* Density Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Densidad</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {densityOptions.map((density) => (
                      <button
                        key={density.id}
                        className={`border rounded py-2 px-3 text-sm font-medium transition-colors ${
                          selectedDensity === density.id
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-red-600"
                        }`}
                        onClick={() => setSelectedDensity(density.id)}
                      >
                        {density.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Color</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color.id}
                        className={`border rounded py-2 px-3 text-sm font-medium transition-colors ${
                          selectedColor === color.id
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-red-600"
                        }`}
                        onClick={() => setSelectedColor(color.id)}
                      >
                        {color.name}
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
                      <p className="text-sm text-gray-500">Polietileno de alta densidad con protección UV</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wind className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Protección contra el viento</p>
                      <p className="text-sm text-gray-500">Reduce la velocidad del viento hasta un 80%</p>
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
                <h3>Tela para Cercos - Privacidad y Protección para su Propiedad</h3>
                <p>
                  La tela para cercos, también conocida como media sombra o malla raschel, es una solución versátil y
                  económica para brindar privacidad, protección contra el viento y reducción de la radiación solar en
                  diferentes espacios. Fabricada con polietileno de alta densidad (HDPE), ofrece una excelente
                  combinación de durabilidad, resistencia y funcionalidad.
                </p>
                <p>
                  Nuestras telas para cercos están diseñadas para resistir las condiciones climáticas adversas,
                  incluyendo la exposición constante a los rayos UV, lluvia, viento y cambios de temperatura. El
                  tratamiento anti-UV proporciona protección adicional contra la degradación solar, garantizando una
                  larga vida útil incluso en uso continuo en exteriores.
                </p>
                <h4>Características principales:</h4>
                <ul>
                  <li>Fabricada con polietileno de alta densidad (HDPE) con tratamiento anti-UV</li>
                  <li>Disponible en diferentes densidades: 50%, 80% y 90%</li>
                  <li>Colores disponibles: verde y negro</li>
                  <li>Resistente a la intemperie y a los rayos UV</li>
                  <li>Permeable al aire, permitiendo la ventilación mientras reduce la velocidad del viento</li>
                  <li>Fácil de cortar e instalar</li>
                  <li>Ligera pero resistente</li>
                  <li>No se pudre ni se deteriora con la humedad</li>
                </ul>
                <h4>Aplicaciones:</h4>
                <ul>
                  <li>Cercos perimetrales para brindar privacidad</li>
                  <li>Protección contra el viento en jardines y terrazas</li>
                  <li>Reducción de la radiación solar en áreas recreativas</li>
                  <li>Delimitación de espacios en obras y construcciones</li>
                  <li>Protección de cultivos en agricultura</li>
                  <li>Cobertura para invernaderos</li>
                  <li>Protección visual en eventos temporales</li>
                </ul>
                <p>
                  La tela para cercos es una solución práctica y económica para mejorar la privacidad y protección de su
                  propiedad, combinando funcionalidad, durabilidad y estética en un solo producto.
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
                      <td className="py-3">Polietileno de alta densidad (HDPE)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Densidades disponibles</td>
                      <td className="py-3">50%, 80%, 90%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Colores disponibles</td>
                      <td className="py-3">Verde, Negro</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Ancho del rollo</td>
                      <td className="py-3">1 metro, 1.5 metros, 2 metros, 3 metros, 4 metros</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Longitud del rollo</td>
                      <td className="py-3">5 metros, 10 metros, 50 metros, 100 metros (según modelo)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Peso</td>
                      <td className="py-3">80-150 g/m² (según densidad)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la tracción</td>
                      <td className="py-3">Alta</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a los rayos UV</td>
                      <td className="py-3">Excelente, tratamiento anti-UV</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Reducción de radiación solar</td>
                      <td className="py-3">50-90% (según densidad)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Reducción de velocidad del viento</td>
                      <td className="py-3">40-80% (según densidad)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Vida útil estimada</td>
                      <td className="py-3">3-5 años en uso continuo en exteriores</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Permeabilidad al agua</td>
                      <td className="py-3">Sí, permite el paso del agua</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Permeabilidad al aire</td>
                      <td className="py-3">Sí, permite la ventilación</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instalacion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Guía de Instalación</h3>
                <p>
                  La instalación de la tela para cercos es un proceso relativamente sencillo que puede realizar usted
                  mismo. A continuación, presentamos una guía general para diferentes tipos de aplicaciones:
                </p>
                <h4>Materiales necesarios:</h4>
                <ul>
                  <li>Tela para cercos</li>
                  <li>Tijeras o cutter</li>
                  <li>Cinta métrica</li>
                  <li>Precintos plásticos o alambre</li>
                  <li>Tensores (opcional)</li>
                  <li>Ojales o arandelas (opcional)</li>
                  <li>Martillo y clavos (para postes de madera)</li>
                  <li>Guantes de trabajo</li>
                </ul>
                <h4>Instalación en cercos existentes:</h4>
                <ol>
                  <li>
                    <strong>Medición:</strong> Mida cuidadosamente el perímetro donde instalará la tela. Añada 10-15 cm
                    extra en cada lado para permitir la fijación.
                  </li>
                  <li>
                    <strong>Corte:</strong> Corte la tela según las medidas tomadas, utilizando tijeras o un cutter
                    afilado. Asegúrese de cortar en línea recta para un acabado profesional.
                  </li>
                  <li>
                    <strong>Preparación:</strong> Limpie el cerco existente para asegurar una buena fijación. Retire
                    cualquier elemento que pueda dañar la tela.
                  </li>
                  <li>
                    <strong>Fijación:</strong> Extienda la tela a lo largo del cerco, asegurándose de que quede tensa y
                    sin arrugas. Comience a fijarla desde la parte superior y continúe hacia abajo.
                    <ul>
                      <li>
                        <strong>Para cercos de malla:</strong> Utilice precintos plásticos o alambre para fijar la tela
                        a la malla, colocándolos cada 30-50 cm.
                      </li>
                      <li>
                        <strong>Para postes de madera:</strong> Puede utilizar grapas, clavos con arandelas o precintos
                        para fijar la tela a los postes.
                      </li>
                      <li>
                        <strong>Para postes metálicos:</strong> Utilice precintos plásticos o alambre para asegurar la
                        tela a los postes.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Tensado:</strong> Para lograr una instalación óptima, es importante mantener la tela tensada
                    uniformemente. Puede utilizar tensores en las esquinas y en tramos largos para mejorar la tensión.
                  </li>
                  <li>
                    <strong>Acabado:</strong> Una vez instalada toda la tela, verifique que esté correctamente tensada y
                    fijada en todo el perímetro. Recorte cualquier exceso de material o precintos.
                  </li>
                </ol>
                <h4>Instalación con ojales (opcional):</h4>
                <p>
                  Para una instalación más resistente, especialmente en áreas con vientos fuertes, puede añadir ojales a
                  la tela:
                </p>
                <ol>
                  <li>
                    Marque los puntos donde colocará los ojales, generalmente cada 50-100 cm a lo largo del perímetro.
                  </li>
                  <li>
                    Utilice un kit de ojales o lleve la tela a un profesional para que instale los ojales metálicos.
                  </li>
                  <li>
                    Fije la tela pasando alambre, cuerda o precintos a través de los ojales y alrededor de los postes o
                    la estructura del cerco.
                  </li>
                </ol>
                <h4>Consejos adicionales:</h4>
                <ul>
                  <li>
                    En áreas con vientos fuertes, considere utilizar una densidad menor (50%) que ofrezca menor
                    resistencia al viento.
                  </li>
                  <li>
                    Para mayor durabilidad, evite que la tela esté en contacto directo con el suelo, ya que esto puede
                    acelerar su deterioro.
                  </li>
                  <li>
                    Si necesita unir dos tramos de tela, superponga los bordes al menos 10 cm y fíjelos con precintos o
                    costura.
                  </li>
                  <li>
                    Realice inspecciones periódicas para verificar la tensión de la tela y el estado de las fijaciones,
                    especialmente después de condiciones climáticas adversas.
                  </li>
                  <li>
                    Para limpiar la tela, utilice agua a baja presión y, si es necesario, un cepillo suave con jabón
                    neutro.
                  </li>
                </ul>
                <p>
                  Si prefiere una instalación profesional, ofrecemos servicios de medición e instalación realizados por
                  técnicos especializados. Consulte por nuestros servicios para obtener un presupuesto personalizado.
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
            <div className="group">
              <Link href="/productos/tejido-hexagonal" className="block">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                  <Image
                    src="/images/products/tejido-hexagonal-1.png"
                    alt="Tejido Hexagonal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-red-600 transition-colors">Tejido Hexagonal</h3>
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
