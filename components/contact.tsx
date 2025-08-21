"use client"

import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Crear mensaje predefinido para WhatsApp
    const message = `Hola, soy ${formData.name}. 
Teléfono: ${formData.phone}
Email: ${formData.email}
Mensaje: ${formData.message}`

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message)

    // Abrir WhatsApp con el mensaje predefinido
    window.open(`https://wa.me/5493515382361?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contacto" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span>Contáctenos</span>
          </div>
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">INFORMACIÓN DE CONTACTO</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Estamos a su disposición para atender sus consultas y brindarle el mejor servicio.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-lg overflow-hidden h-full">
            <div className="bg-red-600 py-3 sm:py-4 px-4 sm:px-6">
              <CardTitle className="text-lg sm:text-xl font-anton text-white flex items-center gap-2">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                Casa Central
              </CardTitle>
            </div>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" aria-hidden="true" />
                <p className="text-sm sm:text-base">Av. Armada Argentina 190, Córdoba</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-600 mt-0.5" aria-hidden="true" />
                <div className="text-sm sm:text-base">
                  <p>Teléfono Fijo: 877009</p>
                  <p>WhatsApp: 351 155382361</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-red-600 mt-0.5" aria-hidden="true" />
                <div className="text-sm sm:text-base">
                  <p className="font-medium">Horario de Atención:</p>
                  <p>Lunes a Viernes: 9:00 a 12:00 y de 15:00 a 18:00</p>
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 mt-2" asChild>
                <a href="https://wa.me/5493515382361" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg overflow-hidden h-full">
            <div className="bg-red-600 py-3 sm:py-4 px-4 sm:px-6">
              <CardTitle className="text-lg sm:text-xl font-anton text-white flex items-center gap-2">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                Sucursal Alta Gracia
              </CardTitle>
            </div>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" aria-hidden="true" />
                <p className="text-sm sm:text-base">Av. Hipólito Yrigoyen 1220, Alta Gracia</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-600 mt-0.5" aria-hidden="true" />
                <div className="text-sm sm:text-base">
                  <p>WhatsApp: 351 158047696</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-red-600 mt-0.5" aria-hidden="true" />
                <div className="text-sm sm:text-base">
                  <p className="font-medium">Horario de Atención:</p>
                  <p>Lunes a Viernes: 9:00 a 12:00 y de 15:00 a 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-red-600 mt-0.5" aria-hidden="true" />
                <a
                  href="https://www.instagram.com/perimetraleslasflorescba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors text-sm sm:text-base"
                >
                  @perimetraleslasflorescba
                </a>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 mt-2" asChild>
                <a href="https://wa.me/5493515382361" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg md:col-span-2 lg:col-span-1 h-full">
            <div className="bg-red-600 py-3 sm:py-4 px-4 sm:px-6">
              <CardTitle className="text-lg sm:text-xl font-anton text-white flex items-center gap-2">
                <Mail className="h-5 w-5" aria-hidden="true" />
                Envíenos un Mensaje
              </CardTitle>
            </div>
            <CardContent className="space-y-4 p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Su nombre"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      placeholder="Su teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Su email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="¿En qué podemos ayudarle?"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
