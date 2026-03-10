import { cookies } from "next/headers";

import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { LOCALE_COOKIE_NAME } from "@/lib/locale-storage";

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  return cookieValue && isLocale(cookieValue) ? cookieValue : defaultLocale;
}
