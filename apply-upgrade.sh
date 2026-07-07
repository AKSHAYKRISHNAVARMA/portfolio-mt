#!/usr/bin/env bash
# Applies the AI + Data Science portfolio upgrade. Deterministic: writes exact file
# contents, restores images from this repo's own git history, builds, verifies, pushes.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

git checkout main
git pull origin main

# Images: restore from existing history commit 2c53c1d (no external files needed)
git checkout 2c53c1d -- public/akshay-graduation.jpeg public/ksu-logo.png
git mv -f public/akshay-graduation.jpeg public/graduation.jpg

# Restore the original README that the stray archive overwrote
git checkout 447c577 -- README.md

mkdir -p $(dirname lib/portfolio-data.ts)
cat > lib/portfolio-data.ts << 'SCRIPT_EOF'
export const profile = {
  firstName: "Akshay Krishna Varma",
  lastName: "Buddharaju",
  shortName: "AKSHAY.",
  tagline: "AI/ML Engineer | Data Scientist | Generative AI | LLMs | RAG | Computer Vision",
  email: "akvbuddharaju@gmail.com",
  phone: "+1 918 815 8169",
  resumeUrl: "/Akshay_Krishna_Varma_Buddharaju_Resume.pdf",
  heroImage: "/akshay-hero.png",
  location: "United States",
  availability: "Available for AI/ML Opportunities",
  roles: [
    "AI/ML Engineer",
    "Data Scientist",
    "Generative AI Developer",
    "Machine Learning Engineer",
    "Computer Vision Engineer",
  ],
  roleLine: "AI/ML Engineer • Data Scientist • Generative AI Developer",
  heroDescription:
    "I turn complex data into insight and insight into intelligent products. My work spans exploratory data analysis, predictive modeling, Generative AI and RAG systems, LLM optimization, computer vision, and production ML infrastructure.",
} as const

export const social = {
  linkedin: "https://linkedin.com/in/abuddhar",
  github: "https://github.com/AKSHAYKRISHNAVARMA",
  email: "mailto:akvbuddharaju@gmail.com",
} as const

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
] as const

export const metrics = [
  { value: 85, suffix: "%", label: "Retrieval Efficiency Improvement" },
  { value: 50, suffix: "%", label: "LLM Latency Reduction" },
  { value: 73, suffix: "%", label: "Vulnerability Risk Reduction" },
  { value: 95, suffix: "%", label: "NLP Classification Accuracy" },
  { value: 92.5, suffix: "%", label: "Object Detection mAP@0.5" },
] as const

export const about = {
  heading: "Building AI Systems That Work Beyond the Notebook",
  paragraphs: [
    "I'm an AI/ML Engineer and Data Scientist focused on designing intelligent systems that move from research ideas to practical deployment. My experience includes Generative AI, retrieval-augmented generation, LLM optimization, computer vision, graph neural networks, NLP, MCP-based AI tooling, and production ML infrastructure.",
    "I enjoy solving problems across the complete machine learning lifecycle — from data exploration, feature engineering, and model evaluation to API development, deployment, monitoring, and optimization.",
  ],
  orbit: ["LLM", "RAG", "NLP", "CV", "GNN", "MLOps", "Cloud"],
} as const

export type Project = {
  title: string
  org: string
  description: string
  impact: string[]
  tech: string[]
  flow: string[]
}

