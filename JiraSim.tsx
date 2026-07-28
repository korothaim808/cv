import { useLang } from "../i18n";

export default function JiraSim() {
  const { t } = useLang();

  return (
    <section id="jira" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-sky-300">
            {t.jira.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient">{t.jira.title}</span>
          </h2>
        </div>

        {/* Ticket frame */}
        <div className="card-glass card-glow overflow-hidden rounded-3xl transition-shadow">
          {/* Ticket header bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 bg-slate-900/70 px-5 py-3.5">
            <span className="flex items-center gap-2.5 font-mono text-xs text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]" />
              {t.jira.ticketLabel}
              <span className="rounded bg-slate-800 px-2 py-0.5 font-bold text-sky-300" dir="ltr">
                {t.jira.ticketId}
              </span>
            </span>
            <span className="rounded-md border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-rose-400" dir="ltr">
              {t.jira.priority}
            </span>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            {/* Summary */}
            <div>
              <p className="mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {t.jira.summaryLabel}
              </p>
              <p className="font-mono text-sm font-bold leading-relaxed text-slate-100 sm:text-base">
                {t.jira.summary}
              </p>
            </div>

            {/* Env + repro */}
            <div className="grid gap-6 border-t border-dashed border-slate-700/70 pt-5 md:grid-cols-2">
              <div>
                <p className="mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {t.jira.envLabel}
                </p>
                <p className="font-mono text-sm font-semibold text-slate-200">{t.jira.env}</p>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {t.jira.reproLabel}
                </p>
                <p className="whitespace-pre-line font-mono text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                  {t.jira.repro}
                </p>
              </div>
            </div>

            {/* Expected vs actual */}
            <div className="grid gap-4 border-t border-dashed border-slate-700/70 pt-5 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-500/5 p-4">
                <p className="mb-1.5 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  ✓ {t.jira.expectedLabel}
                </p>
                <p className="font-mono text-xs leading-relaxed text-emerald-200 sm:text-[13px]">
                  {t.jira.expected}
                </p>
              </div>
              <div className="rounded-xl border border-rose-500/25 bg-rose-500/5 p-4">
                <p className="mb-1.5 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  ✗ {t.jira.actualLabel}
                </p>
                <p className="font-mono text-xs leading-relaxed text-rose-300 sm:text-[13px]">
                  {t.jira.actual}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
