"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/routing";
import type { EngineeringPost } from "@/lib/engineering";

const recentPostSlugs = [
  "specification-driven-development-complex-changes",
  "specialized-ai-agents-software-engineering",
  "postgresql-rls-multi-tenant-saas",
] as const;

type EngineeringTheme = "architecture" | "backend-engineering" | "financial-systems";

export function EngineeringContent({ posts }: { posts: EngineeringPost[] }) {
  const { locale, t } = useLanguage();
  const recentPosts = recentPostSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is EngineeringPost => Boolean(post));
  const recentSlugs = new Set<string>(recentPostSlugs);
  const earlierPosts = posts.filter((post) => !recentSlugs.has(post.slug));

  const themeCopy: Record<EngineeringTheme, { title: string; description: string }> = {
    architecture: t.engineering.themes.architecture,
    "backend-engineering": t.engineering.themes.backendEngineering,
    "financial-systems": t.engineering.themes.financialSystems,
  };

  const labels =
    locale === "en"
      ? {
          recent: "Recent Engineering Notes",
          earlier: "Earlier Engineering Notes",
          read: "Read note",
          currentWork: "CURRENT WORK",
          earlierWork: "EARLIER WORK",
          topic: "Topic",
        }
      : {
          recent: "Notas de ingeniería recientes",
          earlier: "Notas de ingeniería anteriores",
          read: "Leer nota",
          currentWork: "TRABAJO ACTUAL",
          earlierWork: "TRABAJO ANTERIOR",
          topic: "Tema",
        };

  return (
    <Section
      title={t.engineering.title}
      description={t.engineering.description}
      titleAs="h1"
      className="engineering-page relative overflow-hidden"
    >
      <div aria-hidden className="engineering-ambient">
        <div className="engineering-grid" />
      </div>

      <div className="space-y-12 md:space-y-16">
        <div className="engineering-intro">
          <span className="engineering-intro-line" />
        </div>

        <section aria-labelledby="engineering-recent-title" className="engineering-recent space-y-6">
          <header className="engineering-list-heading flex flex-wrap items-end justify-between gap-4 border-b border-border/70 pb-4">
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/80 md:text-[11px]">
                {labels.currentWork}
              </p>
              <h2 id="engineering-recent-title" className="text-[1.55rem] font-semibold tracking-[-0.03em] md:text-[1.9rem]">
                {labels.recent}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              {t.engineering.currentThemesDescription}
            </p>
          </header>

          <ol className="engineering-recent-list">
            {recentPosts.map((post, index) => (
              <li key={post.slug}>
                <article className="engineering-recent-note">
                  <div className="engineering-recent-note-main">
                    <div className="engineering-recent-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/85">
                          {post.tags[0] ?? themeCopy[post.theme].title}
                        </p>
                        {post.articleType ? (
                          <span className="text-xs text-muted-foreground">{post.articleType}</span>
                        ) : null}
                      </div>
                      <h3 className="max-w-3xl text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] md:text-[1.65rem]">
                        <Link
                          href={localizePath(locale, `/engineering/${post.slug}`)}
                          aria-label={`${labels.read}: ${post.title}`}
                          className="engineering-note-title-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="max-w-3xl text-[0.98rem] leading-7 text-muted-foreground">{post.summary}</p>
                    </div>
                  </div>

                  <div className="engineering-recent-note-meta">
                    <div>
                      <p className="engineering-note-meta-label">{t.engineering.metadata.publishedOn}</p>
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    {post.readingTime ? (
                      <div>
                        <p className="engineering-note-meta-label">{t.engineering.metadata.readingTime}</p>
                        <span>{post.readingTime}</span>
                      </div>
                    ) : null}
                    <Link
                      href={localizePath(locale, `/engineering/${post.slug}`)}
                      aria-label={`${labels.read}: ${post.title}`}
                      className="engineering-note-read-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {labels.read}
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="engineering-earlier-title" className="engineering-earlier space-y-5">
          <header className="engineering-list-heading flex flex-wrap items-end justify-between gap-4 border-b border-border/70 pb-4">
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-[11px]">
                {labels.earlierWork}
              </p>
              <h2 id="engineering-earlier-title" className="text-[1.4rem] font-semibold tracking-[-0.03em] md:text-[1.75rem]">
                {labels.earlier}
              </h2>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              {locale === "en" ? "The earlier archive remains available for context." : "Las notas anteriores siguen disponibles como contexto."}
            </p>
          </header>

          <div className="engineering-earlier-list">
            {earlierPosts.map((post) => (
              <article key={post.slug} className="engineering-earlier-note">
                <div className="min-w-0 space-y-2">
                  <p className="engineering-note-meta-label">{post.tags[0] ?? themeCopy[post.theme].title}</p>
                  <h3 className="text-base font-semibold leading-6 tracking-[-0.02em] md:text-lg">
                    <Link
                      href={localizePath(locale, `/engineering/${post.slug}`)}
                      aria-label={`${labels.read}: ${post.title}`}
                      className="engineering-note-title-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {post.title}
                    </Link>
                  </h3>
                </div>
                <div className="engineering-earlier-note-meta">
                  <time dateTime={post.date}>{post.date}</time>
                  <Link
                    href={localizePath(locale, `/engineering/${post.slug}`)}
                    aria-label={`${labels.read}: ${post.title}`}
                    className="engineering-note-read-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {labels.read}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="engineering-themes-title" className="engineering-current-themes space-y-5">
          <header className="space-y-2.5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-[11px]">
              {labels.topic}
            </p>
            <h2 id="engineering-themes-title" className="text-[1.35rem] font-semibold tracking-[-0.02em]">
              {t.engineering.currentThemesTitle}
            </h2>
            <p className="max-w-3xl text-[0.95rem] leading-6 text-muted-foreground">{t.engineering.intro}</p>
            <p className="max-w-3xl text-[0.95rem] leading-6 text-muted-foreground">
              {t.engineering.currentThemesDescription}
            </p>
          </header>
          <div className="engineering-theme-summary">
            {t.engineering.currentThemes.map((theme) => (
              <div key={theme.title} className="engineering-theme-summary-item">
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
}
