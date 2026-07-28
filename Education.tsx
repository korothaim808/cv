import { useLang } from "../i18n";

export default function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-sky-300">
            {t.edu.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient">{t.edu.title}</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education card */}
          <div className="card-glass card-glow rounded-3xl p-7 transition-shadow sm:p-9">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500/25 to-emerald-500/5 text-emerald-400">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 8l10 5 8-4v6h2V8L12 3zM5 12.5V16c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.5l-7 3.5-7-3.5z" />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-bold leading-snug text-white">{t.edu.college}</h3>
                <p className="mt-1.5 font-mono text-xs font-bold text-emerald-300">{t.edu.date}</p>
              </div>
            </div>
            <ul className="mt-7 space-y-4">
              {t.edu.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Automation Pipeline placeholder */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-dashed border-sky-500/40 bg-slate-800/40 p-7 backdrop-blur sm:p-9">
            <div className="pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-3 text-lg font-bold text-white">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-500/25 to-sky-500/5 text-sky-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
                  </svg>
                </span>
                {t.edu.pipeline.title}
              </h3>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-[11px] font-bold text-emerald-300">
                {t.edu.pipeline.badge}
              </span>
            </div>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">{t.edu.pipeline.desc}</p>

            <div className="mt-7 space-y-3" dir="ltr">
              <a
                href="https://github.com/korothaim808/qa-automation-portfolio/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/70 px-4 py-3.5 transition-colors hover:border-sky-500/40"
              >
                <svg className="h-5 w-5 shrink-0 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5A10 10 0 0022 12 10 10 0 0012 2z" />
                </svg>
                <span className="font-mono text-xs text-slate-300">qa-automation-portfolio</span>
                <span className="ms-auto flex h-2 w-2 rounded-full bg-emerald-400" />
              </a>
            </div>
            <p className="mt-5 text-center font-mono text-[11px] text-slate-500">{t.edu.pipeline.cta}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
