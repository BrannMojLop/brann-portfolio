import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { StructuredData } from "@/components/structured-data";
import {
  getEngineeringPostSlugs,
  getEngineeringPostSource,
  type EngineeringFrontmatter,
} from "@/lib/engineering";
import { messages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { mdxComponents } from "@/lib/mdx";
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
    title: String(data.title || messages.es.engineering.title),
    description: String(data.summary || messages.es.engineering.description),
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

  return (
    <>
      <StructuredData
        data={[
          buildArticleSchema({
            locale: "es",
            title: frontmatter.title,
            description: frontmatter.summary,
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
      <article className="mx-auto w-full max-w-3xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
          {messages.es.engineering.title}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{frontmatter.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{frontmatter.summary}</p>
        {frontmatter.articleType ? (
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {frontmatter.articleType}
          </p>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <p>{frontmatter.date}</p>
          {frontmatter.readingTime ? <p>{frontmatter.readingTime}</p> : null}
        </div>
        <div className="mt-10">{content}</div>
      </article>
    </>
  );
}
