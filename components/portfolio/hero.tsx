"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import { profile, social } from "@/lib/portfolio-data"
import { Magnetic } from "./magnetic"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

function RotatingRole() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-gradient-gold whitespace-nowrap font-medium"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.firstName}
            <span className="block text-gradient-gold">{profile.lastName}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg text-muted-foreground sm:text-xl">
            <RotatingRole />
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/40"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <SocialIcon href={social.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </SocialIcon>
            <SocialIcon href={social.github} label="GitHub">
              <GithubIcon className="h-[18px] w-[18px]" />
            </SocialIcon>
            <SocialIcon href={social.email} label="Email">
              <Mail className="h-5 w-5" />
            </SocialIcon>
            <a
              href={social.email}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Right - portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto w-full max-w-sm">
            {/* Soft radial glow */}
            <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[2rem] bg-primary/15 blur-3xl" />
            {/* Thin offset gold frame detail */}
            <div aria-hidden className="pointer-events-none absolute -inset-3 rounded-[2.4rem] border border-primary/15" />
            {/* Frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 shadow-2xl shadow-black/40">
              <div className="absolute inset-0 z-10 rounded-[2rem] ring-1 ring-inset ring-white/10" />
              <Image
                src={profile.heroImage || "/placeholder.svg"}
                alt="Portrait of Akshay Krishna Varma Buddharaju in front of a city skyline at dusk"
                width={640}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/70 to-transparent" />
            </div>

            {/* Single static label */}
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="glass absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-primary/30 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground shadow-lg"
            >
              AI + Data Science
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
    >
      {children}
    </a>
  )
}
