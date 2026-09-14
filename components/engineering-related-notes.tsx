import Link from "next/link";

import type { EngineeringPost } from "@/lib/engineering";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/routing";

const relatedSlugs: Record<string, string[]> = {
  "specification-driven-development-complex-changes": [
    "specialized-ai-agents-software-engineering",
    "postgresql-rls-multi-tenant-saas",
  ],
  "specialized-ai-agents-software-engineering": [
    "specification-driven-development-complex-changes",
    "postgresql-rls-multi-tenant-saas",
  ],
  "postgresql-rls-multi-tenant-saas": [
    "specification-driven-development-complex-changes",
    "specialized-ai-agents-software-engineering",
  ],
};

export function EngineeringRelatedNotes({
  currentSlug,
  locale,
  posts,
}: {
  currentSlug: string;
  locale: Locale;
  posts: EngineeringPost[];
}) {
  const related = (relatedSlugs[currentSlug] ?? [])
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is EngineeringPost => Boolean(post));

  if (!related.length) return null;

  const copy =
    locale === "en"
      ? { eyebrow: "CONTINUE READING", title: "Related Engineering Notes", read: "Read note" }
      : { eyebrow: "CONTINUAR LEYENDO", title: "Notas de ingeniería relacionadas", read: "Leer nota" };

  return (
    <section className="article-related-notes" aria-labelledby="related-notes-title">
      <p className="article-eyebrow">{copy.eyebrow}</p>
      <h2 id="related-notes-title">{copy.title}</h2>
      <div className="article-related-list">
        {related.map((post) => (
          <article key={post.slug}>
            <p className="article-related-topic">{post.tags[0]}</p>
            <h3>
              <Link
                href={localizePath(locale, `/engineering/${post.slug}`)}
                aria-label={`${copy.read}: ${post.title}`}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {post.title}
              </Link>
            </h3>
            <Link
              href={localizePath(locale, `/engineering/${post.slug}`)}
              aria-label={`${copy.read}: ${post.title}`}
              className="article-related-read focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {copy.read}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
