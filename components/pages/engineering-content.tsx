"use client";

import Link from "next/link";
import { Landmark, Layers3, ServerCog } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { localizePath } from "@/lib/routing";
import type { EngineeringPost } from "@/lib/engineering";

const engineeringThemeOrder = [
  "architecture",
  "backend-engineering",
  "financial-systems",
] as const;

type EngineeringTheme = (typeof engineeringThemeOrder)[number];

const themeStyles: Record<
  EngineeringTheme,
  {
    accent: string;
    panel: string;
    categoryBadge: string;
    articleBadge: string;
    tagBadge: string;
    iconWrap: string;
    iconClass: string;
    Icon: typeof Landmark;
  }
> = {
  architecture: {
    accent: "before:bg-primary/70",
    panel: "bg-primary/[0.035]",
    categoryBadge: "border-primary/20 bg-primary/[0.08] text-primary",
    articleBadge: "border-primary/10 bg-background/75 text-foreground/72",
    tagBadge: "border-primary/12 bg-primary/[0.045] text-foreground/72",
    iconWrap: "border-primary/15 bg-primary/[0.07]",
    iconClass: "text-primary",
    Icon: Layers3,
  },
  "backend-engineering": {
    accent: "before:bg-sky-700/55",
    panel: "bg-sky-700/[0.04]",
    categoryBadge: "border-sky-700/15 bg-sky-700/[0.08] text-sky-900",
    articleBadge: "border-sky-700/10 bg-background/75 text-foreground/72",
    tagBadge: "border-sky-700/12 bg-sky-700/[0.045] text-foreground/72",
    iconWrap: "border-sky-700/15 bg-sky-700/[0.07]",
    iconClass: "text-sky-800",
    Icon: ServerCog,
  },
  "financial-systems": {
    accent: "before:bg-emerald-700/55",
    panel: "bg-emerald-700/[0.04]",
    categoryBadge: "border-emerald-700/15 bg-emerald-700/[0.08] text-emerald-900",
    articleBadge: "border-emerald-700/10 bg-background/75 text-foreground/72",
    tagBadge: "border-emerald-700/12 bg-emerald-700/[0.045] text-foreground/72",
    iconWrap: "border-emerald-700/15 bg-emerald-700/[0.07]",
    iconClass: "text-emerald-800",
    Icon: Landmark,
  },
};

export function EngineeringContent({ posts }: { posts: EngineeringPost[] }) {
  const { locale, t } = useLanguage();
  const postsByTheme = engineeringThemeOrder.map((theme) => ({
    theme,
    posts: posts.filter((post) => post.theme === theme),
  }));

  const themeCopy: Record<
    EngineeringTheme,
    { title: string; description: string }
  > = {
    architecture: t.engineering.themes.architecture,
    "backend-engineering": t.engineering.themes.backendEngineering,
    "financial-systems": t.engineering.themes.financialSystems,
  };

  return (
    <Section
      title={t.engineering.title}
      description={t.engineering.description}
      className="engineering-page relative overflow-hidden"
    >
      <div aria-hidden className="engineering-ambient">
        <div className="engineering-grid" />
        <span className="engineering-orbit engineering-orbit-a" />
        <span className="engineering-orbit engineering-orbit-b" />
        <span className="engineering-scanline" />
      </div>

      <div className="space-y-14">
        <div className="engineering-intro">
          <span className="engineering-intro-line" />
        </div>

        <p className="engineering-intro-copy max-w-3xl text-[1rem] leading-7 text-muted-foreground md:text-[1.03rem]">
          {t.engineering.intro}
        </p>

        {postsByTheme.map(({ theme, posts: themePosts }) => (
          <div key={theme} className={`engineering-theme engineering-theme-${theme} space-y-6`}>
            <header className="engineering-theme-header space-y-2.5">
              <h3 className="text-[1.22rem] font-semibold tracking-[-0.02em]">{themeCopy[theme].title}</h3>
              <p className="max-w-3xl text-[0.95rem] leading-6 text-muted-foreground">
                {themeCopy[theme].description}
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
              {themePosts.map((post, index) => {
                const style = themeStyles[theme];
                const Icon = style.Icon;

                return (
                  <Link
                    key={post.slug}
                    href={localizePath(locale, `/engineering/${post.slug}`)}
                    className="engineering-card-link group"
                    style={{ animationDelay: `${Math.min(index, 5) * 70 + 180}ms` }}
                  >
                    <Card
                      className={`engineering-card relative h-full overflow-hidden border-border/70 bg-card/92 before:absolute before:inset-x-0 before:top-0 before:h-px ${style.accent}`}
                    >
                      <CardHeader className="space-y-5 p-6 pb-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex flex-wrap gap-2.5">
                            <Badge variant="outline" className={style.categoryBadge}>
                              {themeCopy[theme].title}
                            </Badge>
                            {post.articleType ? (
                              <Badge variant="outline" className={style.articleBadge}>
                                {post.articleType}
                              </Badge>
                            ) : null}
                          </div>
                          <div
                            className={`flex size-9 shrink-0 items-center justify-center rounded-lg border ${style.iconWrap} shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]`}
                          >
                            <Icon className={`size-4 ${style.iconClass}`} />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <CardTitle className="max-w-[28rem] text-[1.2rem] leading-7 tracking-[-0.03em]">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="max-w-[31rem] text-[0.94rem] leading-6 text-muted-foreground">
                            {post.summary}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 p-6 pt-0">
                        <div className={`rounded-xl border border-border/60 px-4 py-3.5 ${style.panel}`}>
                          <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <div className="space-y-1.5">
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                {t.engineering.metadata.publishedOn}
                              </p>
                              <p className="text-sm text-foreground/80">{post.date}</p>
                            </div>
                            {post.readingTime ? (
                              <div className="space-y-1.5">
                                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                  {t.engineering.metadata.readingTime}
                                </p>
                                <p className="text-sm text-foreground/80">{post.readingTime}</p>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className={style.tagBadge}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
