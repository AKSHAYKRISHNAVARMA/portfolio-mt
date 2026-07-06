"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { profile, social } from "@/lib/portfolio-data"
import { Magnetic } from "./magnetic"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    const glow = glowRef.current
    if (!rect || !glow) return
    glow.style.opacity = "1"
    glow.style.left = `${e.clientX - rect.left}px`
    glow.style.top = `${e.clientY - rect.top}px`
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => {
          if (glowRef.current) glowRef.current.style.opacity = "0"
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        {/* Cursor glow */}
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_oklch(0.82_0.13_82/_0.18),_transparent_65%)] opacity-0 transition-opacity duration-300"
        />

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s Build Something <span className="text-gradient-gold">Intelligent.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I&apos;m interested in opportunities involving AI engineering, machine learning, Generative AI, LLM systems,
          RAG, computer vision, and production AI infrastructure.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <a
              href={social.email}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/40"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </Magnetic>
        </div>

        <a
          href={social.email}
          className="mt-8 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          {profile.email}
        </a>
      </motion.div>
    </section>
  )
}
