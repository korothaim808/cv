import { useLang } from "../i18n";
import { EMAIL, LINKEDIN, PHONE_DISPLAY, PHONE_TEL, openLinkedIn } from "./Hero";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-sky-300">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient">{t.contact.title}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">{t.contact.sub}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* Phone */}
          <a
            href={`tel:${PHONE_TEL}`}
            className="card-glass card-glow group flex flex-col items-center gap-3.5 rounded-3xl p-8 text-center transition-all hover:-translate-y-1.5"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500/25 to-emerald-500/5 text-emerald-400 transition-transform group-hover:scale-110">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.2a1 1 0 01.98.8l.72 3.6a1 1 0 01-.55 1.1L6.6 9.4a13.4 13.4 0 006 6l1.3-1.75a1 1 0 011.1-.55l3.6.72a1 1 0 01.8.98V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
              </svg>
            </span>
            <span className="text-base font-bold text-white">{t.contact.phoneLabel}</span>
            <span className="font-mono text-sm font-semibold text-emerald-300" dir="ltr">📱 {PHONE_DISPLAY}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="card-glass card-glow group flex flex-col items-center gap-3.5 rounded-3xl p-8 text-center transition-all hover:-translate-y-1.5"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-500/25 to-sky-500/5 text-sky-400 transition-transform group-hover:scale-110">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="text-base font-bold text-white">{t.contact.emailLabel}</span>
            <span className="break-all font-mono text-sm font-semibold text-sky-300" dir="ltr">{EMAIL}</span>
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openLinkedIn}
            className="card-glass card-glow group flex flex-col items-center gap-3.5 rounded-3xl p-8 text-center transition-all hover:-translate-y-1.5"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500/25 to-cyan-500/5 text-cyan-300 transition-transform group-hover:scale-110">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34V10.2H5.67v8.14h2.67zM7 8.98a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm11.34 9.36v-4.67c0-2.5-1.34-3.67-3.12-3.67-1.44 0-2.09.8-2.45 1.36V10.2h-2.67c.04.76 0 8.14 0 8.14h2.67v-4.55c0-.24.02-.48.09-.66.19-.48.63-.98 1.37-.98.96 0 1.35.74 1.35 1.82v4.37h2.76z" />
              </svg>
            </span>
            <span className="text-base font-bold text-white">{t.contact.linkedinLabel}</span>
            <span className="text-sm font-semibold text-cyan-300">{t.contact.linkedinCta}</span>
            <span className="break-all font-mono text-[11px] text-slate-500" dir="ltr">
              linkedin.com/in/david-cohen-17b15a292
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
