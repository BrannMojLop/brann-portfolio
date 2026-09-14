import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { StructuredData } from "@/components/structured-data";
import { EngineeringRelatedNotes } from "@/components/engineering-related-notes";
import {
  getAllEngineeringPosts,
  getEngineeringPostSlugs,
  getEngineeringPostSource,
  type EngineeringFrontmatter,
} from "@/lib/engineering";
import { messages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { mdxComponents } from "@/lib/mdx";
import { localizePath } from "@/lib/routing";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getEngineeringPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const source = await getEngineeringPostSource(slug, "es");

  if (!source) {
    return createPageMetadata({
      locale: "es",
      title: messages.es.engineering.title,
      description: messages.es.engineering.description,
      path: "/engineering",
      imagePath: "/engineering/opengraph-image",
    });
  }

  const { data } = matter(source);

  return createPageMetadata({
    locale: "es",
    title: String(data.seoTitle || data.title || messages.es.engineering.title),
    description: String(data.seoDescription || data.summary || messages.es.engineering.description),
    path: `/engineering/${slug}`,
    imagePath: "/engineering/opengraph-image",
    type: "article",
  });
}

export default async function SpanishEngineeringPostPage({ params }: Props) {
  const { slug } = await params;
  const source = await getEngineeringPostSource(slug, "es");

  if (!source) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<EngineeringFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });
  const relatedPosts = await getAllEngineeringPosts("es");

  return (
    <>
      <StructuredData
        data={[
          buildArticleSchema({
            locale: "es",
            title: frontmatter.title,
            description: frontmatter.seoDescription || frontmatter.summary,
            path: `/engineering/${slug}`,
            datePublished: frontmatter.date,
            keywords: frontmatter.tags,
          }),
          buildBreadcrumbSchema("es", [
            { name: "Inicio", path: "/" },
            { name: "Ingeniería", path: "/engineering" },
            { name: frontmatter.title, path: `/engineering/${slug}` },
          ]),
        ]}
      />
      <article className="article-reading-shell mx-auto w-full px-6 py-12 md:py-20">
        <nav className="article-breadcrumbs" aria-label="Migas de pan">
          <Link href={localizePath("es", "/")}>Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link href={localizePath("es", "/engineering")}>Ingeniería</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{frontmatter.title}</span>
        </nav>
        <header className="article-header">
          <p className="article-eyebrow">{messages.es.engineering.title}</p>
          <h1>{frontmatter.title}</h1>
          <p className="article-deck">{frontmatter.summary}</p>
          <div className="article-meta" aria-label="Detalles del artículo">
            {frontmatter.articleType ? <span>{frontmatter.articleType}</span> : null}
            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
            {frontmatter.readingTime ? <span>{frontmatter.readingTime}</span> : null}
          </div>
        </header>
        <div className="article-content">{content}</div>
        <EngineeringRelatedNotes currentSlug={slug} locale="es" posts={relatedPosts} />
      </article>
    </>
  );
}
