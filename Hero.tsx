import { useLang } from "../i18n";

export const EMAIL = "korothaim808@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/david-cohen-17b15a292";
export const PHONE_DISPLAY = "054-9495729";
export const PHONE_TEL = "+972549495729";

/** Opens LinkedIn in a new tab; if the popup is blocked (e.g. sandboxed
 *  preview iframes), falls back to navigating the current/top window. */
export function openLinkedIn(e: { preventDefault: () => void }) {
  e.preventDefault();
  const win = window.open(LINKEDIN, "_blank", "noopener,noreferrer");
  if (!win) {
    try {
      (window.top ?? window).location.href = LINKEDIN;
    } catch {
      window.location.href = LINKEDIN;
    }
  }
}

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="hero" className="relative overflow-hidden py-16 sm:py-24">
      {/* Ambient glow + grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 start-1/4 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute top-40 end-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Text column */}
        <div className="animate-fade-up text-center lg:text-start">
          {/* Pulsating live-status badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
            <span className="text-gradient">{t.hero.title}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            {t.hero.subtitle}
          </p>

          {/* Phone display */}
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-800/60 px-4 py-2 font-mono text-base font-semibold text-slate-100" dir="ltr">
            📱 {PHONE_DISPLAY}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-sky-500/30 transition-all hover:shadow-sky-400/50 hover:brightness-110 active:scale-95"
            >
              {t.hero.ctaEmail}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openLinkedIn}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600/80 bg-slate-800/70 px-6 py-3.5 font-bold text-slate-100 backdrop-blur transition-all hover:border-sky-400/60 hover:bg-slate-700/70 hover:text-sky-300 active:scale-95"
            >
              {t.hero.ctaLinkedin}
            </a>
          </div>
        </div>

        {/* Terminal card */}
        <div className="animate-fade-up animate-floaty" style={{ animationDelay: "120ms" }}>
          <div dir="ltr" className="card-glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-slate-700/60 bg-slate-900/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ms-3 font-mono text-xs text-slate-500" dir={lang === "he" ? "rtl" : "ltr"}>
                {t.hero.terminalTitle}
              </span>
            </div>
            <div className="space-y-3 p-6 font-mono text-[13px] leading-relaxed sm:text-sm" dir={lang === "he" ? "rtl" : "ltr"}>
              {t.hero.terminal.map((line, i) => (
                <p
                  key={i}
                  className={
                    line.startsWith("$")
                      ? "text-slate-300"
                      : line.startsWith("→")
                        ? "font-bold text-sky-300"
                        : "text-emerald-400"
                  }
                  dir={line.startsWith("$") ? "ltr" : undefined}
                >
                  {line}
                </p>
              ))}
              <p className="text-slate-500" dir="ltr">
                $ <span className="cursor-blink text-slate-300">▊</span>
              </p>
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[11px] text-slate-500">
            {t.hero.terminalFooter}
          </p>
        </div>
      </div>
    </section>
  );
}
