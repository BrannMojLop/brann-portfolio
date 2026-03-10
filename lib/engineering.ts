import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import type { Locale } from "@/lib/i18n";

export type EngineeringFrontmatter = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  theme: EngineeringTheme;
  articleType?: string;
  readingTime?: string;
};

export type EngineeringPost = EngineeringFrontmatter & {
  slug: string;
};

export const engineeringThemeOrder = [
  "architecture",
  "backend-engineering",
  "financial-systems",
] as const;

export type EngineeringTheme = (typeof engineeringThemeOrder)[number];

const CONTENT_DIR = path.join(process.cwd(), "content", "engineering");

function getEngineeringLocaleDir(locale: Locale) {
  return path.join(CONTENT_DIR, locale);
}

export async function getEngineeringPostSlugs(): Promise<string[]> {
  const files = await fs.readdir(getEngineeringLocaleDir("en"));
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllEngineeringPosts(locale: Locale): Promise<EngineeringPost[]> {
  const files = await fs.readdir(getEngineeringLocaleDir(locale));

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const source = await fs.readFile(path.join(getEngineeringLocaleDir(locale), file), "utf8");
        const { data } = matter(source);

        return {
          slug,
          title: String(data.title || "Untitled"),
          summary: String(data.summary || ""),
          date: String(data.date || "1970-01-01"),
          tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
          theme: engineeringThemeOrder.includes(data.theme as EngineeringTheme)
            ? (data.theme as EngineeringTheme)
            : "architecture",
          articleType: data.articleType ? String(data.articleType) : undefined,
          readingTime: data.readingTime ? String(data.readingTime) : undefined,
        } satisfies EngineeringPost;
      }),
  );

  return posts.sort((a, b) => {
    const themeDelta =
      engineeringThemeOrder.indexOf(a.theme) - engineeringThemeOrder.indexOf(b.theme);

    if (themeDelta !== 0) {
      return themeDelta;
    }

    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getEngineeringPostSource(
  slug: string,
  locale: Locale,
): Promise<string | null> {
  const filepath = path.join(getEngineeringLocaleDir(locale), `${slug}.mdx`);

  try {
    return await fs.readFile(filepath, "utf8");
  } catch {
    return null;
  }
}
