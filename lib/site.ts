function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_ENV === "production") {
    throw new Error("NEXT_PUBLIC_SITE_URL must be configured for production deployments.");
  }

  return "https://brandonmojica.dev";
}

export const siteConfig = {
  name: "Brandon Mojica Lopez | Software Engineer",
  shortName: "Brandon Mojica",
  description:
    "Software Engineer portfolio focused on Backend and Full-Stack engineering for business-critical enterprise systems.",
  url: resolveSiteUrl(),
  ogImage: "/opengraph-image",
  engineeringOgImage: "/engineering/opengraph-image",
  author: {
    name: "Brandon Mojica Lopez",
    role: "Software Engineer · Backend & Full-Stack",
  },
  links: {
    github: "https://github.com/BrannMojLop",
    linkedin: "https://www.linkedin.com/in/brandon-mojica-dev/",
    email: "mailto:brandonmojica95@gmail.com",
  },
} as const;

export const localizedSiteKeywords = {
  en: [
    "Software Engineer Portfolio",
    "Backend and Full-Stack Engineering",
    "Python FastAPI",
    "React",
    "AWS",
    "Systems Architecture",
    "ERP Platforms",
    "Financial Workflows",
    "Enterprise Software",
    "AI-assisted Software Engineering",
  ],
  es: [
    "Portafolio de ingeniero de software",
    "Ingeniería Backend y Full-Stack",
    "Python FastAPI",
    "React",
    "AWS",
    "Arquitectura de sistemas",
    "Plataformas ERP",
    "Flujos financieros",
    "Software empresarial",
    "Ingeniería de software asistida por IA",
  ],
} as const;

export const localizedSiteMetadata = {
  en: {
    title: "Brandon Mojica | Software Engineer · Backend & Full-Stack",
    description:
      "Software Engineer with backend strength and Full-Stack experience, building business-critical software across enterprise systems.",
  },
  es: {
    title: "Brandon Mojica | Ingeniero de Software · Backend y Full-Stack",
    description:
      "Ingeniero de software con fortaleza en backend y experiencia Full-Stack, enfocado en software empresarial para operaciones críticas.",
  },
} as const;
