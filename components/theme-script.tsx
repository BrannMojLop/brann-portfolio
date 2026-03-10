import { THEME_COOKIE_NAME } from "@/lib/theme-storage";

export function ThemeScript() {
  const script = `
    (() => {
      const savedTheme = window.localStorage.getItem('${THEME_COOKIE_NAME}');
      const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
      document.documentElement.classList.toggle('light', theme === 'light');
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.style.colorScheme = theme;
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
