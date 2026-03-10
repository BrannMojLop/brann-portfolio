import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

type MdxComponentProps = {
  children?: ReactNode;
};

type MdxComponentMap = Record<string, (props: MdxComponentProps) => ReactNode>;

export function useMDXComponents(components: MdxComponentMap): MdxComponentMap {
  return {
    h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
      <h2 className="mt-10 scroll-m-20 border-b border-border/70 pb-2 text-2xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
      <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">{children}</h3>
    ),
    p: ({ children }: ComponentPropsWithoutRef<"p">) => <p className="mt-4 leading-7 text-muted-foreground">{children}</p>,
    ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
      <ul className="my-5 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
    ),
    a: ({ children, href }: ComponentPropsWithoutRef<"a">) =>
      href ? (
        <Link href={href} className="font-medium text-primary underline-offset-4 hover:underline">
          {children}
        </Link>
      ) : (
        <>{children}</>
      ),
    code: ({ children }: ComponentPropsWithoutRef<"code">) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">{children}</code>
    ),
    ...components,
  };
}
