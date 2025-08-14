import { useEffect, useRef, useState } from "react"
import type { Category } from "@/types/menu"

export function useActiveSection(categories: Category[]) {
  const [activeCat, setActiveCat] = useState<string>(categories[0]?.id ?? "")
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          const id = visible.target.id.replace("cat-", "")
          setActiveCat(id)
        }
      },
      { root: null, rootMargin: "-80px 0px -60% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    )

    categories.forEach(c => {
      const el = sectionRefs.current[c.id]
      if (el) observer.observe(el)
    })

    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (nearBottom && categories.length) {
        setActiveCat(categories[categories.length - 1].id)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [categories])

  const scrollToCat = (catId: string) => {
    const el = sectionRefs.current[catId]
    if (el) {
      setActiveCat(catId) // feedback inmediato
      isScrollingRef.current = true
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      // desbloquear tras el scroll
      window.setTimeout(() => { isScrollingRef.current = false }, 500)
    }
  }

  return { activeCat, setActiveCat, sectionRefs, scrollToCat }
}
