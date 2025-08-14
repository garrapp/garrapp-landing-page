"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import type { Item } from "@/types/menu"

type Props = {
  open: boolean
  onOpenChange: (v: boolean) => void
  selected: Item | null
  qty: number
  setQty: (n: number) => void
  onAdd: (item: Item, qty: number) => void
}

export default function ProductModal({
  open, onOpenChange, selected, qty, setQty, onAdd
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-gray-900">{selected?.name}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {selected?.desc}
          </DialogDescription>
        </DialogHeader>

        {selected?.url && (
          <div className="relative w-full h-56 rounded-md overflow-hidden">
            <Image src={selected.url} alt={selected?.name ?? ""} fill className="object-cover" sizes="100vw" />
          </div>
        )}

        <div className="mt-3 flex items-center justify-between">
          <span className="text-green-700 font-bold text-lg">UYU ${selected?.price}</span>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setQty(Math.max(1, qty - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-6 text-center font-medium">{qty}</span>
            <Button size="icon" className="h-8 w-8 bg-green-600 hover:bg-green-700" onClick={() => setQty(qty + 1)}>
              <Plus className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            onClick={() => { if (selected) onAdd(selected, qty); onOpenChange(false) }}
          >
            Agregar al carrito
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
