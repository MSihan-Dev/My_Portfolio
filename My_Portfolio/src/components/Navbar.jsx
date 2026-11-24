import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass mx-3 shadow-xl shadow-black/30 md:mx-auto' : 'mx-3 md:mx-auto'
        }`}
      >
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-white">
          <span className="gradient-text">{'<'}</span>
          {profile.firstName}
          <span className="gradient-text">{' />'}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? 'text-teal-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-teal-400 to-violet-500 transition-transform duration-300 ${
                    active === l.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cv}
          download
          className="hidden rounded-xl bg-linear-to-r from-teal-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-teal-400/30 lg:block"
        >
          Download CV
        </a>

        <button
          className="text-3xl text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`glass mx-3 mt-2 overflow-hidden rounded-2xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                  active === l.id ? 'bg-teal-400/10 text-teal-300' : 'text-slate-300'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="p-2">
            <a
              href={profile.cv}
              download
              className="block rounded-xl bg-linear-to-r from-teal-400 to-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
