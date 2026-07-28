import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { en } from "./locales/en";
import { he } from "./locales/he";

export type Lang = "en" | "he";
export type Translations = typeof en;

const dictionaries: Record<Lang, Translations> = { en, he };

interface LangContextValue {
  lang: Lang;
  t: Translations;
  dir: "ltr" | "rtl";
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("dc-lang") as Lang | null)
        : null;
    return saved === "he" || saved === "en" ? saved : "en";
  });

  const dir: "ltr" | "rtl" = lang === "he" ? "rtl" : "ltr";

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", dir);
    html.setAttribute("lang", lang);
    localStorage.setItem("dc-lang", lang);
  }, [lang, dir]);

  const toggle = () => setLang((p) => (p === "en" ? "he" : "en"));

  return (
    <LangContext.Provider value={{ lang, t: dictionaries[lang], dir, toggle, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
