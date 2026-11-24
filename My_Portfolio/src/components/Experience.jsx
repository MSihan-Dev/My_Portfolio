import SectionTitle from './SectionTitle'
import { experience } from '../data'
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="Experience" title="Where I've worked" />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-linear-to-b from-teal-400 via-cyan-400 to-violet-500/10 md:left-1/2 md:-translate-x-1/2" />

          {experience.map((job, i) => {
            const left = i % 2 === 0
            return (
              <div
                key={job.role}
                className={`relative mb-12 flex md:w-1/2 ${left ? 'md:pr-12' : 'md:ml-auto md:pl-12'} pl-14 md:pl-0`}
                data-aos={left ? 'fade-right' : 'fade-left'}
              >
                {/* dot */}
                <div
                  className={`absolute left-0 top-6 grid h-10 w-10 place-items-center rounded-full bg-linear-to-br from-teal-400 to-violet-500 text-slate-950 shadow-lg shadow-teal-500/30 md:left-auto ${
                    left ? 'md:-right-5' : 'md:-left-5'
                  }`}
                >
                  <FaBriefcase />
                </div>

                <div className="glass glow-card w-full rounded-2xl p-6">
                  <span className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
                    {job.period}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">{job.role}</h3>
                  <p className="mb-4 font-medium text-violet-300">{job.company}</p>
                  <ul className="space-y-2.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                        <FaCheckCircle className="mt-1 shrink-0 text-teal-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
