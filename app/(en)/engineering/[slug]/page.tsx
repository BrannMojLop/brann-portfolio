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
  const source = await getEngineeringPostSource(slug, "en");

  if (!source) {
    return createPageMetadata({
      locale: "en",
      title: messages.en.engineering.title,
      description: messages.en.engineering.description,
      path: "/engineering",
      imagePath: "/engineering/opengraph-image",
    });
  }

  const { data } = matter(source);

  return createPageMetadata({
    locale: "en",
    title: String(data.seoTitle || data.title || messages.en.engineering.title),
    description: String(data.seoDescription || data.summary || messages.en.engineering.description),
    path: `/engineering/${slug}`,
    imagePath: "/engineering/opengraph-image",
    type: "article",
  });
}

export default async function EngineeringPostPage({ params }: Props) {
  const { slug } = await params;
  const source = await getEngineeringPostSource(slug, "en");

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
  const relatedPosts = await getAllEngineeringPosts("en");

  return (
    <>
      <StructuredData
        data={[
          buildArticleSchema({
            locale: "en",
            title: frontmatter.title,
            description: frontmatter.seoDescription || frontmatter.summary,
            path: `/engineering/${slug}`,
            datePublished: frontmatter.date ? String(frontmatter.date) : undefined,
            keywords: frontmatter.tags,
          }),
          buildBreadcrumbSchema("en", [
            { name: "Home", path: "/" },
            { name: "Engineering", path: "/engineering" },
            { name: frontmatter.title, path: `/engineering/${slug}` },
          ]),
        ]}
      />
      <article className="article-reading-shell mx-auto w-full px-6 py-12 md:py-20">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <Link href={localizePath("en", "/")}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={localizePath("en", "/engineering")}>Engineering</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{frontmatter.title}</span>
        </nav>
        <header className="article-header">
          <p className="article-eyebrow">{messages.en.engineering.title}</p>
          <h1>{frontmatter.title}</h1>
          <p className="article-deck">{frontmatter.summary}</p>
          <div className="article-meta" aria-label="Article details">
            {frontmatter.articleType ? <span>{frontmatter.articleType}</span> : null}
            {frontmatter.date ? <time dateTime={frontmatter.date}>{frontmatter.date}</time> : null}
            {frontmatter.readingTime ? <span>{frontmatter.readingTime}</span> : null}
          </div>
        </header>
        <div className="article-content">{content}</div>
        <EngineeringRelatedNotes currentSlug={slug} locale="en" posts={relatedPosts} />
      </article>
    </>
  );
}
