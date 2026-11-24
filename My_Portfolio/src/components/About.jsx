import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { about, highlights, stats, profile } from "../data";
import { FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from "react-icons/fa";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="About Me"
          title="Turning ideas into clean, working software"
        />

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div
            className="space-y-5 text-lg leading-relaxed text-slate-400 lg:col-span-3"
            data-aos="fade-right"
          >
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="flex flex-wrap gap-3 pt-2 text-sm">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-300">
                <FaMapMarkerAlt className="text-teal-300" /> {profile.location}
              </span>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-300">
                <FaGraduationCap className="text-teal-300" /> BEng (Hons)
                Software Engineering
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-300 hover:text-teal-300"
              >
                <FaEnvelope className="text-teal-300" /> {profile.email}
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-2">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                data-aos="fade-left"
                data-aos-delay={i * 120}
                className="glass glow-card flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-linear-to-br from-teal-400/20 to-violet-500/20 text-2xl text-teal-300">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* stats */}
        {/* <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
              className="glass glow-card rounded-2xl p-6 text-center"
            >
              <div className="gradient-text font-display text-4xl font-bold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
