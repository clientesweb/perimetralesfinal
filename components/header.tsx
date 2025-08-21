"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingCart, X, Phone, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { CartSheet } from "@/components/cart-sheet"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Input } from "@/components/ui/input"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCart()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/#sobre-nosotros" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Productos", href: "/productos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "/#contacto" },
  ]

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <AnnouncementBar />

      <header
        className={`sticky top-0 z-50 w-full bg-white border-b transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="mr-4 sm:mr-6" aria-label="Perimetrales las Flores - Inicio">
              <Image
                src="/images/logo.png"
                alt="Perimetrales las Flores"
                width={100}
                height={25}
                className="h-auto w-auto max-h-8 sm:max-h-10"
                priority
              />
            </Link>

            {/* Navegación de escritorio */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-4 xl:ml-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-2 py-2 text-sm font-anton transition-colors hover:text-red-600 relative group"
                >
                  {item.name.toUpperCase()}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Búsqueda, carrito y menú móvil */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Búsqueda en escritorio */}
            <div className="hidden md:flex relative w-48 lg:w-64">
              <Input placeholder="Buscar productos..." className="pr-8" aria-label="Buscar productos" />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </div>

            {/* Botón de WhatsApp */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-50"
              asChild
            >
              <a
                href="https://wa.me/5493515382361"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>

            {/* Carrito */}
            <CartSheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" aria-label="Carrito de compras">
                  <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
            </CartSheet>

            {/* Menú móvil */}
            <div className="lg:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menú">
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[350px]">
                  <div className="flex items-center justify-between mb-6">
                    <Image
                      src="/images/logo.png"
                      alt="Perimetrales las Flores"
                      width={120}
                      height={30}
                      className="h-auto w-auto max-h-8"
                    />
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
                      <X className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </div>

                  {/* Búsqueda en móvil */}
                  <div className="relative mb-6">
                    <Input placeholder="Buscar productos..." className="pr-8" aria-label="Buscar productos" />
                    <Search
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>

                  <nav className="flex flex-col gap-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-anton transition-colors hover:text-red-600 py-3 border-b border-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    ))}
                  </nav>

                  {/* Información de contacto en móvil */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-red-600" aria-hidden="true" />
                      <div className="text-sm">
                        <p>Teléfono: 877009</p>
                        <p>WhatsApp: 351 155382361</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" aria-hidden="true" />
                      <div className="text-sm">
                        <p>Av. Armada Argentina 188, Córdoba</p>
                      </div>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                      <a href="https://wa.me/5493515382361" target="_blank" rel="noopener noreferrer">
                        Contactar por WhatsApp
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
