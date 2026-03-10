import { cookies } from "next/headers";

import { defaultTheme, isTheme, type Theme, THEME_COOKIE_NAME } from "@/lib/theme-storage";

export async function getRequestTheme(): Promise<Theme> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(THEME_COOKIE_NAME)?.value;

  return cookieValue && isTheme(cookieValue) ? cookieValue : defaultTheme;
}
