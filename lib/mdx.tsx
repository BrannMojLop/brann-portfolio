import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

type MdxComponentProps = {
  children?: ReactNode;
};

type MdxComponentMap = Record<string, (props: MdxComponentProps) => ReactNode>;

export const mdxComponents: MdxComponentMap = {
  h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-14 scroll-mt-24 border-b border-border/70 pb-3 text-2xl font-semibold tracking-tight md:mt-16">
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight">{children}</h3>
  ),
  p: ({ children }: ComponentPropsWithoutRef<"p">) => <p className="mt-5 leading-7 text-muted-foreground">{children}</p>,
  ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-6 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
  ),
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      tabIndex={0}
      className="my-8 max-w-full overflow-x-auto rounded-xl border border-border/70 bg-muted/50 p-4 text-sm leading-6 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
    </pre>
  ),
  table: ({ children }: ComponentPropsWithoutRef<"table">) => (
    <div className="my-8 max-w-full overflow-x-auto rounded-xl border border-border/70" tabIndex={0}>
      <table className="min-w-[42rem] text-left text-sm">{children}</table>
    </div>
  ),
  a: ({ children, href }: ComponentPropsWithoutRef<"a">) =>
    href ? (
      <Link
        href={href}
        className="font-medium text-primary underline decoration-primary/50 underline-offset-4 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {children}
      </Link>
    ) : (
      <>{children}</>
    ),
  code: ({ children }: ComponentPropsWithoutRef<"code">) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">{children}</code>
  ),
};
