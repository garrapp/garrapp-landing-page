"use client"

import { Badge } from "@/components/ui/badge"
import type { Category } from "@/types/menu"

type Props = {
  categories: Category[]
  activeCat: string
  onClickCat: (id: string) => void
}

export default function CategorySidebar({ categories, activeCat, onClickCat }: Props) {
  return (
    <aside className="lg:col-span-2">
      <div className="bg-white rounded-lg border p-3 lg:sticky lg:top-20">
        <h3 className="font-semibold text-gray-900 mb-2">Categorías</h3>
        <nav className="space-y-1">
          {categories.map(c => (
            <button
              key={c.id}
              className={`w-full text-left px-3 py-2 rounded-md transition ${
                c.id === activeCat
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
              onClick={() => onClickCat(c.id)}
            >
              <div className="flex items-center justify-between">
                <span className="truncate">{c.title}</span>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  {c.items.length}
                </Badge>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
