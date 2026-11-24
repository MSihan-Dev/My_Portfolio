import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { contactItems, profile, socials } from '../data'
import { FaPaperPlane } from 'react-icons/fa'

const field =
  'w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Opens the visitor's email app with the message pre-filled (no backend required).
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/60 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Hiring in Dubai or have a project in mind? Send me a message and I'll get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2" data-aos="fade-right">
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-teal-400/20 to-violet-500/20 text-xl text-teal-300">
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                    <p className="break-words text-sm font-medium text-slate-200">{value}</p>
                  </div>
                </>
              )
              const cls = 'glass glow-card flex items-center gap-4 rounded-2xl p-4'
              return href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              )
            })}

            <div className="flex gap-3 pt-2">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="glass grid h-12 w-12 place-items-center rounded-xl text-xl text-slate-300 transition hover:-translate-y-1 hover:text-teal-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} data-aos="fade-left" className="glass space-y-5 rounded-3xl p-7 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Your name</label>
                <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="John Doe" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">Your email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="john@company.com" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" name="message" rows="6" required value={form.message} onChange={onChange} placeholder="Tell me about the role or project…" className={`${field} resize-none`} />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-teal-400 to-cyan-400 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-500/25 transition hover:-translate-y-0.5 hover:shadow-teal-400/40"
            >
              Send Message
              <FaPaperPlane className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            {sent && <p className="text-sm text-teal-300">Opening your email app…</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
