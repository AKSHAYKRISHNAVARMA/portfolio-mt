"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { education } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Education" title="Academic Foundation" className="mb-14" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-2xl p-8 sm:p-10"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <GraduationCap className="h-8 w-8 text-primary" />
            </motion.span>
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-2xl font-semibold tracking-tight">{education.degree}</h3>
            <p className="mt-1 text-primary">{education.school}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>
                Concentration:{" "}
                <span className="font-medium text-foreground">{education.concentration}</span>
              </span>
              <span>{education.period}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
