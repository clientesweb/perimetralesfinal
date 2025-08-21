"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp, Shield, Package, PenToolIcon as Tool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* Newsletter section */}
      <div className="bg-red-600 py-8 sm:py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-anton text-white mb-2">SUSCRÍBASE A NUESTRO NEWSLETTER</h3>
              <p className="text-white/80 text-sm sm:text-base">
                Reciba noticias, ofertas y novedades directamente en su correo.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Su correo electrónico"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-w-0 sm:min-w-[250px]"
                aria-label="Correo electrónico para newsletter"
              />
              <Button className="bg-white text-red-600 hover:bg-white/90 hover:text-red-700">Suscribirse</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content - Cambiado a fondo blanco */}
      <div className="bg-white py-12 sm:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
            {/* Column 1: About */}
            <div className="sm:col-span-2 lg:col-span-4">
              <div className="flex justify-center md:justify-start mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Perimetrales las Flores"
                  width={160}
                  height={45}
                  className="h-auto w-auto max-w-[140px] sm:max-w-[160px]"
                />
              </div>
              <p className="text-gray-700 max-w-md mb-6 text-center md:text-left text-sm sm:text-base">
                Empresa líder en la instalación de cercos perimetrales con más de una década de experiencia. Nos
                especializamos en la colocación de cercos y en la venta de materiales, contando con una mano de obra
                altamente calificada.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a
                  href="https://www.instagram.com/perimetraleslasflores?igsh=MWl6dDdhejQxOXh1ag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full text-red-600"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full text-red-600"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="mailto:info@perimetraleslasflorescba.com"
                  className="bg-gray-100 hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full text-red-600"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="tel:+5493515382361"
                  className="bg-gray-100 hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full text-red-600"
                  aria-label="Teléfono"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="sm:col-span-1 lg:col-span-2">
              <h3 className="text-lg font-anton mb-4 sm:mb-6 text-gray-900 text-center md:text-left">SERVICIOS</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors flex items-center justify-center md:justify-start text-sm sm:text-base"
                  >
                    <Shield className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" aria-hidden="true" />
                    <span>Instalación de Cercos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors flex items-center justify-center md:justify-start text-sm sm:text-base"
                  >
                    <Package className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" aria-hidden="true" />
                    <span>Venta de Materiales</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-red-600 transition-colors flex items-center justify-center md:justify-start text-sm sm:text-base"
                  >
                    <Tool className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" aria-hidden="true" />
                    <span>Mantenimiento</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="sm:col-span-1 lg:col-span-2">
              <h3 className="text-lg font-anton mb-4 sm:mb-6 text-gray-900 text-center md:text-left">ENLACES</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <Link
                    href="#servicios"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm sm:text-base"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#productos"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm sm:text-base"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-700 hover:text-red-600 transition-colors text-sm sm:text-base">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contacto"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm sm:text-base"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors text-sm sm:text-base">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors text-sm sm:text-base">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="sm:col-span-2 lg:col-span-4">
              <h3 className="text-lg font-anton mb-4 sm:mb-6 text-gray-900 text-center md:text-left">CONTACTO</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Casa Central */}
                <div className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-gray-50">
                  <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <MapPin className="h-4 w-4 text-red-600 mr-2" aria-hidden="true" />
                    Casa Central
                  </h4>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li className="text-gray-700">Av. Armada Argentina 190, Córdoba</li>
                    <li className="text-gray-700">Teléfono: 877009</li>
                    <li className="text-gray-700">WhatsApp: 351 155382361</li>
                    <li className="text-gray-700">
                      <span className="font-medium">Horario:</span> Lunes a Viernes: 9:00 a 12:00 y de 15:00 a 18:00
                    </li>
                  </ul>
                </div>

                {/* Sucursal Alta Gracia */}
                <div className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-gray-50">
                  <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <MapPin className="h-4 w-4 text-red-600 mr-2" aria-hidden="true" />
                    Sucursal Alta Gracia
                  </h4>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li className="text-gray-700">Av. Hipólito Yrigoyen 1220, Alta Gracia</li>
                    <li className="text-gray-700">WhatsApp: 351 158047696</li>
                    <li className="text-gray-700">
                      <span className="font-medium">Horario:</span> Lunes a Viernes: 9:00 a 12:00 y de 15:00 a 18:00
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              &copy; {currentYear} Perimetrales las Flores. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gray-600 text-xs sm:text-sm">
                Desarrollado por{" "}
                <a
                  href="https://dualitydomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Duality Domain
                </a>
              </p>
              <Button
                variant="outline"
                size="icon"
                className="bg-red-600 hover:bg-red-700 border-0 text-white"
                onClick={scrollToTop}
                aria-label="Volver arriba"
              >
                <ArrowUp className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
