"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Truck, Shield, Star, ArrowLeft, Anchor } from "lucide-react"
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
  { id: "soga", name: "Soga Trenzada" },
  { id: "cadena", name: "Cadena Galvanizada" },
]

const sizeOptions = [
  { id: "pequeno", name: "Pequeño (8-10mm)" },
  { id: "mediano", name: "Mediano (12-15mm)" },
  { id: "grande", name: "Grande (18-20mm)" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/soga-trenzada-1.jpeg")
  const [selectedType, setSelectedType] = useState(typeOptions[0].id)
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 9,
        name: "Sogas y Cadenas",
        image: "/images/products/soga-trenzada-1.jpeg",
        quantity: quantity,
        selectedOptions: {
          Tipo: typeOptions.find((t) => t.id === selectedType)?.name || "",
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

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    // Cambiar la imagen según el tipo seleccionado
    if (type === "soga") {
      setSelectedImage("/images/products/soga-trenzada-1.jpeg")
    } else {
      setSelectedImage("/images/products/cadena-galvanizada-1.jpeg")
    }
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
              { label: "Sogas y Cadenas", href: "/productos/sogas-cadenas", active: true },
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
                  alt="Sogas y Cadenas"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/soga-trenzada-1.jpeg" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/soga-trenzada-1.jpeg")}
                >
                  <Image
                    src="/images/products/soga-trenzada-1.jpeg"
                    alt="Soga Trenzada"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/cadena-nudo-1.jpeg" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/cadena-nudo-1.jpeg")}
                >
                  <Image
                    src="/images/products/cadena-nudo-1.jpeg"
                    alt="Cadena Nudo"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/cadena-galvanizada-1.jpeg" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/cadena-galvanizada-1.jpeg")}
                >
                  <Image
                    src="/images/products/cadena-galvanizada-1.jpeg"
                    alt="Cadena Galvanizada"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">SOGAS Y CADENAS</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.7 (42 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>
                <p className="text-gray-700 mb-6">
                  Ofrecemos una amplia gama de sogas trenzadas y cadenas galvanizadas para múltiples aplicaciones.
                  Nuestras sogas de polipropileno multifilamento son resistentes a la intemperie y a los rayos UV,
                  mientras que nuestras cadenas galvanizadas ofrecen máxima resistencia y durabilidad. Ideales para
                  cercos, sujeción, amarre, seguridad y muchas otras aplicaciones residenciales, comerciales e
                  industriales.
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
                        onClick={() => handleTypeChange(type.id)}
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
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
                      <p className="text-sm text-gray-500">Materiales de alta resistencia y durabilidad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Anchor className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Alta resistencia</p>
                      <p className="text-sm text-gray-500">Soportan cargas pesadas y condiciones exigentes</p>
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
                value="aplicaciones"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6"
              >
                Aplicaciones
              </TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Sogas y Cadenas - Versatilidad y Resistencia para Múltiples Aplicaciones</h3>
                <p>
                  Nuestra línea de sogas y cadenas ofrece soluciones de alta calidad para una amplia variedad de
                  necesidades de sujeción, amarre, seguridad y decoración. Fabricadas con materiales premium y procesos
                  de producción rigurosos, nuestros productos garantizan durabilidad, resistencia y confiabilidad en
                  cada uso.
                </p>

                <h4>Sogas Trenzadas:</h4>
                <p>
                  Nuestras sogas trenzadas de polipropileno multifilamento combinan ligereza, resistencia y durabilidad.
                  El proceso de trenzado proporciona una estructura firme que resiste estiramientos y deformaciones,
                  mientras que el material de polipropileno ofrece excelente resistencia a la intemperie, rayos UV,
                  humedad y productos químicos.
                </p>
                <p>Características principales de nuestras sogas:</p>
                <ul>
                  <li>Fabricadas con polipropileno multifilamento de alta calidad</li>
                  <li>Estructura trenzada que proporciona mayor resistencia y durabilidad</li>
                  <li>Resistentes a la intemperie, rayos UV y humedad</li>
                  <li>No se pudren ni se deterioran con el tiempo</li>
                  <li>Flexibles y fáciles de manipular</li>
                  <li>Disponibles en diferentes diámetros y longitudes</li>
                  <li>Color blanco estándar (otros colores disponibles bajo pedido)</li>
                </ul>

                <h4>Cadenas Galvanizadas:</h4>
                <p>
                  Nuestras cadenas galvanizadas ofrecen máxima resistencia y durabilidad para aplicaciones que requieren
                  alta capacidad de carga y seguridad. El proceso de galvanizado proporciona una capa protectora que
                  previene la corrosión y extiende significativamente la vida útil del producto, incluso en condiciones
                  ambientales adversas.
                </p>
                <p>Características principales de nuestras cadenas:</p>
                <ul>
                  <li>Fabricadas con acero de alta resistencia</li>
                  <li>Galvanizado por inmersión en caliente para máxima protección contra la corrosión</li>
                  <li>Eslabones soldados que garantizan integridad estructural</li>
                  <li>Alta capacidad de carga</li>
                  <li>Resistentes a la intemperie y condiciones ambientales adversas</li>
                  <li>Disponibles en diferentes calibres y longitudes</li>
                  <li>Acabado galvanizado brillante</li>
                </ul>

                <p>
                  Tanto nuestras sogas como cadenas son sometidas a rigurosos controles de calidad para garantizar que
                  cumplan con los estándares más exigentes de resistencia y durabilidad, ofreciéndole productos
                  confiables para sus necesidades específicas.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="especificaciones" className="pt-6">
              <div className="prose max-w-none">
                <h3>Especificaciones Técnicas</h3>

                <h4>Sogas Trenzadas:</h4>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Material</td>
                      <td className="py-3">Polipropileno multifilamento</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Estructura</td>
                      <td className="py-3">Trenzada</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Diámetros disponibles</td>
                      <td className="py-3">8mm, 10mm, 12mm, 15mm, 18mm, 20mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Colores estándar</td>
                      <td className="py-3">Blanco</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la tracción</td>
                      <td className="py-3">Variable según diámetro (consultar ficha técnica específica)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Elongación bajo carga</td>
                      <td className="py-3">15-20%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a rayos UV</td>
                      <td className="py-3">Alta</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la humedad</td>
                      <td className="py-3">Excelente, no absorbe agua</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Densidad</td>
                      <td className="py-3">0.91 g/cm³</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Punto de fusión</td>
                      <td className="py-3">160-170°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Presentación</td>
                      <td className="py-3">Rollos de 100m, 200m o por metro lineal</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="mt-8">Cadenas Galvanizadas:</h4>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Material</td>
                      <td className="py-3">Acero al carbono</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Acabado</td>
                      <td className="py-3">Galvanizado por inmersión en caliente</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Calibres disponibles</td>
                      <td className="py-3">N° 30, N° 40, N° 50, N° 60, N° 70, N° 80</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Diámetros de alambre</td>
                      <td className="py-3">3mm a 8mm (según calibre)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la tracción</td>
                      <td className="py-3">400-700 N/mm² (según calibre)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Capa de zinc</td>
                      <td className="py-3">45-60 micrones</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la corrosión</td>
                      <td className="py-3">Alta, prueba de niebla salina &gt;1000 horas</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Temperatura de trabajo</td>
                      <td className="py-3">-20°C a 300°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Presentación</td>
                      <td className="py-3">Rollos de 25m, 50m o por metro lineal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Conformidad</td>
                      <td className="py-3">Cumple con normas ASTM A906/A906M</td>
                    </tr>
                  </tbody>
                </table>

                <p className="mt-6">
                  <strong>Nota:</strong> Las especificaciones pueden variar ligeramente según el lote de producción.
                  Para aplicaciones críticas o que requieran características específicas, consulte con nuestro
                  departamento técnico para obtener la ficha técnica detallada del producto.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="aplicaciones" className="pt-6">
              <div className="prose max-w-none">
                <h3>Aplicaciones</h3>

                <p>
                  Nuestras sogas y cadenas son productos versátiles que pueden utilizarse en una amplia variedad de
                  aplicaciones. A continuación, presentamos algunas de las aplicaciones más comunes para cada tipo de
                  producto:
                </p>

                <h4>Aplicaciones de Sogas Trenzadas:</h4>
                <ul>
                  <li>
                    <strong>Construcción:</strong> Amarre de materiales, guías de alineación, señalización de áreas.
                  </li>
                  <li>
                    <strong>Agricultura:</strong> Sujeción de cultivos, cercado de áreas, amarre de pacas.
                  </li>
                  <li>
                    <strong>Náutica:</strong> Amarre de embarcaciones, líneas de seguridad, redes.
                  </li>
                  <li>
                    <strong>Transporte:</strong> Sujeción de cargas, aseguramiento de lonas.
                  </li>
                  <li>
                    <strong>Deportes:</strong> Delimitación de áreas deportivas, equipamiento de gimnasios.
                  </li>
                  <li>
                    <strong>Decoración:</strong> Elementos decorativos, barandas, pasamanos.
                  </li>
                  <li>
                    <strong>Camping:</strong> Montaje de carpas, líneas para tender ropa, sujeción de equipamiento.
                  </li>
                  <li>
                    <strong>Jardinería:</strong> Guía para plantas trepadoras, delimitación de áreas.
                  </li>
                </ul>

                <h4>Aplicaciones de Cadenas Galvanizadas:</h4>
                <ul>
                  <li>
                    <strong>Seguridad:</strong> Cerramientos, barreras, protección de maquinaria.
                  </li>
                  <li>
                    <strong>Construcción:</strong> Elevación de materiales, anclajes, tensores.
                  </li>
                  <li>
                    <strong>Cercos:</strong> Cercos perimetrales, puertas de acceso, barreras.
                  </li>
                  <li>
                    <strong>Industrial:</strong> Sistemas de transmisión, sujeción de equipos pesados.
                  </li>
                  <li>
                    <strong>Transporte:</strong> Aseguramiento de cargas pesadas, remolque de vehículos.
                  </li>
                  <li>
                    <strong>Agricultura:</strong> Sujeción de equipos agrícolas, cercos para ganado.
                  </li>
                  <li>
                    <strong>Náutica:</strong> Anclajes, sistemas de amarre para embarcaciones grandes.
                  </li>
                  <li>
                    <strong>Decoración:</strong> Elementos decorativos, lámparas, mobiliario.
                  </li>
                </ul>

                <h4>Recomendaciones de uso:</h4>
                <ul>
                  <li>
                    Para aplicaciones que impliquen cargas pesadas o seguridad crítica, recomendamos el uso de cadenas
                    galvanizadas por su mayor resistencia y durabilidad.
                  </li>
                  <li>
                    Para aplicaciones que requieran flexibilidad, ligereza y resistencia a la intemperie, las sogas
                    trenzadas son la opción ideal.
                  </li>
                  <li>Siempre verifique la capacidad de carga recomendada para cada producto antes de su uso.</li>
                  <li>
                    Inspeccione regularmente el estado de sogas y cadenas, especialmente en aplicaciones de seguridad o
                    que impliquen cargas.
                  </li>
                  <li>
                    Para aplicaciones específicas o condiciones especiales, consulte con nuestro departamento técnico
                    para recibir asesoramiento personalizado.
                  </li>
                </ul>

                <p>
                  Nuestro equipo técnico está disponible para asesorarle en la selección del producto más adecuado para
                  su aplicación específica, garantizando la mejor relación entre funcionalidad, seguridad y durabilidad.
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
