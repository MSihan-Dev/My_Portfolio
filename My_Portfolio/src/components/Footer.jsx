import { profile, socials, navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <a href="#home" className="font-display text-xl font-bold text-white">
          <span className="gradient-text">{'<'}</span>
          {profile.firstName}
          <span className="gradient-text">{' />'}</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition hover:text-teal-300">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {socials.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="text-xl text-slate-400 transition hover:text-teal-300">
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, AOS &amp; React Icons.
      </p>
    </footer>
  )
}
