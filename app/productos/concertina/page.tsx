"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Truck, Shield, Award, Star, ArrowLeft, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Opciones de producto
const typeOptions = [
  { id: "simple", name: "Simple (1 hoja)" },
  { id: "doble", name: "Doble (2 hojas)" },
  { id: "triple", name: "Triple (3 hojas)" },
]

const diameterOptions = [
  { id: "30cm", name: "30 cm" },
  { id: "45cm", name: "45 cm" },
  { id: "60cm", name: "60 cm" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/concertina-1.png")
  const [selectedType, setSelectedType] = useState(typeOptions[1].id)
  const [selectedDiameter, setSelectedDiameter] = useState(diameterOptions[1].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 2,
        name: "Concertina",
        image: "/images/products/concertina-1.png",
        quantity: quantity,
        selectedOptions: {
          Tipo: typeOptions.find((t) => t.id === selectedType)?.name || "",
          Diámetro: diameterOptions.find((d) => d.id === selectedDiameter)?.name || "",
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
              { label: "Concertina", href: "/productos/concertina", active: true },
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
                  alt="Concertina"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/concertina-1.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/concertina-1.png")}
                >
                  <Image src="/images/products/concertina-1.png" alt="Concertina" fill className="object-contain p-2" />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/concertina-2.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/concertina-2.png")}
                >
                  <Image
                    src="/images/products/concertina-2.png"
                    alt="Concertina instalada"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/concertina-3.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/concertina-3.png")}
                >
                  <Image
                    src="/images/products/concertina-3.png"
                    alt="Concertina detalle"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/concertina-4.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/concertina-4.png")}
                >
                  <Image
                    src="/images/products/concertina-4.png"
                    alt="Concertina instalada en techo"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">CONCERTINA</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.9 (112 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>

                <Alert className="mb-6 bg-amber-50 border-amber-200">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">Precaución</AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Este producto requiere manipulación cuidadosa. Recomendamos su instalación por personal capacitado.
                  </AlertDescription>
                </Alert>

                <p className="text-gray-700 mb-6">
                  La concertina es un alambre de seguridad con cuchillas afiladas diseñado para proporcionar máxima
                  protección perimetral. Fabricada en acero galvanizado de alta resistencia, ofrece una barrera
                  altamente efectiva contra intrusiones en propiedades residenciales, comerciales e industriales.
                </p>

                {/* Type Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Tipo</h3>
                  <div className="grid grid-cols-3 gap-3">
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

                {/* Diameter Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Diámetro</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {diameterOptions.map((diameter) => (
                      <button
                        key={diameter.id}
                        className={`border rounded py-2 px-3 text-sm font-medium transition-colors ${
                          selectedDiameter === diameter.id
                            ? "border-red-600 bg-red-50 text-red-600"
                            : "border-gray-300 hover:border-red-600"
                        }`}
                        onClick={() => setSelectedDiameter(diameter.id)}
                      >
                        {diameter.name}
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
                      <p className="font-medium">Máxima seguridad</p>
                      <p className="text-sm text-gray-500">Protección perimetral de alto nivel</p>
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
                <h3>Concertina - Máxima Seguridad Perimetral</h3>
                <p>
                  La concertina es un sistema de seguridad perimetral de alta eficacia, diseñado para prevenir
                  intrusiones no autorizadas en todo tipo de propiedades. Fabricada con acero galvanizado de alta
                  resistencia, la concertina cuenta con cuchillas afiladas que actúan como un poderoso elemento
                  disuasorio visual y físico.
                </p>
                <p>
                  Nuestras concertinas están disponibles en diferentes configuraciones para adaptarse a sus necesidades
                  específicas de seguridad. La versión de hoja simple ofrece una protección básica, mientras que las
                  versiones de doble y triple hoja proporcionan niveles adicionales de seguridad para entornos que
                  requieren máxima protección.
                </p>
                <h4>Características principales:</h4>
                <ul>
                  <li>Fabricada en acero galvanizado de alta resistencia a la corrosión</li>
                  <li>Cuchillas afiladas con bordes dentados para máxima disuasión</li>
                  <li>Disponible en diferentes diámetros: 30cm, 45cm y 60cm</li>
                  <li>Opciones de hoja simple, doble o triple según nivel de seguridad requerido</li>
                  <li>Fácil instalación en muros, cercos y techos</li>
                  <li>Resistente a condiciones climáticas adversas</li>
                  <li>Larga vida útil con mínimo mantenimiento</li>
                </ul>
                <p>
                  Ideal para la protección de viviendas, comercios, industrias, almacenes, centros de datos,
                  instalaciones gubernamentales y cualquier propiedad que requiera un alto nivel de seguridad
                  perimetral.
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
                      <td className="py-3">Acero galvanizado de alta resistencia</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Diámetros disponibles</td>
                      <td className="py-3">30cm, 45cm, 60cm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Tipos</td>
                      <td className="py-3">Simple (1 hoja), Doble (2 hojas), Triple (3 hojas)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Longitud por rollo</td>
                      <td className="py-3">10 metros estándar (consultar otras medidas)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la corrosión</td>
                      <td className="py-3">Alta, tratamiento galvanizado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la intemperie</td>
                      <td className="py-3">Alta, soporta lluvia, viento y sol</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Temperatura de trabajo</td>
                      <td className="py-3">-30°C a 70°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Vida útil estimada</td>
                      <td className="py-3">10-15 años (dependiendo de condiciones climáticas)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Peso aproximado</td>
                      <td className="py-3">8-12 kg por rollo (según tipo y diámetro)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Certificaciones</td>
                      <td className="py-3">Cumple con normas de seguridad industrial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instalacion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Guía de Instalación</h3>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-amber-800 font-medium">Advertencia de seguridad</p>
                  <p className="text-amber-700">
                    La instalación de concertina debe realizarse con extrema precaución. Recomendamos encarecidamente
                    contratar personal especializado para su instalación. Si decide instalarla por su cuenta, utilice
                    siempre guantes de protección resistentes a cortes, gafas de seguridad y ropa protectora adecuada.
                  </p>
                </div>
                <h4>Materiales necesarios:</h4>
                <ul>
                  <li>Concertina del tipo y diámetro seleccionado</li>
                  <li>Guantes de protección resistentes a cortes</li>
                  <li>Gafas de seguridad</li>
                  <li>Alicates y tenazas</li>
                  <li>Alambre galvanizado para fijación</li>
                  <li>Tensores (si es necesario)</li>
                  <li>Soportes para montaje (según superficie)</li>
                  <li>Taladro y brocas (para instalación en muros)</li>
                </ul>
                <h4>Pasos para la instalación:</h4>
                <ol>
                  <li>
                    <strong>Planificación:</strong> Determine el perímetro exacto donde instalará la concertina y
                    asegúrese de contar con los permisos necesarios.
                  </li>
                  <li>
                    <strong>Preparación de la superficie:</strong> Asegúrese de que la superficie (muro, cerco, etc.)
                    esté en buenas condiciones y pueda soportar el peso de la concertina.
                  </li>
                  <li>
                    <strong>Instalación de soportes:</strong> Si es necesario, instale soportes metálicos a intervalos
                    regulares (aproximadamente cada 2-3 metros).
                  </li>
                  <li>
                    <strong>Despliegue de la concertina:</strong> Con extremo cuidado, comience a desplegar la
                    concertina a lo largo del perímetro. Es recomendable que esta tarea la realicen al menos dos
                    personas.
                  </li>
                  <li>
                    <strong>Fijación:</strong> Asegure la concertina a los soportes o a la superficie utilizando alambre
                    galvanizado. Asegúrese de que quede firmemente sujeta.
                  </li>
                  <li>
                    <strong>Tensado:</strong> Si es necesario, utilice tensores para mantener la concertina
                    correctamente extendida.
                  </li>
                  <li>
                    <strong>Verificación:</strong> Una vez instalada, verifique que toda la concertina esté
                    correctamente asegurada y que no haya secciones sueltas.
                  </li>
                </ol>
                <h4>Recomendaciones adicionales:</h4>
                <ul>
                  <li>
                    Coloque señalización de advertencia visible indicando la presencia de concertina para prevenir
                    accidentes.
                  </li>
                  <li>
                    Realice inspecciones periódicas para verificar el estado de la concertina y realizar mantenimiento
                    si es necesario.
                  </li>
                  <li>
                    En zonas con alta exposición a ambientes salinos o contaminantes, considere aplicar un tratamiento
                    anticorrosivo adicional.
                  </li>
                </ul>
                <p>
                  Para una instalación profesional y segura, recomendamos contratar nuestro servicio de instalación.
                  Contamos con personal capacitado y con experiencia en la manipulación e instalación de sistemas de
                  seguridad perimetral.
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
