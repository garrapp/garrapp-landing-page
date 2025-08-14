"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Category, Item } from "@/types/menu"
import { forwardRef } from "react"

type Props = {
  category: Category
  onSelectItem: (item: Item) => void
}

// forwardRef para que el parent registre el ref de cada sección
const ProductSection = forwardRef<HTMLElement, Props>(function ProductSection(
  { category, onSelectItem },
  ref
) {
  return (
    <section
      id={`cat-${category.id}`}
      ref={ref}
      className="scroll-mt-24 mb-10"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-3">{category.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {category.items.map(it => (
          <Card
            key={it.id}
            className="hover:shadow-md transition-shadow h-full cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => onSelectItem(it)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelectItem(it) }}
          >
            <CardContent className="p-4 h-full">
              <div className="flex flex-col h-full">
                <div className="relative w-full h-40 mb-3">
                  {it.url ? (
                    <Image
                      src={it.url}
                      alt={it.name}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center text-3xl">
                      🌾
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{it.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{it.desc}</p>
                  <div className="mt-2 text-green-700 font-bold">UYU ${it.price}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
})

export default ProductSection
