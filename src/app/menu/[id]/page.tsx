"use client"

import { useParams, useRouter } from "next/navigation"
import { ChevronLeft, Star, Clock, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { categories } from "@/data/categories"
import { useActiveSection } from "@/hooks/useActiveSection"
import type { CartItem, Item } from "@/types/menu"

import CategorySidebar from "@/components/menu/CategorySidebar"
import ProductSection from "@/components/menu/ProductSection"
import CartSidebar from "@/components/menu/CartSidebar"
import ProductModal from "@/components/menu/ProductModal"

import { useMemo, useState } from "react"

export default function MenuPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()

  // Modal
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Item | null>(null)
  const [modalQty, setModalQty] = useState(1)

  // Carrito
  const [cart, setCart] = useState<Record<string, CartItem>>({})
  const addToCart = (item: Item, qty = 1) => {
    setCart(prev => {
      const existing = prev[item.id]
      const nextQty = (existing?.qty ?? 0) + qty
      return { ...prev, [item.id]: { ...item, qty: nextQty } }
    })
  }
  const inc = (id: string) => setCart(prev => {
    const it = prev[id]; if (!it) return prev
    return { ...prev, [id]: { ...it, qty: it.qty + 1 } }
  })
  const dec = (id: string) => setCart(prev => {
    const it = prev[id]; if (!it) return prev
    const nextQty = Math.max(0, it.qty - 1)
    const { [id]: _, ...rest } = prev
    return nextQty === 0 ? rest : { ...prev, [id]: { ...it, qty: nextQty } }
  })
  const removeItem = (id: string) => setCart(prev => { const { [id]: _, ...rest } = prev; return rest })

  const subtotal = useMemo(
    () => Object.values(cart).reduce((sum, it) => sum + it.price * it.qty, 0),
    [cart]
  )
  const totalItems = useMemo(
    () => Object.values(cart).reduce((sum, it) => sum + it.qty, 0),
    [cart]
  )

  // Smooth scroll + highlight (sin parpadeo gracias al flag interno)
  const { activeCat, sectionRefs, scrollToCat } = useActiveSection(categories)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-green-600" onClick={() => router.back()} aria-label="Volver">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="font-semibold text-gray-900">Establecimiento {params.id}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 4.5</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> 10–25 min</span>
                <span className="inline-flex items-center gap-1"><Truck className="h-4 w-4 text-green-600" /> Envío Gratis</span>
              </div>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700">Abierto</Badge>
        </div>
      </header>

      {/* Layout 3 columnas */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <CategorySidebar
          categories={categories}
          activeCat={activeCat}
          onClickCat={scrollToCat}
        />

        <main className="lg:col-span-7">
          {categories.map(cat => (
            <ProductSection
              key={cat.id}
              category={cat}
              // Registrar el ref de cada sección
              ref={(el) => { (sectionRefs.current as any)[cat.id] = el }}
              onSelectItem={(item) => { setSelected(item); setModalQty(1); setOpen(true) }}
            />
          ))}
        </main>

        <CartSidebar
          items={cart}
          subtotal={subtotal}
          totalItems={totalItems}
          onInc={inc}
          onDec={dec}
          onRemove={removeItem}
        />
      </div>

      <ProductModal
        open={open}
        onOpenChange={setOpen}
        selected={selected}
        qty={modalQty}
        setQty={setModalQty}
        onAdd={addToCart}
      />
    </div>
  )
}
