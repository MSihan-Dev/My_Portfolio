import { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi";
import { profile, socials, skillGroups } from "../data";

function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pause = 1600) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => i + 1);
      }
      setText(
        deleting
          ? word.slice(0, text.length - 1)
          : word.slice(0, text.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const marquee = skillGroups.flatMap((g) => g.items);
  const cvHref = `${import.meta.env.BASE_URL}${profile.cv.replace(/^\/+/, "")}`;
  const photoSrc = `${import.meta.env.BASE_URL}${profile.photo.replace(/^\/+/, "")}`;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-24"
    >
      {/* background effects */}
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -left-24 top-20 h-96 w-96 animate-float rounded-full bg-teal-500/25 blur-[110px]" />
      <div className="absolute -right-24 bottom-10 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 animate-float rounded-full bg-cyan-500/15 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p
            data-aos="fade-down"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1.5 text-sm text-teal-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
            </span>
            {profile.availability}
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 h-10 font-display text-xl font-semibold text-slate-200 sm:text-2xl md:text-3xl"
          >
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 animate-blink bg-teal-400 sm:h-7" />
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
          >
            {profile.tagline}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-teal-400 to-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-500/25 transition hover:-translate-y-0.5 hover:shadow-teal-400/40"
            >
              View My Work
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={cvHref}
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-teal-400/50"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="glass grid h-12 w-12 place-items-center rounded-xl text-xl text-slate-300 transition hover:-translate-y-1 hover:border-teal-400/60 hover:text-teal-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* photo */}
        <div
          className="order-1 flex justify-center lg:order-2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="relative">
            <div className="absolute -inset-3 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#2dd4bf,#22d3ee,#8b5cf6,#2dd4bf)] opacity-90 blur-[2px]" />
            <div className="absolute -inset-3 rounded-full bg-ink/20" />
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-[6px] border-slate-950 bg-white sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <img
                src={photoSrc}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="glass absolute -left-4 top-6 animate-float rounded-2xl px-4 py-2 text-sm font-semibold text-teal-300 shadow-xl sm:-left-10">
              ⚛️ React
            </div>
            <div className="glass absolute -right-2 top-1/2 animate-float-slow rounded-2xl px-4 py-2 text-sm font-semibold text-cyan-300 shadow-xl sm:-right-10">
              🟢 Node.js
            </div>
            <div className="glass absolute -bottom-2 left-2 animate-float rounded-2xl px-4 py-2 text-sm font-semibold text-violet-300 shadow-xl sm:left-0">
              🍃 MongoDB
            </div>
          </div>
        </div>
      </div>

      {/* tech marquee */}
      <div className="absolute inset-x-0 bottom-14 z-10 hidden overflow-hidden opacity-60 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:block">
        <div className="flex w-max animate-marquee gap-10 text-slate-500">
          {[...marquee, ...marquee].map(({ name, icon: Icon }, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap text-sm"
            >
              <Icon className="text-lg" /> {name}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 animate-bounce text-2xl text-teal-300/80"
      >
        <HiChevronDoubleDown />
      </a>
    </section>
  );
}
