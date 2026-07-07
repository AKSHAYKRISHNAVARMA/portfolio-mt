"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { skillTabs, skillsCore } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="AI & Data Science Toolkit"
        className="mb-4"
      />
      <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">
        Technologies I use to turn data, models, and AI research into production-ready systems.
      </p>

      {/* Core keywords for fast recruiter scanning */}
      <p className="mb-10 text-center text-sm text-muted-foreground">
        <span className="font-medium text-primary">Core:</span>{" "}
        {skillsCore.join(" • ")}
      </p>

      {/* Tabs — horizontal, scrollable on mobile */}
      <div
        role="tablist"
        aria-label="Skill categories"
        className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {skillTabs.map((tab, i) => (
          <button
            key={tab.category}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              active === i
                ? "border-primary/60 bg-primary/10 text-primary shadow-sm shadow-primary/10"
                : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {tab.category}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="glass rounded-2xl p-8 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {skillTabs[active].skills.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-lg border border-border bg-secondary/30 px-3.5 py-2 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
