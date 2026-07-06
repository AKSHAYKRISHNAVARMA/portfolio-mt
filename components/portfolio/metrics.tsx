"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { metrics } from "@/lib/portfolio-data"

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [display, setDisplay] = useState(0)
  const isDecimal = !Number.isInteger(value)

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setDisplay(value)
      return
    }
    const duration = 1600
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="text-gradient-gold font-serif text-4xl font-semibold tabular-nums sm:text-5xl">
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  )
}

export function Metrics() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-8 sm:grid-cols-3 lg:grid-cols-5">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center text-center"
          >
            <Counter value={m.value} suffix={m.suffix} />
            <p className="mt-2 text-xs leading-snug text-muted-foreground">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
