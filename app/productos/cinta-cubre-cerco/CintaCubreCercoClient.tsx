"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Truck, Shield, Award, Star, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Opciones de producto
const colorOptions = [
  { id: "verde", name: "Verde", hex: "#16a34a" },
  { id: "negro", name: "Negro", hex: "#171717" },
  { id: "azul", name: "Azul", hex: "#2563eb" },
]

const sizeOptions = [
  { id: "10m", name: "10m x 5cm" },
  { id: "20m", name: "20m x 5cm" },
  { id: "50m", name: "50m x 5cm" },
]

export default function CintaCubreCercoClient() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/cinta-cubre-cerco-1.png")
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].id)
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 1,
        name: "Cinta cubre cerco",
        image: "/images/products/cinta-cubre-cerco-1.png",
        quantity: quantity,
        selectedOptions: {
          Color: colorOptions.find((c) => c.id === selectedColor)?.name || "",
          Tamaño: sizeOptions.find((s) => s.id === selectedSize)?.name || "",
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
              { label: "Cinta cubre cerco", href: "/productos/cinta-cubre-cerco", active: true },
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
                  alt="Cinta cubre cerco"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/cinta-cubre-cerco-1.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/cinta-cubre-cerco-1.png")}
                >
                  <Image
                    src="/images/products/cinta-cubre-cerco-1.png"
                    alt="Cinta cubre cerco"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/cinta-cubre-cerco-2.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/cinta-cubre-cerco-2.png")}
                >
                  <Image
                    src="/images/products/cinta-cubre-cerco-2.png"
                    alt="Cinta cubre cerco instalada"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/cinta-cubre-cerco-3.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/cinta-cubre-cerco-3.png")}
                >
                  <Image
                    src="/images/products/cinta-cubre-cerco-3.png"
                    alt="Cinta cubre cerco en diferentes colores"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">CINTA CUBRE CERCO</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.0 (24 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>
                <p className="text-gray-700 mb-6">
                  La cinta cubre cerco es ideal para brindar privacidad y mejorar la estética de su cerco perimetral.
                  Fabricada con materiales de alta calidad, resistentes a la intemperie y a los rayos UV, garantizando
                  durabilidad y un aspecto impecable por mucho tiempo.
                </p>

                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Color</h3>
                  <div className="flex gap-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color.id}
                        className={`w-10 h-10 rounded-full relative flex items-center justify-center ${
                          selectedColor === color.id ? "ring-2 ring-offset-2 ring-red-600" : ""
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color.id)}
                        aria-label={`Color ${color.name}`}
                      >
                        {selectedColor === color.id && <Check className="h-5 w-5 text-white" />}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Color seleccionado: {colorOptions.find((c) => c.id === selectedColor)?.name}
                  </p>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Tamaño</h3>
                  <div className="grid grid-cols-3 gap-3">
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
                      <p className="text-sm text-gray-500">1 año de garantía en todos nuestros productos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Materiales premium</p>
                      <p className="text-sm text-gray-500">Resistentes a la intemperie y rayos UV</p>
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
                <h3>Cinta Cubre Cerco - Privacidad y Estética para su Cerco Perimetral</h3>
                <p>
                  La cinta cubre cerco es una solución ideal para quienes buscan mejorar la apariencia de sus cercos
                  perimetrales mientras añaden privacidad a su propiedad. Fabricada con materiales de alta calidad, esta
                  cinta está diseñada para resistir las condiciones climáticas más adversas, incluyendo la exposición
                  constante al sol, lluvia y viento.
                </p>
                <p>
                  Nuestras cintas cubre cerco están disponibles en varios colores para adaptarse a cualquier estilo
                  arquitectónico y preferencia personal. El color verde se integra perfectamente con jardines y espacios
                  naturales, mientras que el negro ofrece un aspecto más elegante y moderno.
                </p>
                <h4>Características principales:</h4>
                <ul>
                  <li>Material resistente a los rayos UV, evitando la decoloración con el paso del tiempo</li>
                  <li>Fácil instalación en cualquier tipo de cerco de alambre</li>
                  <li>Impermeable y resistente a la humedad</li>
                  <li>No se deforma con los cambios de temperatura</li>
                  <li>Disponible en diferentes colores y medidas</li>
                  <li>Proporciona privacidad sin sacrificar seguridad</li>
                </ul>
                <p>
                  Ideal para cercos perimetrales en viviendas, escuelas, clubes deportivos, parques, industrias y
                  cualquier espacio que requiera un cerramiento estético y funcional.
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
                      <td className="py-3">PVC de alta densidad</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Ancho</td>
                      <td className="py-3">5 cm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Longitudes disponibles</td>
                      <td className="py-3">10m, 20m, 50m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Colores disponibles</td>
                      <td className="py-3">Verde, Negro, Azul</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia UV</td>
                      <td className="py-3">Sí, tratamiento anti-UV</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la intemperie</td>
                      <td className="py-3">Alta, soporta lluvia, viento y sol</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Temperatura de trabajo</td>
                      <td className="py-3">-20°C a 70°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Vida útil estimada</td>
                      <td className="py-3">5-7 años (dependiendo de condiciones climáticas)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Peso</td>
                      <td className="py-3">Aproximadamente 1.2 kg por rollo de 20m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instalacion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Guía de Instalación</h3>
                <p>
                  La instalación de la cinta cubre cerco es un proceso sencillo que puede realizar usted mismo. Siga
                  estos pasos para lograr un resultado profesional:
                </p>
                <h4>Materiales necesarios:</h4>
                <ul>
                  <li>Cinta cubre cerco</li>
                  <li>Tijeras o cutter</li>
                  <li>Guantes de trabajo (opcional)</li>
                  <li>Cinta métrica</li>
                </ul>
                <h4>Pasos para la instalación:</h4>
                <ol>
                  <li>
                    <strong>Preparación:</strong> Mida el perímetro del cerco donde instalará la cinta para calcular la
                    cantidad necesaria.
                  </li>
                  <li>
                    <strong>Inicio de la instalación:</strong> Comience desde una esquina o extremo del cerco. Fije el
                    extremo de la cinta en la parte superior del cerco.
                  </li>
                  <li>
                    <strong>Entrelazado:</strong> Entrelace la cinta a través de los alambres del cerco, siguiendo un
                    patrón de arriba hacia abajo (o en diagonal para un efecto diferente).
                  </li>
                  <li>
                    <strong>Tensión:</strong> Mantenga una tensión uniforme mientras entrelaza la cinta para evitar que
                    quede floja.
                  </li>
                  <li>
                    <strong>Corte:</strong> Al llegar al final de una sección o al terminar el rollo, corte la cinta con
                    tijeras o cutter.
                  </li>
                  <li>
                    <strong>Fijación:</strong> Si es necesario, puede asegurar los extremos con precintos plásticos para
                    mayor seguridad.
                  </li>
                </ol>
                <h4>Consejos adicionales:</h4>
                <ul>
                  <li>Para un mejor resultado, instale la cinta en días no ventosos.</li>
                  <li>Si necesita unir dos rollos, hágalo en la parte posterior del cerco para que no sea visible.</li>
                  <li>
                    Para cercos muy altos, puede ser más fácil trabajar con un ayudante o utilizar una escalera segura.
                  </li>
                  <li>
                    Limpie el cerco antes de la instalación para eliminar polvo o suciedad que pueda afectar la
                    adherencia.
                  </li>
                </ul>
                <p>
                  Si tiene dudas sobre la instalación, no dude en contactar con nuestro equipo técnico para recibir
                  asesoramiento personalizado.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="container py-12 border-t">
          <h2 className="text-2xl font-anton mb-8">PRODUCTOS RELACIONADOS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
