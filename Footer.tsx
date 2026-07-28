import { useLang } from "../i18n";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6">
        <span className="font-mono text-lg font-bold">
          <span className="text-sky-400">DC</span>
          <span className="text-slate-500">.</span>
          <span className="text-emerald-400">QA</span>
        </span>
        <p className="text-sm font-semibold text-slate-300">{t.footer.tagline}</p>
        <p className="text-xs text-slate-600">
          © {year} David Cohen · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
