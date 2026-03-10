"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { localizePath } from "@/lib/routing";
import type { SystemEntry } from "@/lib/systems";

export function SystemCard({ system, showDetails = false }: { system: SystemEntry; showDetails?: boolean }) {
  const { locale, t } = useLanguage();
  const content = system.content[locale];

  return (
    <Card className="h-full border-border/70 bg-card/80">
      <CardHeader>
        <CardTitle>{content.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-6 text-muted-foreground">{content.tagline}</CardDescription>
        <p className="text-sm leading-6 text-muted-foreground">{content.solution}</p>

        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/75">
            {t.systems.stackLabel}
          </p>
          <div className="flex flex-wrap gap-2">
          {system.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          </div>
        </div>

        {showDetails && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {content.architectureApproach.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        )}
      </CardContent>
      {!showDetails && (
        <CardFooter>
          <Link
            href={localizePath(locale, "/systems")}
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            {content.ctaLabel}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
