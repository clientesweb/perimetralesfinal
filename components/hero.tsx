import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo del hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <Image
          src="/images/hero.jpeg"
          alt="Cercos perimetrales de alta calidad"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Contenido del hero */}
      <div className="container relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36 xl:pt-40 xl:pb-44 text-white">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 bg-red-600/90 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" aria-hidden="true" />
            <span>Más de 10 años de experiencia</span>
          </div>

          <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6 leading-tight">
            LÍDERES EN SOLUCIONES <br className="hidden md:block" />
            DE SEGURIDAD PERIMETRAL
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            Proteja su propiedad con soluciones de seguridad perimetral de primera calidad. Ofrecemos diseños
            personalizados, materiales duraderos e instalación profesional para hogares, empresas e industrias en toda
            Córdoba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 h-12 font-medium"
              asChild
            >
              <a href="#productos">
                Ver Productos
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 h-12 font-medium backdrop-blur-sm"
              asChild
            >
              <a href="#contacto">Contáctenos</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-600/20 p-2 rounded-full backdrop-blur-sm">
                <Shield className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-medium text-white">Máxima Seguridad</h3>
                <p className="text-sm text-white">Soluciones confiables</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-red-600/20 p-2 rounded-full backdrop-blur-sm">
                <Award className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-medium text-white">Calidad Garantizada</h3>
                <p className="text-sm text-white">Materiales premium</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-red-600/20 p-2 rounded-full backdrop-blur-sm">
                <Clock className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-medium text-white">Instalación Rápida</h3>
                <p className="text-sm text-white">Servicio eficiente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}
