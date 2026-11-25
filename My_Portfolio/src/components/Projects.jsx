import SectionTitle from "./SectionTitle";
import { projects, profile } from "../data";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="relative py-5">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/50 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Client work, a final-year AI product, a desktop system and an algorithms project."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={(i % 2) * 120}
              className="glass glow-card group relative flex flex-col overflow-hidden rounded-3xl p-7"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-linear-to-br from-teal-400/20 to-violet-500/20 blur-2xl transition-all duration-500 group-hover:scale-150" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                    {p.type}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {p.title}
                  </h3>
                </div>
                {p.featured && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                    <FaStar /> Featured
                  </span>
                )}
              </div>

              <p className="relative mt-4 flex-1 leading-relaxed text-slate-400">
                {p.description}
              </p>

              {p.highlights && (
                <ul className="relative mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-lg border border-teal-400/20 bg-teal-400/5 px-3 py-1 text-xs font-medium text-teal-200"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="relative mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-teal-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:shadow-lg hover:shadow-teal-400/30"
                  >
                    <FaExternalLinkAlt /> Live Site
                  </a>
                )}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
