import SectionTitle from './SectionTitle'
import { education, languages } from '../data'
import { FaGraduationCap, FaLanguage } from 'react-icons/fa'

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Education" title="Academic background" />

        <div className="grid gap-6 lg:grid-cols-3">
          {education.map((e, i) => (
            <div
              key={e.degree}
              data-aos="flip-up"
              data-aos-delay={i * 120}
              className="glass glow-card rounded-3xl p-7 lg:col-span-1"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-teal-400/20 to-violet-500/20 text-2xl text-teal-300">
                <FaGraduationCap />
              </div>
              <span className="text-xs font-semibold text-violet-300">{e.period}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{e.degree}</h3>
              <p className="mt-2 text-sm text-slate-400">{e.school}</p>
            </div>
          ))}

          <div data-aos="flip-up" data-aos-delay="240" className="glass glow-card rounded-3xl p-7">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-teal-400/20 to-violet-500/20 text-3xl text-teal-300">
              <FaLanguage />
            </div>
            <h3 className="font-display text-lg font-bold text-white">Languages</h3>
            <ul className="mt-3 space-y-3">
              {languages.map((l) => (
                <li key={l.name} className="text-sm">
                  <span className="font-semibold text-slate-200">{l.name}</span>
                  <span className="text-slate-400"> – {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
