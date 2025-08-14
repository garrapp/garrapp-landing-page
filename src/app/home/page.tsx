"use client"

import { useState } from "react"
import { ChevronLeft, ChevronDown, Search, Star, Clock, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const categories = [
  { name: "Granos", icon: "🌱" },
  { name: "Animales Domesticos", icon: "🐕" },
  { name: "Animales de Campo", icon: "🐄" },
  { name: "Remedios", icon: "💊" },
]

const stablishments = [
  { id: 1, name: "Lo del Facu", rating: 4.5, deliveryTime: "10-25 min", freeDelivery: true, logo: "🌱" },
  { id: 2, name: "Lo del Juani", rating: 4.5, deliveryTime: "5-20 min", freeDelivery: true, logo: "🌱" },
  { id: 3, name: "Lo de Vicente", rating: 4.5, deliveryTime: "25-40 min", freeDelivery: true, logo: "🐄" },
  { id: 4, name: "Lo del Tomi", rating: 4.5, deliveryTime: "10-25 min", freeDelivery: true, logo: "💊" },
  { id: 5, name: "Lo de la Tati", rating: 4.5, deliveryTime: "10-25 min", freeDelivery: true, logo: "🐕" },
]

export default function AgropeDeliveryApp() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-white">
      {/* ⬇️ En mobile ocupa 100%; en md+ se centra con ancho máximo */}
      <div className="w-full px-4 sm:px-5 md:px-6 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col">
        {/* Header */}
        <header className="bg-white shrink-0">
          <div className="py-4 w-full">
            {/* Desktop (md+): Back + Montevideo + Search + Perfil */}
            <div className="hidden md:grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3 flex items-center gap-3">
                <Button asChild variant="ghost" size="icon" className="text-green-600">
                  <Link href="/"><ChevronLeft className="h-5 w-5" /></Link>
                </Button>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Montevideo</span>
                  <ChevronDown className="h-4 w-4 text-gray-600" />
                </div>
              </div>

              <div className="col-span-6">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-12 h-12 bg-gray-100 border-0 rounded-full w-full"
                  />
                  <Button
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-yellow-500 hover:bg-yellow-600 rounded-full"
                  >
                    <Search className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>

              <div className="col-span-3 flex items-center gap-2 justify-end">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">M</span>
                </div>
                <span className="font-medium text-gray-900">Marcos</span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </div>
            </div>

            {/* Mobile: back + search full width; sin Montevideo ni perfil */}
            <div className="flex items-center gap-3 md:hidden">
              <Button asChild variant="ghost" size="icon" className="text-green-600">
                <Link href="/"><ChevronLeft className="h-5 w-5" /></Link>
              </Button>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-12 h-11 bg-gray-100 border-0 rounded-full w-full"
                />
                <Button
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-yellow-500 hover:bg-yellow-600 rounded-full"
                >
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <hr className="border-gray-100 my-2" />

        {/* Contenido */}
        <div className="py-2 space-y-6">
          {/* Categorías */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-900">Categorías</h2>
            </div>

            {/* Edge-to-edge en mobile */}
            <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex gap-4 overflow-x-auto pb-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex flex-col items-center min-w-[80px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-2 shadow-md">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <span className="text-xs text-center text-gray-700 leading-tight">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Establecimientos */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">Establecimientos</h3>
          </div>

          {/* Mobile 1 col; md+ 2 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stablishments.map((s) => (
              <Link key={s.id} href={`/menu/${s.id}`} className="block group w-full">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{s.logo}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 truncate pr-2 group-hover:text-green-700 transition-colors">
                            {s.name}
                          </h4>
                          <Button
                            type="button"
                            onClick={(e) => { e.preventDefault() }}
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-400 hover:text-red-500 flex-shrink-0"
                            aria-label="Marcar como favorito"
                          >
                          </Button>
                        </div>

                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-gray-900">{s.rating}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Clock className="h-4 w-4" />
                          <span>Recibes en {s.deliveryTime}</span>
                        </div>

                        {s.freeDelivery && (
                          <div className="flex items-center gap-1">
                            <Truck className="h-4 w-4 text-green-600" />
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              Envío Gratis
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
