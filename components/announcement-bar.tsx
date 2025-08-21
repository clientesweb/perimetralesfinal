"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Megaphone } from "lucide-react"

const announcements = [
  "🚚 Envíos a todo el país",
  "🔨 Instalación profesional de cercos perimetrales en 48 horas",
  "🛠️ Servicio de mantenimiento y reparación de cercos existentes",
  "⚡ Instalación en 48 horas para pedidos urgentes",
  "✅ Garantía de calidad en todos nuestros productos",
]

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-red-600 text-white py-2 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Megaphone className="h-4 w-4 flex-shrink-0" />
          <p className="text-center text-sm font-medium text-white">{announcements[currentIndex]}</p>
          <div className="hidden sm:flex items-center gap-1 text-xs font-medium cursor-pointer hover:underline">
            <span>Ver más</span>
            <ChevronRight className="h-3 w-3" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"></div>
    </div>
  )
}
