"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Award, Star, ArrowLeft, LifeBuoy, Check } from "lucide-react"
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
  { id: "malla", name: "Malla Metálica" },
  { id: "vidrio", name: "Vidrio Templado" },
  { id: "madera", name: "Madera Tratada" },
]

const heightOptions = [
  { id: "1.1m", name: "1.1 metros (estándar)" },
  { id: "1.2m", name: "1.2 metros" },
  { id: "1.3m", name: "1.3 metros" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/cerco-pileta-1.jpeg")
  const [selectedType, setSelectedType] = useState(typeOptions[0].id)
  const [selectedHeight, setSelectedHeight] = useState(heightOptions[0].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 10,
        name: "Cercos para Piletas",
        image: "/images/products/cerco-pileta-1.jpeg",
        quantity: quantity,
        selectedOptions: {
          Tipo: typeOptions.find((t) => t.id === selectedType)?.name || "",
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
              { label: "Cercos para Piletas", href: "/productos/cercos-piletas", active: true },
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
                  alt="Cercos para Piletas"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/cerco-pileta-1.jpeg" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/cerco-pileta-1.jpeg")}
                >
                  <Image
                    src="/images/products/cerco-pileta-1.jpeg"
                    alt="Cerco para Pileta"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">CERCOS PARA PILETAS</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.9 (76 reseñas)</span>
                </div>

                <Alert className="mb-6 bg-blue-50 border-blue-200">
                  <LifeBuoy className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="text-blue-800">Seguridad certificada</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    Nuestros cercos para piletas cumplen con todas las normativas de seguridad vigentes para la
                    protección de niños y mascotas.
                  </AlertDescription>
                </Alert>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>

                <p className="text-gray-700 mb-6">
                  Los cercos para piletas son sistemas de seguridad diseñados específicamente para prevenir accidentes y
                  ahogamientos, especialmente de niños y mascotas. Fabricados con materiales de alta calidad y
                  resistentes a la intemperie, nuestros cercos cumplen con todas las normativas de seguridad vigentes,
                  proporcionando tranquilidad y protección sin sacrificar la estética de su espacio.
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
                    <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Seguridad certificada</p>
                      <p className="text-sm text-gray-500">Cumple con normativas de seguridad para piletas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Instalación profesional</p>
                      <p className="text-sm text-gray-500">Servicio de instalación por técnicos especializados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Materiales de calidad</p>
                      <p className="text-sm text-gray-500">Resistentes a la intemperie y de larga duración</p>
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
                value="normativas"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6"
              >
                Normativas de Seguridad
              </TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Cercos para Piletas - Seguridad y Tranquilidad para su Familia</h3>
                <p>
                  Los cercos para piletas son sistemas de seguridad esenciales diseñados para prevenir accidentes y
                  ahogamientos, especialmente de niños pequeños y mascotas. Nuestros sistemas de cercos combinan
                  seguridad, durabilidad y estética, proporcionando una barrera efectiva sin comprometer la apariencia
                  de su espacio exterior.
                </p>

                <p>
                  Ofrecemos diferentes opciones de cercos para adaptarse a sus necesidades específicas y preferencias
                  estéticas:
                </p>

                <h4>Cercos de Malla Metálica:</h4>
                <p>
                  Nuestros cercos de malla metálica son la opción más popular por su excelente relación entre seguridad,
                  durabilidad y costo. Fabricados con malla de acero galvanizado o aluminio, estos cercos son
                  resistentes a la intemperie y ofrecen una barrera efectiva mientras mantienen la visibilidad de la
                  pileta.
                </p>
                <ul>
                  <li>Estructura liviana pero resistente</li>
                  <li>Postes de aluminio o acero galvanizado</li>
                  <li>Malla resistente a la corrosión</li>
                  <li>Fácil instalación y desmontaje (en modelos removibles)</li>
                  <li>Disponible en varios colores para integrarse con su entorno</li>
                </ul>

                <h4>Cercos de Vidrio Templado:</h4>
                <p>
                  Para quienes buscan una opción más elegante y moderna, nuestros cercos de vidrio templado ofrecen
                  máxima transparencia y un aspecto sofisticado. El vidrio templado de seguridad garantiza resistencia y
                  durabilidad, mientras que su diseño minimalista permite una vista sin obstáculos de la pileta.
                </p>
                <ul>
                  <li>Vidrio templado de seguridad de 8-12mm de espesor</li>
                  <li>Bordes pulidos para evitar lesiones</li>
                  <li>Herrajes de acero inoxidable de alta calidad</li>
                  <li>Resistente a impactos y condiciones climáticas</li>
                  <li>Diseño elegante y contemporáneo</li>
                </ul>

                <h4>Cercos de Madera Tratada:</h4>
                <p>
                  Nuestros cercos de madera tratada combinan seguridad con un aspecto natural y cálido. Fabricados con
                  maderas seleccionadas y tratadas para resistir la intemperie, estos cercos se integran perfectamente
                  en entornos naturales y jardines.
                </p>
                <ul>
                  <li>Madera tratada con protección contra humedad, hongos e insectos</li>
                  <li>Diseños personalizables según sus preferencias</li>
                  <li>Combinación de madera con malla o vidrio para mayor seguridad</li>
                  <li>Acabados disponibles en diferentes tonos</li>
                  <li>Aspecto natural que se integra con el paisaje</li>
                </ul>

                <p>
                  Todos nuestros cercos para piletas cumplen con las normativas de seguridad vigentes y son instalados
                  por profesionales capacitados, garantizando un funcionamiento óptimo y la máxima protección para su
                  familia.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="especificaciones" className="pt-6">
              <div className="prose max-w-none">
                <h3>Especificaciones Técnicas</h3>

                <h4>Cercos de Malla Metálica:</h4>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Material de la malla</td>
                      <td className="py-3">Acero galvanizado o aluminio</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Material de los postes</td>
                      <td className="py-3">Aluminio anodizado o acero galvanizado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Alturas disponibles</td>
                      <td className="py-3">1.1m, 1.2m, 1.3m (según normativa local)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Distancia entre postes</td>
                      <td className="py-3">2-3 metros (según modelo)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Sistema de cierre</td>
                      <td className="py-3">Autocierre con bloqueo de seguridad para niños</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia al viento</td>
                      <td className="py-3">Hasta 120 km/h</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Colores disponibles</td>
                      <td className="py-3">Negro, blanco, verde, marrón</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Tipo de instalación</td>
                      <td className="py-3">Fija o removible</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="mt-8">Cercos de Vidrio Templado:</h4>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Material</td>
                      <td className="py-3">Vidrio templado de seguridad</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Espesor del vidrio</td>
                      <td className="py-3">8mm, 10mm, 12mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Alturas disponibles</td>
                      <td className="py-3">1.1m, 1.2m, 1.3m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Herrajes</td>
                      <td className="py-3">Acero inoxidable 316 (grado marino)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Sistema de cierre</td>
                      <td className="py-3">Magnético con bloqueo de seguridad</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Tratamiento del vidrio</td>
                      <td className="py-3">Bordes pulidos, esquinas redondeadas</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Opciones de vidrio</td>
                      <td className="py-3">Transparente, esmerilado, con diseños</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="mt-8">Cercos de Madera Tratada:</h4>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Material</td>
                      <td className="py-3">Madera de pino tratada o madera dura</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Tratamiento</td>
                      <td className="py-3">Impregnación en autoclave (CCA o ACQ)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Alturas disponibles</td>
                      <td className="py-3">1.1m, 1.2m, 1.3m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Distancia entre postes</td>
                      <td className="py-3">1.5-2 metros</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Sistema de cierre</td>
                      <td className="py-3">Autocierre con bloqueo de seguridad</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Acabados disponibles</td>
                      <td className="py-3">Natural, barnizado, pintado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la intemperie</td>
                      <td className="py-3">Alta, tratamiento especial para exteriores</td>
                    </tr>
                  </tbody>
                </table>

                <p className="mt-6">
                  <strong>Nota:</strong> Todas las especificaciones pueden adaptarse según los requerimientos
                  específicos de cada proyecto y las normativas locales vigentes. Consulte con nuestro equipo técnico
                  para obtener asesoramiento personalizado.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="normativas" className="pt-6">
              <div className="prose max-w-none">
                <h3>Normativas de Seguridad</h3>

                <p>
                  Los cercos para piletas son elementos de seguridad críticos que deben cumplir con estrictas normativas
                  para garantizar su efectividad en la prevención de accidentes. Todos nuestros productos cumplen o
                  superan las siguientes normativas y recomendaciones:
                </p>

                <h4>Normativas Nacionales:</h4>
                <ul>
                  <li>
                    <strong>Ordenanza Municipal:</strong> Cumplimos con las ordenanzas municipales específicas de cada
                    localidad que regulan la instalación de cercos perimetrales para piletas.
                  </li>
                  <li>
                    <strong>Normas IRAM:</strong> Nuestros productos se ajustan a las normas del Instituto Argentino de
                    Normalización y Certificación aplicables a sistemas de seguridad para piletas.
                  </li>
                </ul>

                <h4>Normativas Internacionales de Referencia:</h4>
                <ul>
                  <li>
                    <strong>ASTM F2286:</strong> Estándar de seguridad para cercos de piletas residenciales.
                  </li>
                  <li>
                    <strong>AS 1926.1:</strong> Estándar australiano para cercos de seguridad para piletas.
                  </li>
                  <li>
                    <strong>NF P90-306:</strong> Norma francesa para barreras de protección de piletas.
                  </li>
                </ul>

                <h4>Requisitos Generales de Seguridad:</h4>
                <p>
                  Independientemente de las variaciones en las normativas locales, todos nuestros cercos para piletas
                  cumplen con los siguientes requisitos básicos de seguridad:
                </p>

                <ul>
                  <li>
                    <strong>Altura mínima:</strong> 1.1 metros desde el nivel del suelo hasta la parte superior del
                    cerco.
                  </li>
                  <li>
                    <strong>Espacios:</strong> No deben existir aberturas que permitan el paso de una esfera de 10 cm de
                    diámetro en ninguna parte del cerco.
                  </li>
                  <li>
                    <strong>Resistencia:</strong> El cerco debe soportar una fuerza horizontal de al menos 30 kg
                    aplicada en cualquier punto.
                  </li>
                  <li>
                    <strong>Puertas y accesos:</strong> Deben abrir hacia afuera de la pileta, contar con sistema de
                    autocierre y mecanismo de bloqueo automático fuera del alcance de los niños (mínimo 1.5 metros del
                    suelo).
                  </li>
                  <li>
                    <strong>Zona de seguridad:</strong> No debe haber elementos cercanos al cerco que permitan a un niño
                    escalar (mínimo 1 metro de distancia).
                  </li>
                  <li>
                    <strong>Materiales:</strong> Todos los materiales deben ser resistentes a la intemperie, corrosión y
                    deterioro por exposición a productos químicos de piletas.
                  </li>
                </ul>

                <h4>Certificaciones y Garantías:</h4>
                <p>Además de cumplir con las normativas vigentes, ofrecemos:</p>
                <ul>
                  <li>Certificado de conformidad con las normativas aplicables</li>
                  <li>Garantía de fabricación e instalación</li>
                  <li>Manual de uso y mantenimiento</li>
                  <li>Servicio de inspección y mantenimiento periódico</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <p className="text-blue-800 font-medium">
                    Importante: Recuerde que un cerco de seguridad es una medida de protección complementaria y no
                    sustituye la supervisión adulta. La vigilancia constante sigue siendo la medida más efectiva para
                    prevenir accidentes en piletas.
                  </p>
                </div>

                <p className="mt-6">
                  Nuestro equipo técnico está disponible para asesorarle sobre las normativas específicas aplicables en
                  su localidad y garantizar que su instalación cumpla con todos los requisitos legales y de seguridad.
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
