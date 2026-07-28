import { useLang } from "../i18n";

export const GITHUB_REPO = "https://github.com/korothaim808/qa-automation-portfolio/tree/main";

/** Opens GitHub in a new tab with popup-blocked fallback (same as LinkedIn). */
function openGitHub(e: { preventDefault: () => void }) {
  e.preventDefault();
  const win = window.open(GITHUB_REPO, "_blank", "noopener,noreferrer");
  if (!win) {
    try {
      (window.top ?? window).location.href = GITHUB_REPO;
    } catch {
      window.location.href = GITHUB_REPO;
    }
  }
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5A10 10 0 0022 12 10 10 0 0012 2z" />
  </svg>
);

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-sky-300">
            {t.projects.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient">{t.projects.title}</span>
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs font-bold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t.projects.badge}
            </span>
            <p className="text-slate-300">{t.projects.sub}</p>
          </div>
        </div>

        {/* Featured repo card */}
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          onClick={openGitHub}
          className="card-glass card-glow group block overflow-hidden rounded-3xl transition-all hover:-translate-y-1.5"
        >
          {/* Repo header bar */}
          <div className="flex items-center gap-3 border-b border-slate-700/60 bg-slate-900/60 px-6 py-4" dir="ltr">
            <GithubIcon className="h-6 w-6 shrink-0 text-slate-300" />
            <span className="truncate font-mono text-sm text-slate-400">
              github.com/<span className="font-bold text-slate-100">korothaim808</span>/
              <span className="font-bold text-sky-300">{t.projects.repoName}</span>
            </span>
            <span className="ms-auto hidden items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-300 sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {t.projects.statValue}
            </span>
          </div>

          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-white transition-colors group-hover:text-sky-300 sm:text-2xl">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-500/25 to-sky-500/5 text-sky-400 transition-transform group-hover:scale-110">
                  <GithubIcon className="h-6 w-6" />
                </span>
                {t.projects.repoName}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                {t.projects.repoDesc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.projects.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-sky-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <span className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-sky-500/30 transition-all group-hover:shadow-sky-400/50 group-hover:brightness-110">
                <GithubIcon className="h-5 w-5" />
                {t.projects.cta}
                <svg className="h-4 w-4 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="font-mono text-[11px] text-slate-500" dir="ltr">
                {t.projects.statLabel}: main ✓
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
