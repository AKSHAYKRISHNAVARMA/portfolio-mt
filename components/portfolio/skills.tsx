"use client"

import { motion } from "framer-motion"
import { skillGroups } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Skills" title="AI Engineering Stack" className="mb-14" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.06 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
