"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type SelectedOptions = {
  [key: string]: string
}

export type CartItem = {
  id: number
  name: string
  price?: number
  image: string
  quantity: number
  selectedOptions?: SelectedOptions
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  updateItemOptions: (id: number, options: SelectedOptions) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      // Verificar si el producto ya existe con las mismas opciones
      const existingItemIndex = prevItems.findIndex((i) => {
        // Si no hay opciones seleccionadas, solo comparar por ID
        if (!item.selectedOptions && !i.selectedOptions) {
          return i.id === item.id
        }

        // Si uno tiene opciones y el otro no, son diferentes
        if ((!item.selectedOptions && i.selectedOptions) || (item.selectedOptions && !i.selectedOptions)) {
          return false
        }

        // Comparar opciones
        if (item.selectedOptions && i.selectedOptions) {
          const itemOptionsKeys = Object.keys(item.selectedOptions)
          const existingOptionsKeys = Object.keys(i.selectedOptions)

          // Si tienen diferente número de opciones, son diferentes
          if (itemOptionsKeys.length !== existingOptionsKeys.length) {
            return false
          }

          // Verificar si todas las opciones son iguales
          for (const key of itemOptionsKeys) {
            if (item.selectedOptions[key] !== i.selectedOptions[key]) {
              return false
            }
          }
        }

        return i.id === item.id
      })

      if (existingItemIndex !== -1) {
        // Si existe, actualizar la cantidad
        return prevItems.map((i, index) =>
          index === existingItemIndex ? { ...i, quantity: i.quantity + item.quantity } : i,
        )
      }

      // Si no existe, agregar nuevo item
      return [...prevItems, item]
    })
  }

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const updateItemOptions = (id: number, options: SelectedOptions) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, selectedOptions: options } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        updateItemOptions,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}
