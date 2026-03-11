import { THEME_COOKIE_NAME } from "@/lib/theme-storage";

export function ThemeScript() {
  const script = `
    (() => {
      const savedTheme = window.localStorage.getItem('${THEME_COOKIE_NAME}');
      const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
      document.documentElement.classList.toggle('light', theme === 'light');
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.style.colorScheme = theme;

      const branding = {
        dark: {
          faviconIco: '/favicon-dark.ico',
          faviconSvg: '/favicon-dark.svg',
          faviconPng96: '/favicon-dark-96x96.png',
          appleTouchIcon: '/apple-touch-icon-dark.png',
          manifest: '/site.webmanifest',
          themeColor: '#121212',
        },
        light: {
          faviconIco: '/favicon-light.ico',
          faviconSvg: '/favicon-light.svg',
          faviconPng96: '/favicon-light-96x96.png',
          appleTouchIcon: '/apple-touch-icon-light.png',
          manifest: '/site-light.webmanifest',
          themeColor: '#FFFFFF',
        },
      };

      const upsertLink = (selector, attributes) => {
        let link = document.head.querySelector(selector);
        if (!link) {
          link = document.createElement('link');
          document.head.appendChild(link);
        }
        Object.entries(attributes).forEach(([key, value]) => link.setAttribute(key, value));
      };

      const upsertMeta = (selector, attributes) => {
        let meta = document.head.querySelector(selector);
        if (!meta) {
          meta = document.createElement('meta');
          document.head.appendChild(meta);
        }
        Object.entries(attributes).forEach(([key, value]) => meta.setAttribute(key, value));
      };

      const assets = branding[theme];
      upsertLink('link[data-branding="favicon-ico"]', {
        rel: 'icon',
        href: assets.faviconIco,
        sizes: 'any',
        'data-branding': 'favicon-ico',
      });
      upsertLink('link[data-branding="favicon-svg"]', {
        rel: 'icon',
        href: assets.faviconSvg,
        type: 'image/svg+xml',
        'data-branding': 'favicon-svg',
      });
      upsertLink('link[data-branding="favicon-png"]', {
        rel: 'icon',
        href: assets.faviconPng96,
        sizes: '96x96',
        type: 'image/png',
        'data-branding': 'favicon-png',
      });
      upsertLink('link[data-branding="apple-touch-icon"]', {
        rel: 'apple-touch-icon',
        href: assets.appleTouchIcon,
        sizes: '180x180',
        type: 'image/png',
        'data-branding': 'apple-touch-icon',
      });
      upsertLink('link[data-branding="shortcut-icon"]', {
        rel: 'shortcut icon',
        href: assets.faviconIco,
        'data-branding': 'shortcut-icon',
      });
      upsertLink('link[data-branding="manifest"]', {
        rel: 'manifest',
        href: assets.manifest,
        'data-branding': 'manifest',
      });
      upsertMeta('meta[name="theme-color"]', {
        name: 'theme-color',
        content: assets.themeColor,
      });
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
