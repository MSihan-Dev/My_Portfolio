export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14 text-center" data-aos="fade-up">
      <span className="inline-block rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-slate-400">{subtitle}</p>}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-teal-400 via-cyan-400 to-violet-500" />
    </div>
  )
}
