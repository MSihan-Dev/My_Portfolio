import { useEffect, useRef } from 'react'

/* Soft spotlight that follows the cursor (desktop only). */
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y
    let raf
    const move = (e) => {
      x = e.clientX
      y = e.clientY
    }
    const loop = () => {
      cx += (x - cx) * 0.12
      cy += (y - cy) * 0.12
      if (el) el.style.transform = `translate3d(${cx - 250}px, ${cy - 250}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full opacity-[0.16] blur-3xl md:block"
      style={{ background: 'radial-gradient(circle, #2dd4bf 0%, #8b5cf6 45%, transparent 70%)' }}
    />
  )
}
