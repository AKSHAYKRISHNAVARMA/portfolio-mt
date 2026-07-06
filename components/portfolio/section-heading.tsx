"use client"

import { motion } from "framer-motion"

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string
  title: string
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {eyebrow && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-primary/60" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </motion.div>
  )
}
