"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Truck, Shield, Star, ArrowLeft, Bug } from "lucide-react"
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
  { id: "1x1", name: "1x1 mm" },
  { id: "1.5x1.5", name: "1.5x1.5 mm" },
  { id: "2x2", name: "2x2 mm" },
]

const colorOptions = [
  { id: "gris", name: "Gris" },
  { id: "negro", name: "Negro" },
]

export default function ProductPage() {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState("/images/products/tela-mosquitera-1.png")
  const [selectedSize, setSelectedSize] = useState(sizeOptions[2].id)
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].id)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: 7,
        name: "Tela Mosquitera",
        image: "/images/products/tela-mosquitera-1.png",
        quantity: quantity,
        selectedOptions: {
          Tamaño: sizeOptions.find((s) => s.id === selectedSize)?.name || "",
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
              { label: "Tela Mosquitera", href: "/productos/tela-mosquitera", active: true },
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
                  alt="Tela Mosquitera"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tela-mosquitera-1.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tela-mosquitera-1.png")}
                >
                  <Image
                    src="/images/products/tela-mosquitera-1.png"
                    alt="Tela Mosquitera"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tela-mosquitera-2.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tela-mosquitera-2.png")}
                >
                  <Image
                    src="/images/products/tela-mosquitera-2.png"
                    alt="Tela Mosquitera detalle"
                    fill
                    className="object-contain p-2"
                  />
                </button>
                <button
                  className={`aspect-square relative border rounded-lg overflow-hidden ${selectedImage === "/images/products/tela-mosquitera-3.png" ? "border-red-600" : "border-gray-200"}`}
                  onClick={() => setSelectedImage("/images/products/tela-mosquitera-3.png")}
                >
                  <Image
                    src="/images/products/tela-mosquitera-3.png"
                    alt="Tela Mosquitera uso"
                    fill
                    className="object-contain p-2"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-anton tracking-tight mb-2">TELA MOSQUITERA</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">4.8 (105 reseñas)</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-red-600">Consultar precio</p>
                  <p className="text-xs text-gray-500 mt-1">Solicite una cotización para obtener el mejor precio</p>
                </div>
                <p className="text-gray-700 mb-6">
                  La tela mosquitera es una malla fina diseñada para proteger su hogar contra insectos mientras permite
                  el paso del aire y la luz. Fabricada con fibra de vidrio recubierta de PVC, ofrece excelente
                  durabilidad y resistencia a la intemperie. Ideal para ventanas, puertas, patios y cualquier área donde
                  desee mantener los insectos alejados sin sacrificar la ventilación.
                </p>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Tamaño de malla</h3>
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
                      <p className="text-sm text-gray-500">Fibra de vidrio recubierta de PVC de alta resistencia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bug className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Protección efectiva</p>
                      <p className="text-sm text-gray-500">Barrera contra mosquitos y otros insectos</p>
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
                <h3>Tela Mosquitera - Protección Efectiva Contra Insectos</h3>
                <p>
                  La tela mosquitera es una solución práctica y efectiva para proteger su hogar contra mosquitos y otros
                  insectos mientras permite la libre circulación del aire y el paso de la luz natural. Fabricada con
                  fibra de vidrio recubierta de PVC, ofrece una combinación ideal de durabilidad, resistencia y
                  ligereza.
                </p>
                <p>
                  Nuestra tela mosquitera está diseñada para resistir las condiciones climáticas adversas, incluyendo la
                  exposición a los rayos UV, la lluvia y los cambios de temperatura. El recubrimiento de PVC proporciona
                  protección adicional contra la corrosión y el deterioro, garantizando una larga vida útil incluso en
                  uso continuo.
                </p>
                <h4>Características principales:</h4>
                <ul>
                  <li>Fabricada con fibra de vidrio recubierta de PVC para máxima durabilidad</li>
                  <li>Disponible en diferentes tamaños de malla: 1x1 mm, 1.5x1.5 mm y 2x2 mm</li>
                  <li>Colores disponibles: gris y negro</li>
                  <li>Resistente a los rayos UV y a la intemperie</li>
                  <li>Permite el paso del aire y la luz mientras bloquea insectos</li>
                  <li>Fácil de cortar e instalar</li>
                  <li>Ligera pero resistente</li>
                  <li>No se oxida ni se deteriora con el tiempo</li>
                </ul>
                <h4>Aplicaciones:</h4>
                <ul>
                  <li>Protección para ventanas y puertas</li>
                  <li>Mosquiteros para camas y cunas</li>
                  <li>Cerramientos para patios y terrazas</li>
                  <li>Protección para alimentos</li>
                  <li>Ventilación en áreas de almacenamiento</li>
                  <li>Filtración de aire en sistemas de ventilación</li>
                  <li>Protección para invernaderos</li>
                </ul>
                <p>
                  La tela mosquitera es una inversión en confort y salud para su hogar, proporcionando una barrera
                  efectiva contra insectos que pueden transmitir enfermedades, mientras mantiene sus espacios frescos y
                  bien ventilados.
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
                      <td className="py-3">Fibra de vidrio recubierta de PVC</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Tamaños de malla disponibles</td>
                      <td className="py-3">1x1 mm, 1.5x1.5 mm, 2x2 mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Colores disponibles</td>
                      <td className="py-3">Gris, Negro</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Ancho del rollo</td>
                      <td className="py-3">1 metro, 1.2 metros, 1.5 metros</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Longitud del rollo</td>
                      <td className="py-3">5 metros, 10 metros, 30 metros (según modelo)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Peso</td>
                      <td className="py-3">80-120 g/m² (según modelo)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la tracción</td>
                      <td className="py-3">Alta</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a los rayos UV</td>
                      <td className="py-3">Excelente, no se decolora</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Resistencia a la intemperie</td>
                      <td className="py-3">Alta, soporta lluvia y cambios de temperatura</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Vida útil estimada</td>
                      <td className="py-3">5-7 años en uso continuo en exteriores</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Inflamabilidad</td>
                      <td className="py-3">Retardante de llama</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Mantenimiento</td>
                      <td className="py-3">Lavable con agua y jabón neutro</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="instalacion" className="pt-6">
              <div className="prose max-w-none">
                <h3>Guía de Instalación</h3>
                <p>
                  La instalación de la tela mosquitera es un proceso relativamente sencillo que puede realizar usted
                  mismo. A continuación, presentamos una guía general para diferentes tipos de aplicaciones:
                </p>
                <h4>Materiales necesarios:</h4>
                <ul>
                  <li>Tela mosquitera</li>
                  <li>Tijeras o cutter</li>
                  <li>Cinta métrica</li>
                  <li>Grapadora (para marcos de madera)</li>
                  <li>Cinta adhesiva de doble cara o imanes (para instalación sin marco)</li>
                  <li>Perfil de aluminio o marco de madera (opcional)</li>
                  <li>Tornillos pequeños (si se usa perfil de aluminio)</li>
                  <li>Destornillador</li>
                </ul>
                <h4>Instalación en ventanas con marco:</h4>
                <ol>
                  <li>
                    <strong>Medición:</strong> Mida cuidadosamente las dimensiones de la ventana. Añada 2-3 cm extra en
                    cada lado para permitir la fijación.
                  </li>
                  <li>
                    <strong>Corte:</strong> Corte la tela mosquitera según las medidas tomadas, utilizando tijeras o un
                    cutter afilado. Asegúrese de cortar en línea recta para un acabado profesional.
                  </li>
                  <li>
                    <strong>Preparación del marco:</strong> Si está utilizando un marco existente, límpielo para
                    asegurar una buena adhesión. Si está creando un nuevo marco, ensámblelo según las dimensiones de la
                    ventana.
                  </li>
                  <li>
                    <strong>Fijación:</strong> Extienda la tela sobre el marco, asegurándose de que quede tensa y sin
                    arrugas. Comience a fijarla desde el centro de un lado y continúe hacia las esquinas.
                    <ul>
                      <li>
                        <strong>Para marcos de madera:</strong> Utilice una grapadora para fijar la tela, colocando
                        grapas cada 5-7 cm.
                      </li>
                      <li>
                        <strong>Para perfiles de aluminio:</strong> Inserte la tela en el canal del perfil y asegúrela
                        con la goma o el listón que viene con el perfil.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Recorte del exceso:</strong> Una vez fijada la tela en todo el perímetro, recorte el exceso
                    de material dejando un pequeño margen.
                  </li>
                  <li>
                    <strong>Instalación del marco:</strong> Coloque el marco con la tela en la ventana, utilizando los
                    mecanismos de fijación apropiados (tornillos, imanes, velcro, etc.).
                  </li>
                </ol>
                <h4>Instalación sin marco (adhesiva):</h4>
                <ol>
                  <li>
                    <strong>Medición y corte:</strong> Mida la ventana y corte la tela añadiendo 3-4 cm extra en cada
                    lado.
                  </li>
                  <li>
                    <strong>Limpieza:</strong> Limpie bien el marco de la ventana para asegurar una buena adhesión.
                  </li>
                  <li>
                    <strong>Aplicación de cinta adhesiva:</strong> Coloque cinta adhesiva de doble cara en el perímetro
                    del marco de la ventana.
                  </li>
                  <li>
                    <strong>Fijación de la tela:</strong> Retire el protector de la cinta adhesiva y coloque la tela
                    mosquitera, asegurándose de que quede tensa y sin arrugas. Presione firmemente sobre la cinta para
                    asegurar una buena adhesión.
                  </li>
                  <li>
                    <strong>Recorte del exceso:</strong> Recorte el exceso de tela con tijeras o un cutter.
                  </li>
                </ol>
                <h4>Consejos adicionales:</h4>
                <ul>
                  <li>
                    Para ventanas que se abren, considere crear un marco removible que pueda quitarse fácilmente cuando
                    sea necesario.
                  </li>
                  <li>
                    Los imanes son una excelente opción para fijar mosquiteros removibles, especialmente en marcos
                    metálicos.
                  </li>
                  <li>
                    Para puertas, considere utilizar bisagras y un cierre magnético para crear un mosquitero que se abra
                    y cierre fácilmente.
                  </li>
                  <li>
                    En áreas con mucho viento, refuerce la instalación con puntos de fijación adicionales para evitar
                    que la tela se suelte.
                  </li>
                  <li>
                    Limpie periódicamente la tela mosquitera con agua y jabón suave para mantenerla en buen estado y
                    prolongar su vida útil.
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
