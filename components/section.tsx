import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("section-reveal mx-auto w-full max-w-6xl px-6 py-16 md:py-20", className)}>
      {(title || description) && (
        <header className="mb-10 space-y-3 md:mb-12">
          {title && <h2 className="text-[1.9rem] font-semibold tracking-[-0.03em] md:text-[2.35rem]">{title}</h2>}
          {description && <p className="max-w-3xl text-[0.98rem] leading-7 text-muted-foreground md:text-[1.02rem]">{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
