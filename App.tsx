import { useState } from 'react';

const sections = {
  en: {
    hero: 'David Cohen\nQA Engineer | Specializing in Financial Systems & E2E Validation',
    experience: 'Qualitest (Bank Hapoalim Project) • Agile/Scrum environment on critical core banking architectures. • API Testing via REST (Postman) & Log analysis via Splunk. • Database verification using SQL (Teradata).',
    skills: 'Tools: Jira, Xray, TestRail, Postman, Splunk, DevTools.\nMethodologies: STP, STD, STR, Regression, Sanity, E2E.\nAutomation Ready: SQL (JOINs), HTML, CSS, AI Workflows.',
    education: 'The Automation College (Gal Matalon) • QA & Automation Certification (2023–2024).',
  },
  he: {
    hero: 'דוד כהן\nבודק תוכנה | מומחה במערכות פיננסיות ובדיקות מקצה לקצה',
    experience: 'Qualitest (פרויקט בנק הפועלים) • סביבת Agile/Scrum על ארכיטקטורות בנקאיות קריטיות. • בדיקות API דרך REST (Postman) וניתוח לוגים דרך Splunk. • אימות מסדי נתונים באמצעות SQL (Teradata).',
    skills: 'כלים: Jira, Xray, TestRail, Postman, Splunk, DevTools.\nשיטות עבודה: STP, STD, STR, רגרסיה, בדיקות שפיות, E2E.\nמוכן לאוטומציה: SQL (JOINs), HTML, CSS, תהליכי AI.',
    education: 'המכללה לאוטומציה (גל מטלון) • תעודת QA ואוטומציה (2023–2024).',
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'he'>('en');
  const dir = lang === 'he' ? 'rtl' : 'ltr';
  const t = sections[lang];

  return (
    <div dir={dir} className="min-h-screen bg-slate-950 text-white font-[Inter] selection:bg-amber-400/30">
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <span className="font-extrabold text-xl tracking-tighter">DC</span>
        <button onClick={() => setLang(l => l === 'en' ? 'he' : 'en')} className="text-sm border border-white/20 px-3 py-1 rounded-full hover:bg-white/10 transition">{lang === 'en' ? 'עברית' : 'English'}</button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight whitespace-pre-line">{t.hero}</h1>
          <a href="#" className="inline-block bg-amber-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition">Download CV (PDF)</a>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Experience</h3>
            <p className="text-sm text-white/80 whitespace-pre-line">{t.experience}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Technical Skills</h3>
            <p className="text-sm text-white/80 whitespace-pre-line">{t.skills}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Education</h3>
            <p className="text-sm text-white/80 whitespace-pre-line">{t.education}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
