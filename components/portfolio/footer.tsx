"use client"

import { ArrowUp } from "lucide-react"
import { profile, social } from "@/lib/portfolio-data"

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          Designed &amp; Built for{" "}
          <span className="font-medium text-foreground">
            {profile.firstName} {profile.lastName}
          </span>
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
            GitHub
          </a>
          <span className="text-border">|</span>
          <a href={social.email} className="transition-colors hover:text-primary">
            Email
          </a>
        </div>

        <button
          type="button"
          onClick={scrollTop}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          Back to top
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  )
}
