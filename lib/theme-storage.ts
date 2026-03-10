export const THEME_COOKIE_NAME = "brann-portfolio-theme";

export type Theme = "dark" | "light";

export const defaultTheme: Theme = "dark";

export function isTheme(value: string): value is Theme {
  return value === "dark" || value === "light";
}
