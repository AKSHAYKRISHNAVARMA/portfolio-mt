"use client"

import { motion } from "framer-motion"
import { about } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

function TechOrbit() {
  const items = about.orbit
  const radius = 120
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {/* Rings */}
      {[0.55, 0.8, 1].map((s) => (
        <div
          key={s}
          className="absolute left-1/2 top-1/2 rounded-full border border-primary/15"
          style={{
            width: `${s * 100}%`,
            height: `${s * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-center">
        <span className="text-gradient-gold font-serif text-sm font-semibold">AI / ML</span>
      </div>

      {/* Orbiting nodes */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-0 w-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((label, i) => {
          const angle = (i / items.length) * Math.PI * 2
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          return (
            <motion.div
              key={label}
              className="glass absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full px-3 py-1.5 text-xs font-medium text-foreground shadow-md"
              style={{ left: x, top: y }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {label}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About" title={about.heading} />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  )
}
