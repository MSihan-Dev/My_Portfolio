import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-linear-to-r from-teal-400 via-cyan-400 to-violet-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-linear-to-br from-teal-400 to-violet-500 text-slate-950 shadow-lg shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 ${
          progress > 12 ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <FaArrowUp />
      </button>
    </>
  )
}
