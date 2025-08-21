import Image from "next/image"
import { Shield, Award, Users, History } from "lucide-react"

export function AboutUs() {
  return (
    <section id="sobre-nosotros" className="py-20 md:py-28 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span>Nuestra Empresa</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            LÍDERES EN SOLUCIONES DE SEGURIDAD PERIMETRAL
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Perimetrales las Flores se destaca como una empresa líder en la instalación de cercos perimetrales,
            respaldada por más de una década de experiencia. Nos especializamos en la colocación de cercos y en la venta
            de materiales, contando con una mano de obra altamente calificada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/office.jpeg" alt="Oficina de Perimetrales las Flores" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg inline-block">
                <h3 className="font-anton text-xl text-red-600">PERIMETRALES LAS FLORES</h3>
                <p className="text-gray-700">Av. Armada Argentina 190, Córdoba</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-red-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <History className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-anton text-xl mb-2">NUESTRA HISTORIA</h3>
                <p className="text-gray-600">
                  Con más de una década de experiencia en el mercado, hemos crecido hasta convertirnos en referentes en
                  soluciones de seguridad perimetral, manteniendo siempre nuestro compromiso con la calidad y la
                  satisfacción del cliente.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-red-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-anton text-xl mb-2">NUESTRO COMPROMISO</h3>
                <p className="text-gray-600">
                  Nuestro compromiso es proporcionar seguridad y tranquilidad a nuestros clientes, ofreciendo soluciones
                  personalizadas y de alta calidad para cada proyecto. Trabajamos con los mejores materiales y técnicas
                  de instalación.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-red-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-anton text-xl mb-2">NUESTRO EQUIPO</h3>
                <p className="text-gray-600">
                  Contamos con un equipo de profesionales altamente calificados y con amplia experiencia en el sector.
                  Nuestros instaladores reciben capacitación constante para garantizar los mejores resultados en cada
                  proyecto.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-red-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-anton text-xl mb-2">NUESTRA CALIDAD</h3>
                <p className="text-gray-600">
                  Trabajamos únicamente con materiales de primera calidad y ofrecemos garantía en todos nuestros
                  productos e instalaciones. La satisfacción de nuestros clientes es nuestra mejor carta de
                  presentación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
