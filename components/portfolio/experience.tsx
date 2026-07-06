"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { experiences } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { cn } from "@/lib/utils"

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Experience" title="Professional Journey" className="mb-14" />

      <div ref={containerRef} className="relative pl-8 sm:pl-10">
        {/* Track */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-border sm:left-[11px]" />
        {/* Progress */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[7px] top-2 h-full w-px origin-top bg-primary sm:left-[11px]"
        />

        <div className="space-y-4">
          {experiences.map((exp, i) => {
            const open = openIndex === i
            return (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                {/* Dot */}
                <span
                  className={cn(
                    "absolute -left-8 top-5 h-3.5 w-3.5 rounded-full border-2 transition-colors sm:-left-10",
                    open ? "border-primary bg-primary" : "border-border bg-background",
                  )}
                />
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className={cn(
                    "glass w-full rounded-xl px-5 py-4 text-left transition-colors",
                    open ? "ring-1 ring-primary/30" : "hover:ring-1 hover:ring-border",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden whitespace-nowrap text-xs text-muted-foreground sm:inline">
                        {exp.period}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                          open && "rotate-180 text-primary",
                        )}
                      />
                    </div>
                  </div>
                  <span className="mt-1 block text-xs text-muted-foreground sm:hidden">{exp.period}</span>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-4 space-y-2 overflow-hidden"
                      >
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {a}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