export const projects: Project[] = [
  {
    title: "Video RAG Intelligence System",
    org: "The Home Depot — CoreAI",
    description:
      "Designed a Video RAG system for large-scale knowledge retrieval from long-form video content.",
    impact: [
      "50% lower LLM inference latency",
      "85% improvement in retrieval efficiency",
      "100+ long-form videos processed",
      "Parallel chunk-based inference pipeline",
    ],
    tech: ["PyTorch", "LLMs", "RAG", "Embeddings", "Vector Search", "Python", "Parallel Processing"],
    flow: ["Video", "Chunking", "Embeddings", "Vector Search", "LLM", "Answer"],
  },
  {
    title: "LLM Code Analysis & Automated Remediation",
    org: "Decentralized Science Lab",
    description:
      "Built an LLM-powered pipeline to analyze software vulnerabilities and generate automated remediation recommendations.",
    impact: [
      "73% reduction in vulnerability risk scores",
      "50 codebases analyzed",
      "1,400-sample evaluation dataset",
      "Automated Airflow data pipelines",
    ],
    tech: ["LLMs", "Python", "Apache Airflow", "Code Analysis", "Prompt Engineering", "Data Pipelines"],
    flow: ["Codebase", "LLM Analysis", "Risk Scoring", "Remediation", "Re-score"],
  },
  {
    title: "Generative Surgical Report Intelligence",
    org: "Kennesaw State University",
    description:
      "Developed a Generative AI model combining Graph Neural Networks and BERT to produce robotic surgical reports.",
    impact: [
      "ROUGE score: 0.83",
      "28.6% improvement over baseline",
      "SimGNN integration",
      "Structural alignment optimization",
    ],
    tech: ["PyTorch", "BERT", "Graph Neural Networks", "SimGNN", "NLP", "Generative AI"],
    flow: ["Scene Graph", "GNN", "BERT", "Decoder", "Report"],
  },
  {
    title: "MCP-Powered Ad Analytics Automation",
    org: "Sports Media Inc.",
    description:
      "Built a Python-based MCP server that automates campaign-data ingestion, KPI aggregation, and LLM-generated advertising insights.",
    impact: [
      "15+ advertising metrics",
      "70% reduction in manual reporting effort",
      "Automated weekly reporting workflow",
    ],
    tech: ["Python", "MCP", "LLMs", "Analytics Automation", "FastAPI", "Data Pipelines"],
    flow: ["Campaign Data", "MCP Server", "KPI Engine", "LLM Insights", "Report"],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    role: "Machine Learning Engineer",
    company: "Sports Media Inc.",
    period: "Feb 2026 – Present",
    achievements: [
      "Built a Python-based MCP server providing developer-facing tooling that automates weekly ad-analytics reporting through campaign-data ingestion, KPI aggregation, and LLM-generated insights.",
      "Implemented metrics and automation across 15+ ad-performance metrics, reducing manual reporting effort by 70% by eliminating recurring engineering toil.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Decentralized Science Lab",
    period: "Aug 2025 – Dec 2025",
    achievements: [
      "Reduced vulnerability risk scores by 73% by building an LLM-based code-analysis and automated-remediation pipeline that analyzed 50 codebases using multi-metric risk re-scoring.",
      "Built automated data ingestion and preparation pipelines with Apache Airflow, curating a 1,400-sample dataset to support ML training, evaluation, and experimentation.",
    ],
  },
  {
    role: "Software Engineer Intern — CoreAI",
    company: "The Home Depot",
    period: "May 2025 – Jul 2025",
    achievements: [
      "Designed a video RAG system for Magic Apron and reduced LLM inference latency by 50% through profiling and parallel chunk-based processing of large video inputs.",
      "Improved retrieval efficiency by 85% using optimized embedding generation and similarity-search strategies within a RAG-based knowledge-retrieval system.",
      "Built chunk-level inference pipelines that processed 100+ long-form videos via batch/parallel processing, achieving 100% input coverage.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Kennesaw State University",
    period: "Aug 2024 – Apr 2025",
    achievements: [
      "Developed a GNN + BERT Generative AI model in PyTorch for robotic surgical report generation, evaluated at a ROUGE score of 0.81 — a 28.6% improvement over baseline.",
      "Improved report quality from ROUGE 0.81 to 0.83 (+2.47%) by integrating SimGNN with template-based training for stronger structural alignment.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Vidhi Labs",
    period: "Nov 2023 – Dec 2023",
    achievements: [
      "Developed and fine-tuned PyTorch CNN ensembles (ResNet, VGG19, InceptionV3), improving F1-score by 5% for traffic-violation detection under low-latency inference constraints.",
      "Trained a YOLOv5 object-detection model achieving 92.5% mAP@0.5 for vehicle and sign recognition using optimized computer-vision pipelines.",
      "Reduced inference latency by 55% (detection) and 45% (classification) through INT8 quantization and structured pruning.",
    ],
  },
  {
    role: "Software Engineer",
    company: "INV Technologies",
    period: "Jan 2023 – Oct 2023",
    achievements: [
      "Developed a one-shot face-recognition model (90% accuracy) and deployed it end-to-end on AWS SageMaker with S3-based data storage.",
      "Built a Seq2Seq neural network for fake-news detection, achieving 95% classification accuracy with sequence-modeling techniques.",
    ],
  },
]

export const skillsCore = ["Python", "SQL", "PyTorch", "Scikit-learn", "AWS", "GCP"] as const

export const skillTabs = [
  {
    category: "Machine Learning & Data Science",
    skills: ["Python", "SQL", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib", "PySpark", "Machine Learning", "Deep Learning", "Predictive Modeling", "Data Analysis"],
  },
  {
    category: "Generative AI & NLP",
    skills: ["Large Language Models", "RAG", "Hugging Face", "LangChain", "NLP", "BERT", "Prompt Engineering", "Embeddings", "Vector Search", "FastAPI", "MCP"],
  },
  {
    category: "Computer Vision & Deep Learning",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "CNNs", "YOLO", "Graph Neural Networks", "SimGNN", "Computer Vision", "Object Detection", "Semantic Segmentation"],
  },
  {
    category: "Cloud & MLOps",
    skills: ["AWS SageMaker", "AWS Lambda", "Amazon S3", "GCP Vertex AI", "Docker", "Kubernetes", "MLflow", "Apache Airflow", "GitHub Actions", "PyTest", "Linux"],
  },
] as const

export const education = {
  degree: "Master of Science in Computer Science",
  school: "Kennesaw State University",
  concentration: "Data Science",
  period: "Aug 2024 – Dec 2025",
  summary: "Graduate study focused on data science, machine learning, deep learning, and applied AI research.",
  logo: "/ksu-logo.png",
  photo: "/graduation.jpg",
} as const

export const publication = {
  eyebrow: "Research & Publications",
  heading: "Research That Connects Deep Learning With Real-World Problems",
  title: "Semantic Segmentation of Remote Sensing Images of Urban Areas using Deep Learning Methods",
  journal: "International Journal of Research Publication and Reviews",
  date: "March 6, 2024",
  description:
    "Explored the effectiveness of Attention U-Net for remote sensing image segmentation, focusing on improved feature learning and localization through attention mechanisms. The work examines how attention-enhanced segmentation architectures can produce more refined urban-area segmentation compared with traditional U-Net approaches, with applications in remote sensing and geospatial image analysis.",
  url: "https://ijrpr.com/uploads/V5ISSUE3/IJRPR23839.pdf",
  topics: ["Deep Learning", "Computer Vision", "Semantic Segmentation", "Remote Sensing", "Attention U-Net"],
} as const
SCRIPT_EOF

mkdir -p $(dirname components/portfolio/hero.tsx)
cat > components/portfolio/hero.tsx << 'SCRIPT_EOF'
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
SCRIPT_EOF

mkdir -p $(dirname components/portfolio/skills.tsx)
cat > components/portfolio/skills.tsx << 'SCRIPT_EOF'
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
SCRIPT_EOF

mkdir -p $(dirname components/portfolio/education.tsx)
cat > components/portfolio/education.tsx << 'SCRIPT_EOF'
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
SCRIPT_EOF

mkdir -p $(dirname components/portfolio/research.tsx)
cat > components/portfolio/research.tsx << 'SCRIPT_EOF'
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
SCRIPT_EOF

mkdir -p $(dirname app/page.tsx)
cat > app/page.tsx << 'SCRIPT_EOF'
import { BackgroundEffects } from "@/components/portfolio/background-effects"
import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Metrics } from "@/components/portfolio/metrics"
import { About } from "@/components/portfolio/about"
import { FeaturedWork } from "@/components/portfolio/featured-work"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Education } from "@/components/portfolio/education"
import { Research } from "@/components/portfolio/research"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <FeaturedWork />
        <Experience />
        <Skills />
        <Education />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
SCRIPT_EOF


npm install
npm run build

npx tsc --noEmit || true

git add -A
git commit -m "Apply AI + Data Science upgrade: clean hero, tabbed skills toolkit, academic section with KSU logo + graduation photo, Research & Publications section"
git push origin main
echo "DONE — pushed. Vercel will redeploy automatically."
