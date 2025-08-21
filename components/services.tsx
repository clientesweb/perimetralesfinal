"use client"

import { Shield, Package, PenToolIcon as Tool, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "Instalación de Cercos",
      description: "Instalamos todo tipo de cercos perimetrales con los más altos estándares de calidad y seguridad.",
      image: "/images/services/instalacion.jpeg",
      whatsappMessage:
        "Hola, estoy interesado en el servicio de instalación de cercos perimetrales. ¿Podrían brindarme más información?",
    },
    {
      icon: <Package className="h-10 w-10 text-red-600" />,
      title: "Venta de Materiales",
      description: "Ofrecemos una amplia gama de materiales de alta calidad para proyectos de cercado y seguridad.",
      image: "/images/services/accesorios.jpeg",
      whatsappMessage:
        "Hola, estoy interesado en la compra de materiales para cercos. ¿Podrían brindarme información sobre los productos disponibles y precios?",
    },
    {
      icon: <Tool className="h-10 w-10 text-red-600" />,
      title: "Mantenimiento",
      description: "Servicio de mantenimiento y reparación para mantener sus cercos en óptimas condiciones.",
      image: "/images/services/mantenimiento.jpeg",
      whatsappMessage:
        "Hola, necesito servicio de mantenimiento para mi cerco perimetral. ¿Podrían brindarme más información sobre este servicio?",
    },
  ]

  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5493515382361?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            SOLUCIONES INTEGRALES PARA SU SEGURIDAD
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios completos para la seguridad perimetral de su propiedad, desde la instalación hasta el
            mantenimiento, con un enfoque en la calidad y la personalización.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg transition-all hover:shadow-xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="mb-2">{service.icon}</div>
                  <h3 className="text-xl font-anton">{service.title}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-red-600 hover:text-red-700 hover:bg-transparent"
                  onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                >
                  <span>Más información</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
