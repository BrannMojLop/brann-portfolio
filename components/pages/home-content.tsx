"use client";

import Link from "next/link";
import { ArrowRight, Database, Landmark, Network, ServerCog } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { SystemCard } from "@/components/system-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { localizePath } from "@/lib/routing";
import { systems } from "@/lib/systems";

const icons = [Network, ServerCog, Landmark, Database] as const;

export function HomeContent() {
  const { locale, t } = useLanguage();
  const [leadIntro, ...supportingIntro] = t.home.intro;
  const stack =
    locale === "en"
      ? ["Python", "FastAPI", "React", "PostgreSQL", "Domain Modeling", "Evidence-based delivery"]
      : ["Python", "FastAPI", "React", "PostgreSQL", "Modelado de Dominio", "Entrega basada en evidencia"];
  const primarySignal = t.home.architectureSignals[0];
  const PrimarySignalIcon = icons[0];

  return (
    <>
      <Section className="hero-stage pb-10 pt-8 sm:pt-10 md:pt-16 lg:pt-20">
        <div aria-hidden className="hero-ambient">
          <div className="hero-grid" />
          <span className="hero-orbit hero-orbit-a" />
          <span className="hero-orbit hero-orbit-b" />
          <span className="hero-scanline" />
        </div>

        <div className="hero-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16">
          <div className="space-y-8 lg:space-y-12">
            <div className="hero-copy space-y-7 md:space-y-9">
              <div className="hero-eyebrow flex items-center gap-3.5">
                <span className="h-px w-12 bg-primary/35" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 md:text-[11px]">
                  {t.home.eyebrow}
                </p>
              </div>

              <div className="space-y-5 md:space-y-7">
                <h1 className="hero-title max-w-4xl text-[2.5rem] font-semibold leading-[0.92] tracking-[-0.065em] text-balance sm:text-[3.3rem] md:max-w-5xl md:text-[4.6rem] md:leading-[0.9] lg:max-w-[14ch] lg:text-[5.15rem]">
                  {t.home.title}
                </h1>

                <div className="hero-intro max-w-[43rem]">
                  <p className="max-w-[40rem] text-[1.08rem] leading-8 text-foreground/90 md:text-[1.24rem] md:leading-9">
                    {leadIntro}
                  </p>
                </div>

                <div className="hero-proof-inline max-w-[40rem] border-l border-primary/30 pl-4 md:pl-6">
                  <div className="flex items-center gap-2.5">
                    <PrimarySignalIcon aria-hidden className="size-4 shrink-0 text-primary" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/85 md:text-[11px]">
                      {primarySignal.title}
                    </p>
                  </div>
                  <p className="mt-2 text-base font-semibold tracking-[-0.02em] text-foreground">
                    {primarySignal.value}
                  </p>
                </div>

                <div className="hero-actions flex flex-wrap gap-3 pt-1">
                  <Link href={localizePath(locale, "/systems")}>
                    <Button size="lg" className="group hero-cta-primary">
                      {t.home.exploreSystems}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                  <Link href={localizePath(locale, "/engineering")}>
                    <Button size="lg" variant="outline" className="group hero-cta-secondary">
                      {t.home.readNotes}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>

                <div className="hero-supporting-intro max-w-[39rem] border-l border-primary/18 pl-4 md:pl-6">
                  <div className="space-y-3.5 text-[0.98rem] leading-7 text-muted-foreground/95 md:text-[1.03rem] md:leading-8">
                    {supportingIntro.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-stack space-y-4.5">
              <div className="space-y-3.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/52 md:text-[11px]">
                  {t.home.stackLabel}
                </p>
                <div className="flex max-w-3xl flex-wrap gap-2.5">
                  {stack.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="hero-chip rounded-md border border-primary/10 bg-card/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] md:text-[11px]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <aside className="hero-panel rounded-2xl border border-border/70 bg-card/95 p-5 shadow-sm lg:p-6">
            <div aria-hidden className="hero-panel-rail" />
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-border/70 pb-4">
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 md:text-[11px]">
                  {t.home.signalBoard}
                </p>
                <p className="max-w-xs text-[0.95rem] leading-6 text-muted-foreground">
                  {t.home.matrixNote}
                </p>
              </div>
              <span className="whitespace-nowrap rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                {t.home.profileBadge}
              </span>
            </div>

            <div className="space-y-3">
              {t.home.architectureSignals.map((signal, idx) => {
                const Icon = icons[idx];

                return (
                  <article
                    key={signal.title}
                    className="data-float hero-signal-card rounded-xl border border-border/65 bg-background/75 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
                  >
                    <span aria-hidden className="hero-signal-ping" />
                    <div className="flex items-center gap-2.5">
                      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-foreground/58 md:text-[11px]">
                        {signal.title}
                      </p>
                    </div>
                    <p className="mt-3 text-[1.06rem] font-semibold leading-6 tracking-[-0.025em] text-foreground">
                      {signal.value}
                    </p>
                    <p className="mt-2.5 max-w-sm text-[0.87rem] leading-5 text-muted-foreground">
                      {signal.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </Section>

      <Section className="py-8">
        <div className="rounded-2xl border border-border/70 bg-card/85 p-6">
          <div className="border-b border-border/70 pb-4">
            <h2 className="text-xl font-semibold tracking-tight">{t.home.matrixTitle}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{t.home.matrixNote}</p>
            <p className="mt-4 max-w-4xl text-xs leading-6 text-foreground/75 md:text-sm">
              {t.home.workflowSequence}
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {t.home.focusTracks.map((track) => (
              <article key={track.name} className="rounded-xl border border-border/70 bg-background/80 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/75">{track.name}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{track.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-4">
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-2xl border border-border/70 bg-card/85 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 md:text-[11px]">
              {locale === "en" ? "THREE DIMENSIONS" : "TRES DIMENSIONES"}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {locale === "en"
                ? "Systems I build, how I design them, and how I engineer software."
                : "Los sistemas que construyo, cómo los diseño y cómo hago ingeniería de software."}
            </h2>
            <div className="mt-4 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground md:text-[0.98rem]">
              <p>
                {locale === "en"
                  ? "Selected systems show the domain, architecture, and operational constraints behind the work."
                  : "Los sistemas seleccionados muestran el dominio, la arquitectura y las restricciones operativas detrás del trabajo."}
              </p>
              <p>
                {locale === "en"
                  ? "The engineering workflow makes scope, responsibilities, evidence, and review visible before a change moves toward release."
                  : "El flujo de ingeniería hace visibles el alcance, las responsabilidades, la evidencia y la revisión antes de que un cambio avance hacia la liberación."}
              </p>
            </div>
          </article>

          <aside className="rounded-2xl border border-border/70 bg-card/85 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/58 md:text-[11px]">
              {locale === "en" ? "CONTINUE THROUGH THE PORTFOLIO" : "CONTINÚA POR EL PORTAFOLIO"}
            </p>
            <div className="mt-4 space-y-3">
              <Link
                href={localizePath(locale, "/systems")}
                className="block rounded-xl border border-border/65 bg-background/75 px-4 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
              >
                {locale === "en"
                  ? "Explore Businext ERP, TR0V1, and Workforce as architecture cases."
                  : "Explorar Businext ERP, TR0V1 y Workforce como casos de arquitectura."}
              </Link>
              <Link
                href={localizePath(locale, "/about")}
                className="block rounded-xl border border-border/65 bg-background/75 px-4 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
              >
                {locale === "en"
                  ? "Review professional background, current role, and engineering practice."
                  : "Ver trayectoria profesional, rol actual y práctica de ingeniería."}
              </Link>
              <Link
                href={localizePath(locale, "/engineering")}
                className="block rounded-xl border border-border/65 bg-background/75 px-4 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
              >
                {locale === "en"
                  ? "Read engineering notes about system design, PostgreSQL, concurrency, and evidence."
                  : "Leer notas de ingeniería sobre diseño de sistemas, PostgreSQL, concurrencia y evidencia."}
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="systems" title={t.home.majorSystemsTitle} description={t.home.majorSystemsDesc}>
        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((system) => (
            <SystemCard key={system.slug} system={system} />
          ))}
        </div>
      </Section>
    </>
  );
}
