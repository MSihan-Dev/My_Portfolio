import SectionTitle from './SectionTitle'
import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-linear-to-b from-transparent via-slate-900/50 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="A full-stack toolkit for building complete products, from the interface to the database."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              data-aos={gi % 2 === 0 ? 'fade-right' : 'fade-left'}
              className="glass glow-card rounded-3xl p-7"
            >
              <h3 className="mb-5 flex items-center gap-3 font-display text-xl font-semibold text-white">
                <span className="h-6 w-1.5 rounded-full bg-linear-to-b from-teal-400 to-violet-500" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map(({ name, icon: Icon }, i) => (
                  <span
                    key={name}
                    data-aos="zoom-in"
                    data-aos-delay={i * 50}
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:bg-teal-400/10 hover:text-white"
                  >
                    <Icon className="text-xl text-teal-300 transition-transform duration-300 group-hover:scale-125 group-hover:text-cyan-300" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
