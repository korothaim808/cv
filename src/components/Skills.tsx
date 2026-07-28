import { useLang } from "../i18n";

const catIcons = [
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  "M11.42 15.17L17.25 21A2.65 2.65 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085",
  "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
];

const catAccents = [
  { icon: "bg-sky-500/15 text-sky-400", chip: "border-sky-500/25 bg-sky-500/10 text-sky-300" },
  { icon: "bg-emerald-500/15 text-emerald-400", chip: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300" },
  { icon: "bg-cyan-500/15 text-cyan-400", chip: "border-cyan-500/25 bg-cyan-500/10 text-cyan-300" },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-sky-300">
            {t.skills.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient">{t.skills.title}</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.skills.cats.map((cat, i) => (
            <div
              key={cat.name}
              className="card-glass card-glow group rounded-3xl p-7 transition-all hover:-translate-y-1.5"
            >
              <div className="mb-6 flex items-center gap-3.5">
                <span className={`grid h-12 w-12 place-items-center rounded-xl transition-transform group-hover:scale-110 ${catAccents[i].icon}`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={catIcons[i]} />
                  </svg>
                </span>
                <h3 className="text-lg font-bold text-white">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold ${catAccents[i].chip}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
