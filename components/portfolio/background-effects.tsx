"use client"

import { useEffect, useRef } from "react"

/**
 * Subtle animated background:
 * - fixed grid pattern
 * - slow gradient mesh blobs
 * - mouse-following radial light
 * - lightweight AI network node canvas
 * Respects prefers-reduced-motion.
 */
export function BackgroundEffects() {
  const glowRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Mouse-following radial glow
  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let raf = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 3
    let cx = tx
    let cy = ty

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }
    const tick = () => {
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      el.style.transform = `translate(${cx}px, ${cy}px)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // AI network nodes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let width = 0
    let height = 0
    let dpr = 1

    type Node = { x: number; y: number; vx: number; vy: number }
    let nodes: Node[] = []

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(46, Math.floor((width * height) / 26000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            const opacity = (1 - dist / 130) * 0.18
            ctx.strokeStyle = `rgba(220, 180, 110, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(220, 190, 130, 0.5)"
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.22_0.05_264),_transparent_60%)]" />
      {/* Grid */}
      <div className="grid-pattern noise-mask absolute inset-0 opacity-60" />
      {/* Gradient mesh blobs */}
      <div className="animate-float-slow absolute -left-40 top-24 h-96 w-96 rounded-full bg-glow/20 blur-[120px]" />
      <div
        className="animate-float-slow absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-primary/15 blur-[120px]"
        style={{ animationDelay: "2s" }}
      />
      {/* Network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      {/* Mouse-following radial glow */}
      <div
        ref={glowRef}
        className="absolute -left-64 -top-64 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_oklch(0.82_0.13_82/_0.10),_transparent_65%)]"
      />
    </div>
  )
}
