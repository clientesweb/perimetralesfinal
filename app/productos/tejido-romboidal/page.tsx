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
  { id: "50x50", name: "50x50 mm" },
  { id: "60x60", name: "60x60 mm" },
  { id: "75x75", name: "75x75 mm" },
]

const heightOptions = [
  { id: "1m", name: "1 metro" },
  { id: "1.5m", name: "1.5 metros" },
  { id: "2m", name: "2 metros" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/tejido-romboidal-1.png")
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1].id)
  const [selectedHeight, setSelectedHeight] = useState(heightOptions[1].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 5,
        name: "Tejido Romboidal",
        image: "/images/products/tejido-romboidal-1.png",
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
              { label: "Tejido Romboidal", href: "/productos/tejido-romboidal", active: true },
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
                  alt="Tejido Romboidal"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tejido-romboidal-1.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tejido-romboidal-1.png")}
                >
                  <Image
                    src="/images/products/tejido-romboidal-1.png"
                    alt="Tejido Romboidal"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tejido-romboidal-2.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tejido-romboidal-2.png")}
                >
                  <Image
                    src="/images/products/tejido-romboidal-2.png"
                    alt="Tejido Romboidal instalado"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tejido-romboidal-3.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tejido-romboidal-3.png")}
                >
                  <Image
                    src="/images/products/tejido-romboidal-3.png"
                    alt="Tejido Romboidal detalle"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">TEJIDO ROMBOIDAL</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.6 (93 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>
                <p className="text-gray-700 mb-6">
                  El tejido romboidal, también conocido como malla ciclónica o alambrado romboidal, es una solución
                  versátil y económica para cercos perimetrales. Fabricado con alambre de acero galvanizado, ofrece
                  excelente resistencia a la intemperie y durabilidad. Ideal para delimitar propiedades residenciales,
                  comerciales, industriales, campos deportivos y áreas agrícolas.
                </p>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Tamaño de rombo</h3>
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

                {/* Height Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Altura</h3>
                  <div className="grid grid-cols-3 gap-3">
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
                <h3>Tejido Romboidal - Solución Versátil para Cercos Perimetrales</h3>
                <p>
                  El tejido romboidal, también conocido como malla ciclónica o alambrado romboidal, es una de las
                  soluciones más populares y versátiles para cercos perimetrales. Su diseño característico en forma de
                  rombos o diamantes proporciona una excelente combinación de visibilidad, seguridad y economía.
                </p>
                <p>
                  Fabricado con alambre de acero galvanizado mediante un proceso de entrelazado y torsión, este tejido
                  ofrece una estructura resistente y duradera. El galvanizado proporciona una capa protectora que
                  previene la corrosión y extiende significativamente la vida útil del producto, incluso en condiciones
                  climáticas adversas.
                </p>
                <h4>Características principales:</h4>
                <ul>
                  <li>Fabricado con alambre de acero galvanizado para máxima resistencia a la corrosión</li>
                  <li>Diseño romboidal que proporciona estabilidad y resistencia</li>
                  <li>Disponible en diferentes tamaños de rombo: 50x50 mm, 60x60 mm y 75x75 mm</li>
                  <li>Alturas disponibles: 1 metro, 1.5 metros y 2 metros</li>
                  <li>Fácil instalación en postes metálicos o de madera</li>
                  <li>Permite la visibilidad a través del cerco mientras mantiene la seguridad</li>
                  <li>Económico y de bajo mantenimiento</li>
                  <li>Adaptable a terrenos irregulares</li>
                </ul>
                <p>
                  Ideal para delimitar propiedades residenciales, comerciales, industriales, campos deportivos, parques,
                  jardines, áreas agrícolas y cualquier espacio que requiera un cercado efectivo y económico.
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
                      <td className="py-3 font-medium">Proceso de fabricación</td>
                      <td className="py-3">Entrelazado y torsión</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Tamaños de rombo</td>
                      <td className="py-3">50x50 mm, 60x60 mm, 75x75 mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Alturas disponibles</td>
                      <td className="py-3">1 metro, 1.5 metros, 2 metros</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Longitud del rollo</td>
                      <td className="py-3">10 metros, 20 metros (consultar otras medidas)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Calibre del alambre</td>
                      <td className="py-3">Calibre 12, 14 y 16 (según modelo)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la tracción</td>
                      <td className="py-3">350-450 N/mm²</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la corrosión</td>
                      <td className="py-3">Alta, tratamiento galvanizado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Vida útil estimada</td>
                      <td className="py-3">10-15 años (dependiendo de condiciones ambientales)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Peso aproximado</td>
                      <td className="py-3">1.2-2.5 kg/m² (según modelo)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instalacion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Guía de Instalación</h3>
                <p>
                  La instalación del tejido romboidal es relativamente sencilla, pero requiere una planificación
                  adecuada y algunas herramientas básicas. Siga estos pasos para lograr una instalación correcta y
                  duradera:
                </p>
                <h4>Materiales necesarios:</h4>
                <ul>
                  <li>Tejido romboidal</li>
                  <li>Postes metálicos o de madera</li>
                  <li>Alambre tensor galvanizado</li>
                  <li>Tensores</li>
                  <li>Alicates y tenazas</li>
                  <li>Nivel y cinta métrica</li>
                  <li>Hormigón para fijar los postes</li>
                  <li>Guantes de trabajo</li>
                </ul>
                <h4>Pasos para la instalación:</h4>
                <ol>
                  <li>
                    <strong>Planificación:</strong> Mida el perímetro donde instalará el tejido y determine la cantidad
                    de material necesario. Marque la ubicación de los postes, que generalmente se colocan a una
                    distancia de 2-3 metros entre sí.
                  </li>
                  <li>
                    <strong>Instalación de postes:</strong> Cave hoyos para los postes (aproximadamente 40-50 cm de
                    profundidad). Coloque los postes y asegúrese de que estén nivelados verticalmente. Fíjelos con
                    hormigón y deje secar completamente.
                  </li>
                  <li>
                    <strong>Instalación de alambre tensor:</strong> Coloque alambre tensor en la parte superior, media e
                    inferior del cerco. Este alambre proporcionará soporte adicional al tejido romboidal.
                  </li>
                  <li>
                    <strong>Desenrollado del tejido:</strong> Desenrolle el tejido romboidal a lo largo del perímetro.
                    Es recomendable que esta tarea la realicen al menos dos personas para evitar que el tejido se
                    deforme.
                  </li>
                  <li>
                    <strong>Fijación del tejido:</strong> Comience a fijar el tejido a los postes y al alambre tensor
                    utilizando alambre galvanizado. Asegure primero las esquinas y luego proceda a lo largo de cada
                    poste, manteniendo el tejido tenso.
                  </li>
                  <li>
                    <strong>Tensado:</strong> Utilice tensores para asegurar que el tejido quede correctamente tensado.
                    Un tejido bien tensado proporcionará mayor resistencia y durabilidad.
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
                <h4>Recomendaciones adicionales:</h4>
                <ul>
                  <li>
                    Para terrenos irregulares, puede ser necesario adaptar la altura de los postes para mantener el
                    tejido nivelado en la parte superior.
                  </li>
                  <li>
                    En zonas con fuertes vientos, considere utilizar postes más robustos y reducir la distancia entre
                    ellos.
                  </li>
                  <li>
                    Para mayor seguridad, puede instalar el tejido enterrando unos 5-10 cm en el suelo para evitar que
                    animales o intrusos puedan pasar por debajo.
                  </li>
                  <li>
                    Realice inspecciones periódicas para verificar la tensión del tejido y el estado de los postes,
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
