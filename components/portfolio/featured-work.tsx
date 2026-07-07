"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"
import { projects, type Project } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <motion.span
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="rounded-md border border-primary/25 bg-primary/5 px-2.5 py-1 text-xs font-medium text-foreground"
          >
            {step}
          </motion.span>
          {i < steps.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary/60" />
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  const reversed = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
    >
      {/* Visual */}
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className={`glass group relative overflow-hidden rounded-2xl p-6 sm:p-8 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-80" />
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
          <span className="font-serif text-2xl font-semibold text-foreground/40">
            0{index + 1}
          </span>
        </div>
        <p className="mt-4 text-sm font-medium text-muted-foreground">Pipeline</p>
        <div className="mt-3">
          <FlowDiagram steps={project.flow} />
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className={reversed ? "lg:order-1" : ""}>
        <p className="text-sm font-medium text-primary">{project.org}</p>
        <h3 className="mt-2 text-balance font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-6 space-y-3">
          {project.impact.map((imp) => (
            <li key={imp} className="flex items-start gap-3 text-sm text-foreground/90">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{imp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function FeaturedWork() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Selected Work" title="From Data to Deployment" className="mb-14" />
      <div className="space-y-20">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
