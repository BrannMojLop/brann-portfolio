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
  name: "Brandon Mojica Lopez | Software Engineer & Systems Architect",
  shortName: "Brandon Mojica",
  description:
    "Software Engineer portfolio focused on ERP systems, backend architecture, FastAPI services, financial platforms, and enterprise software built for real operations.",
  url: resolveSiteUrl(),
  ogImage: "/opengraph-image",
  engineeringOgImage: "/engineering/opengraph-image",
  keywords: [
    "Software Engineer Portfolio",
    "ERP Systems Engineer",
    "Python FastAPI Backend Engineer",
    "Systems Architect",
    "Enterprise Software Engineer",
    "Financial Systems Engineer",
  ],
  author: {
    name: "Brandon Mojica Lopez",
    role: "Software Engineer and Systems Architect",
    jobTitle: "Head of Systems / Lead Software Engineer",
    company: "Elements Of Steel",
  },
  links: {
    github: "https://github.com/BrannMojLop",
    linkedin: "https://www.linkedin.com/in/brandon-mojica-dev/",
    email: "mailto:brandonmojica95@gmail.com",
  },
} as const;
