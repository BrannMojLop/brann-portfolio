"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { messages, type Locale, type SiteMessages } from "@/lib/i18n";
import { LOCALE_COOKIE_NAME } from "@/lib/locale-storage";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: SiteMessages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = LOCALE_COOKIE_NAME;

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
