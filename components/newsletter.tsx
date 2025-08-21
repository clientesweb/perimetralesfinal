"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Crear mensaje predefinido para WhatsApp
    const message = `Hola, me gustaría suscribirme al newsletter con el email: ${email}`

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message)

    // Abrir WhatsApp con el mensaje predefinido
    window.open(`https://wa.me/5493515382361?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="bg-red-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4">
            <Mail className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-2xl font-anton mb-2">SUSCRÍBASE A NUESTRO NEWSLETTER</h3>
          <p className="text-gray-600 mb-6">
            Reciba actualizaciones sobre nuevos productos, ofertas especiales y consejos de seguridad perimetral.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Su dirección de email"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-red-600 hover:bg-red-700">
              Suscribirse
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
