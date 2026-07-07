"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, FileText } from "lucide-react"
import { publication } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

/* Lightweight SVG: Satellite Image → Feature Extraction → Attention U-Net → Segmentation Map.
   Drawn in the site's gold-on-navy system; no stock imagery, no invented metrics. */
function PipelineVisual() {
  const gold = "var(--primary, #d4af37)"
  return (
    <svg viewBox="0 0 300 340" className="h-auto w-full max-w-[300px]" role="img"
      aria-label="Diagram of the research pipeline: satellite image to feature extraction to Attention U-Net to segmentation map">
      <defs>
        <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8" fill="none" stroke={gold} strokeWidth="1.4" opacity="0.7" />
        </marker>
      </defs>

      {/* Stage 1: satellite image grid */}
      <g transform="translate(90,6)">
        <rect width="120" height="52" rx="8" fill={gold} opacity="0.06" stroke={gold} strokeOpacity="0.35" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <rect key={`${r}${c}`} x={12 + c * 20} y={10 + r * 12} width="16" height="8" rx="1.5"
              fill={gold} opacity={0.1 + ((r * 5 + c) % 4) * 0.09} />
          ))
        )}
        <text x="60" y="66" textAnchor="middle" fill="currentColor" opacity="0.65" fontSize="10">Satellite Image</text>
      </g>
      <line x1="150" y1="78" x2="150" y2="96" stroke={gold} strokeOpacity="0.6" strokeWidth="1.4" markerEnd="url(#arr)" />

      {/* Stage 2: feature extraction — stacked planes */}
      <g transform="translate(96,100)">
        {[0, 1, 2].map((i) => (
          <rect key={i} x={i * 8} y={i * 6} width="92" height="30" rx="6"
            fill={gold} opacity={0.05 + i * 0.05} stroke={gold} strokeOpacity="0.35" />
        ))}
        <text x="54" y="62" textAnchor="middle" fill="currentColor" opacity="0.65" fontSize="10">Feature Extraction</text>
      </g>
      <line x1="150" y1="168" x2="150" y2="186" stroke={gold} strokeOpacity="0.6" strokeWidth="1.4" markerEnd="url(#arr)" />

      {/* Stage 3: Attention U-Net — U-shaped blocks with attention gates */}
      <g transform="translate(70,190)">
        {/* encoder */}
        <rect x="0" y="0" width="30" height="12" rx="3" fill={gold} opacity="0.28" />
        <rect x="10" y="18" width="26" height="11" rx="3" fill={gold} opacity="0.22" />
        <rect x="20" y="35" width="22" height="10" rx="3" fill={gold} opacity="0.16" />
        {/* bottleneck */}
        <rect x="66" y="48" width="28" height="10" rx="3" fill={gold} opacity="0.34" />
        {/* decoder */}
        <rect x="118" y="35" width="22" height="10" rx="3" fill={gold} opacity="0.16" />
        <rect x="124" y="18" width="26" height="11" rx="3" fill={gold} opacity="0.22" />
        <rect x="130" y="0" width="30" height="12" rx="3" fill={gold} opacity="0.28" />
        {/* skip connections with attention gates */}
        {[6, 24, 41].map((y, i) => (
          <g key={y}>
            <line x1={32 + i * 10} y1={y} x2={128 - i * 10} y2={y} stroke={gold} strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="80" cy={y} r="3.4" fill="none" stroke={gold} strokeOpacity="0.8" strokeWidth="1.2" />
          </g>
        ))}
        <text x="80" y="76" textAnchor="middle" fill="currentColor" opacity="0.65" fontSize="10">Attention U-Net</text>
      </g>
      <line x1="150" y1="272" x2="150" y2="290" stroke={gold} strokeOpacity="0.6" strokeWidth="1.4" markerEnd="url(#arr)" />

      {/* Stage 4: segmentation map — labeled regions */}
      <g transform="translate(90,294)">
        <rect width="120" height="30" rx="8" fill={gold} opacity="0.05" stroke={gold} strokeOpacity="0.35" />
        <path d="M8,22 q14,-14 30,-6 t34,-8 q20,-4 40,8 l0,8 q-52,4 -104,0 z" fill={gold} opacity="0.3" />
        <path d="M10,10 q22,10 46,4 t56,2" fill="none" stroke={gold} strokeOpacity="0.6" strokeWidth="1.2" />
        <text x="60" y="44" textAnchor="middle" fill="currentColor" opacity="0.65" fontSize="10">Segmentation Map</text>
      </g>
    </svg>
  )
}

export function Research() {
  return (
    <section id="research" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow={publication.eyebrow} title={publication.heading} className="mb-14" />

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-2xl"
      >
        <div className="absolute -left-12 -bottom-12 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />

        <div className="grid gap-0 lg:grid-cols-[1.35fr_1fr]">
          {/* Left — publication content */}
          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                <FileText className="h-3.5 w-3.5" /> Peer-reviewed publication
              </span>
              <span>{publication.journal}</span>
              <span>{publication.date}</span>
            </div>

            <h3 className="mt-4 text-balance font-serif text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              {publication.title}
            </h3>

            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{publication.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {publication.topics.map((t) => (
                <span key={t} className="rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/40"
              >
                Read Publication
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                View Research
              </a>
            </div>
          </div>

          {/* Right — pipeline visualization */}
          <div className="flex items-center justify-center border-t border-border/60 bg-secondary/20 p-8 text-foreground lg:border-l lg:border-t-0 sm:p-10">
            <PipelineVisual />
          </div>
        </div>
      </motion.article>
    </section>
  )
}
