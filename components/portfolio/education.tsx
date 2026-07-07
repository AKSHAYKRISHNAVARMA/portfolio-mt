"use client"

import Image from "next/image"
import { motion } from "framer-motion"
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
        className="glass relative overflow-hidden rounded-2xl"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

        <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
          {/* Left — university identity */}
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="mb-8 inline-flex h-20 w-24 items-center justify-center rounded-2xl border border-primary/25 bg-secondary/30 p-3">
              <Image
                src={education.logo}
                alt="Kennesaw State University logo"
                width={178}
                height={148}
                className="h-auto w-full object-contain"
              />
            </div>

            <h3 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              {education.degree}
            </h3>
            <p className="mt-2 text-lg text-primary">{education.school}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>
                Concentration: <span className="font-medium text-foreground">{education.concentration}</span>
              </span>
              <span>{education.period}</span>
            </div>

            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{education.summary}</p>
          </div>

          {/* Right — graduation photograph, editorial treatment */}
          <div className="relative flex items-center justify-center bg-secondary/20 p-8 sm:p-10">
            <div className="relative">
              <div aria-hidden className="pointer-events-none absolute -inset-2.5 rounded-[1.4rem] border border-primary/15" />
              <Image
                src={education.photo}
                alt="Akshay in cap and gown at Kennesaw State University commencement, giving a thumbs up beside the KSU owl mascot"
                width={715}
                height={1600}
                className="h-[380px] w-auto rounded-2xl border border-primary/25 object-cover shadow-xl shadow-black/40 sm:h-[460px]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
