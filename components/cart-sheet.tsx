"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CartSheet({ children }: { children: React.ReactNode }) {
  const { items, removeItem, updateQuantity, clearCart } = useCart()
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [customerNotes, setCustomerNotes] = useState("")
  const [activeTab, setActiveTab] = useState("cart")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  const handleContinueToCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agregue productos al carrito antes de continuar.",
        variant: "destructive",
      })
      return
    }
    setActiveTab("checkout")
  }

  const handleSendToWhatsApp = () => {
    if (!customerName || !customerPhone) {
      toast({
        title: "Información requerida",
        description: "Por favor complete su nombre y teléfono para continuar.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      // Formatear el mensaje para WhatsApp
      let message = `*Nuevo Pedido de ${customerName}*\n\n`
      message += `*Productos:*\n`

      items.forEach((item) => {
        message += `- ${item.name} x ${item.quantity}\n`
        if (item.selectedOptions) {
          Object.entries(item.selectedOptions).forEach(([key, value]) => {
            message += `  • ${key}: ${value}\n`
          })
        }
      })

      message += `\n*Datos del Cliente:*\n`
      message += `Nombre: ${customerName}\n`
      message += `Teléfono: ${customerPhone}\n`

      if (customerEmail) {
        message += `Email: ${customerEmail}\n`
      }

      if (customerAddress) {
        message += `Dirección: ${customerAddress}\n`
      }

      if (customerNotes) {
        message += `\n*Notas:*\n${customerNotes}`
      }

      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(message)

      // Número de WhatsApp de la empresa (usar el de Casa Central)
      const whatsappNumber = "5493515382361"

      // Crear el enlace de WhatsApp
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

      // Abrir WhatsApp en una nueva pestaña
      window.open(whatsappLink, "_blank")

      // Mostrar mensaje de éxito
      setOrderSuccess(true)
      setIsSubmitting(false)

      // Limpiar el carrito después de 3 segundos
      setTimeout(() => {
        clearCart()
        setCustomerName("")
        setCustomerPhone("")
        setCustomerEmail("")
        setCustomerAddress("")
        setCustomerNotes("")
        setActiveTab("cart")
        setOrderSuccess(false)
        setIsOpen(false)
      }, 3000)
    }, 1500)
  }

  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open)
          if (!open) {
            // Resetear el estado cuando se cierra el sheet
            setActiveTab("cart")
            setOrderSuccess(false)
          }
        }}
      >
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto p-0">
          {orderSuccess ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">¡Pedido enviado!</h2>
              <p className="text-gray-600 mb-6">
                Su pedido ha sido enviado correctamente a WhatsApp. En breve nos pondremos en contacto con usted.
              </p>
              <SheetClose asChild>
                <Button className="bg-red-600 hover:bg-red-700">Cerrar</Button>
              </SheetClose>
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
              <div className="border-b">
                <TabsList className="w-full justify-start rounded-none border-b-0 bg-transparent p-0">
                  <TabsTrigger
                    value="cart"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6"
                  >
                    Carrito ({totalItems})
                  </TabsTrigger>
                  <TabsTrigger
                    value="checkout"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-6"
                    disabled={items.length === 0}
                  >
                    Finalizar Compra
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="cart" className="flex-1 overflow-auto p-6 pt-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <ShoppingBag className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Su carrito está vacío</h3>
                    <p className="text-gray-500 mb-6">Agregue productos a su carrito para continuar con la compra.</p>
                    <SheetClose asChild>
                      <Button variant="outline" asChild>
                        <Link href="/productos" className="flex items-center gap-2">
                          Ver Productos
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                ) : (
                  <>
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4 py-4 border-b">
                          <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0 border">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-base">{item.name}</h4>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-gray-400 hover:text-red-600 hover:bg-transparent"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            {/* Opciones seleccionadas */}
                            {item.selectedOptions && Object.entries(item.selectedOptions).length > 0 && (
                              <div className="mt-1 mb-2">
                                {Object.entries(item.selectedOptions).map(([key, value]) => (
                                  <div key={key} className="text-xs text-gray-500 flex gap-1">
                                    <span className="font-medium">{key}:</span> {value}
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center border rounded-md">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-none border-r"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-none border-l"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>

                              <div className="text-sm font-medium">Consultar precio</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 space-y-4">
                      <Button className="w-full bg-red-600 hover:bg-red-700" onClick={handleContinueToCheckout}>
                        Continuar
                      </Button>
                      <Button variant="outline" className="w-full" onClick={clearCart}>
                        Vaciar Carrito
                      </Button>
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="checkout" className="flex-1 overflow-auto p-6 pt-4">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-start gap-2 text-sm">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p>
                        Complete sus datos para solicitar una cotización. Le responderemos a la brevedad con los precios
                        y disponibilidad.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Nombre completo *
                        </Label>
                        <Input
                          id="name"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Ingrese su nombre completo"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Teléfono *
                        </Label>
                        <Input
                          id="phone"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="Ingrese su número de teléfono"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email (opcional)
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="Ingrese su correo electrónico"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-sm font-medium">
                          Dirección (opcional)
                        </Label>
                        <Input
                          id="address"
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          placeholder="Ingrese su dirección"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-sm font-medium">
                          Notas adicionales (opcional)
                        </Label>
                        <Textarea
                          id="notes"
                          value={customerNotes}
                          onChange={(e) => setCustomerNotes(e.target.value)}
                          placeholder="Ingrese cualquier información adicional sobre su pedido"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="font-medium">Resumen del pedido</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm py-2 border-b">
                          <div>
                            <div className="font-medium">
                              {item.name} x {item.quantity}
                            </div>
                            {item.selectedOptions && Object.entries(item.selectedOptions).length > 0 && (
                              <div className="mt-1 text-xs text-gray-500">
                                {Object.entries(item.selectedOptions).map(([key, value]) => (
                                  <div key={key} className="flex gap-1">
                                    <span className="font-medium">{key}:</span> {value}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="text-right">Consultar precio</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2 h-12"
                      onClick={handleSendToWhatsApp}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                          <span>Procesando...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar cotización por WhatsApp</span>
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setActiveTab("cart")}
                      disabled={isSubmitting}
                    >
                      Volver al Carrito
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </SheetContent>
      </Sheet>
      <Toaster />
    </>
  )
}
