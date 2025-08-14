export type Item = {
  id: string
  name: string
  desc: string
  price: number
  url?: string
}

export type Category = {
  id: string
  title: string
  items: Item[]
}

export type CartItem = Item & { qty: number }
