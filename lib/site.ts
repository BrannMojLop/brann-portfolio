function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_ENV === "production") {
    throw new Error("NEXT_PUBLIC_SITE_URL must be configured for production deployments.");
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Brandon Mojica Lopez | Software Engineer",
  shortName: "Brandon Mojica",
  description:
    "Software engineer portfolio focused on software architecture, backend systems, ERP platforms, financial workflows, and business-critical operations.",
  url: resolveSiteUrl(),
  ogImage: "/opengraph-image",
  engineeringOgImage: "/engineering/opengraph-image",
  keywords: [
    "Software Engineer Portfolio",
    "Software Architecture",
    "Backend Systems",
    "ERP Platforms",
    "Financial Workflows",
    "Enterprise Software",
    "PostgreSQL",
    "System Design",
    "Specification-driven Development",
    "Engineering Workflow",
  ],
  author: {
    name: "Brandon Mojica Lopez",
    role: "Software Engineer focused on software architecture and backend systems",
    jobTitle: "Head of Systems",
    company: "Elements Of Steel",
  },
  links: {
    github: "https://github.com/BrannMojLop",
    linkedin: "https://www.linkedin.com/in/brandon-mojica-dev/",
    email: "mailto:brandonmojica95@gmail.com",
  },
} as const;

export const localizedSiteMetadata = {
  en: {
    title: "Brandon Mojica | Software Engineer",
    description:
      "Software engineer focused on software architecture and backend systems. I design and lead the evolution of business-critical platforms around real operational constraints.",
  },
  es: {
    title: "Brandon Mojica | Ingeniero de Software",
    description:
      "Ingeniero de software enfocado en arquitectura de software y sistemas backend. Diseño y lidero la evolución de plataformas críticas para el negocio alrededor de restricciones operativas reales.",
  },
} as const;
