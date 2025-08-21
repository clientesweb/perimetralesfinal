"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"

type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
      setIsAdding(false)
    }, 500)
  }

  return (
    <Button
      className="flex-1 bg-red-600 hover:bg-red-700 flex items-center gap-2 h-11"
      onClick={handleAddToCart}
      disabled={isAdding}
    >
      {isAdding ? (
        <span>Agregando...</span>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" />
          <span>Agregar al Carrito</span>
        </>
      )}
    </Button>
  )
}
