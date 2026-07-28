import { useState, useEffect, useRef } from "react";
import { useLang } from "../i18n";

const links = ["experience", "skills", "education", "projects", "contact"] as const;

type Theme = "ocean" | "matrix" | "neon" | "light";
const THEMES: Theme[] = ["ocean", "matrix", "neon", "light"];
const themeSwatch: Record<Theme, string> = {
  ocean: "linear-gradient(135deg,#0ea5e9,#10b981)",
  matrix: "linear-gradient(135deg,#22c55e,#a3e635)",
  neon: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  light: "linear-gradient(135deg,#e2e8f0,#ffffff)",
};

export default function Navbar() {
  const { t, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("dc-theme") as Theme | null;
    return saved && THEMES.includes(saved) ? saved : "ocean";
  });
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dc-theme", theme);
  }, [theme]);

  // Close theme menu on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-slate-700/60 bg-slate-900/80 shadow-lg shadow-black/20"
          : "border-transparent bg-slate-900/50"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Dynamic text logo */}
        <a href="#hero" className="group flex items-center gap-1 font-mono text-lg font-bold tracking-tight">
          <span className="text-sky-400 transition-colors group-hover:text-sky-300">DC</span>
          <span className="text-slate-500">.</span>
          <span className="text-emerald-400 transition-colors group-hover:text-emerald-300">QA</span>
          <span className="ms-1 h-4 w-[2px] animate-pulse bg-sky-400/70" />
        </a>

        {/* Desktop anchor links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-sky-400"
            >
              {t.nav[l]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme picker */}
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => setThemeOpen((o) => !o)}
              aria-label={t.nav.themeLabel}
              title={t.nav.themeLabel}
              className="flex items-center gap-2 rounded-lg border border-slate-600/70 bg-slate-800/70 px-2.5 py-1.5 transition-all hover:border-sky-400/60 active:scale-95"
            >
              <span
                className="h-4 w-4 rounded-full border border-white/20"
                style={{ background: themeSwatch[theme] }}
              />
              <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.1 13.7a8 8 0 1115.8 0c-.4 2.2-2.3 3.3-4.2 2.7-1.3-.4-2.7-.2-3.4 1-.5.8-1.5 1.6-3 1.6a5.3 5.3 0 01-5.2-5.3zM8 10.5h.01M12 7.5h.01M16 10.5h.01" />
              </svg>
            </button>

            {themeOpen && (
              <div className="absolute end-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-slate-600/60 bg-slate-900/95 shadow-2xl shadow-black/40 backdrop-blur-md">
                <p className="border-b border-slate-700/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t.nav.themeLabel}
                </p>
                {THEMES.map((th) => (
                  <button
                    key={th}
                    onClick={() => {
                      setTheme(th);
                      setThemeOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-slate-800 ${
                      theme === th ? "text-sky-300" : "text-slate-200"
                    }`}
                  >
                    <span
                      className="h-4 w-4 rounded-full border border-white/20"
                      style={{ background: themeSwatch[th] }}
                    />
                    {t.nav.themes[th]}
                    {theme === th && (
                      <svg className="ms-auto h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language state toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 font-mono text-sm font-semibold text-sky-300 transition-all hover:border-sky-400/70 hover:bg-sky-500/20 active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
            </svg>
            {t.nav.langToggle}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 text-slate-300 md:hidden"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-700/60 bg-slate-900/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-2">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-sky-400"
              >
                {t.nav[l]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
