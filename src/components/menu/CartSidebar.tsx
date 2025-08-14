"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import type { CartItem } from "@/types/menu"

type Props = {
  items: Record<string, CartItem>
  subtotal: number
  totalItems: number
  onInc: (id: string) => void
  onDec: (id: string) => void
  onRemove: (id: string) => void
}

export default function CartSidebar({
  items, subtotal, totalItems, onInc, onDec, onRemove
}: Props) {
  return (
    <aside className="lg:col-span-3">
      <div className="bg-white rounded-lg border p-4 lg:sticky lg:top-20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Tu pedido</h3>
          <Badge className="bg-green-100 text-green-700">{totalItems} ítem(s)</Badge>
        </div>

        <div className="space-y-3 max-h-[50vh] overflow-auto pr-1">
          {Object.values(items).length === 0 && (
            <p className="text-sm text-gray-500">Tu carrito está vacío.</p>
          )}

          {Object.values(items).map(item => (
            <div key={item.id} className="flex items-start gap-3 border rounded-md p-2">
              <div className="relative w-14 h-14 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                {item.url && (
                  <Image src={item.url} alt={item.name} fill className="object-cover" sizes="56px" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                  <button
                    className="text-gray-400 hover:text-red-600"
                    onClick={() => onRemove(item.id)}
                    aria-label="Eliminar"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-xs text-gray-500">UYU ${item.price}</div>
                <div className="mt-2 flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => onDec(item.id)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-6 text-center text-sm">{item.qty}</span>
                  <Button size="icon" className="h-7 w-7 bg-green-600 hover:bg-green-700" onClick={() => onInc(item.id)}>
                    <Plus className="h-4 w-4 text-white" />
                  </Button>
                  <span className="ml-auto text-sm font-semibold text-gray-900">
                    UYU ${item.price * item.qty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t pt-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold text-gray-900">UYU ${subtotal}</span>
          </div>
          <Button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white" disabled={totalItems === 0}>
            Confirmar pedido
          </Button>
        </div>
      </div>
    </aside>
  )
}
