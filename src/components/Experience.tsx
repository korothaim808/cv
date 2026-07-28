import { useLang } from "../i18n";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-sky-300">
            {t.exp.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient">{t.exp.title}</span>
          </h2>
        </div>

        <div className="card-glass card-glow rounded-3xl p-6 transition-shadow sm:p-9">
          {/* Role header */}
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-700/60 pb-6">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{t.exp.company}</h3>
              <p className="mt-1.5 font-semibold text-sky-400">{t.exp.role}</p>
            </div>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-bold text-emerald-300">
              {t.exp.date}
            </span>
          </div>

          {/* Timeline */}
          <ol className="relative mt-8 space-y-7 border-s-2 border-slate-700/70 ps-7">
            {t.exp.bullets.map((b, i) => (
              <li key={i} className="group relative">
                <span className="absolute -start-[37px] top-0.5 grid h-5 w-5 place-items-center rounded-full border-2 border-sky-500/70 bg-slate-900 transition-all group-hover:border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                <p className="text-sm leading-relaxed text-slate-200 sm:text-[15px]">{b.text}</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {b.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-sky-500/25 bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-sky-300 transition-colors group-hover:border-sky-400/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
