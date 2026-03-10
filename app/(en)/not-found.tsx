import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Page Not Found",
  description: "The requested page does not exist in Brandon Mojica's engineering portfolio.",
  path: "/not-found",
});

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        The page you requested does not exist. Continue exploring the portfolio through the systems, engineering, or about sections.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/" className="text-primary hover:text-primary/80">
          Return home
        </Link>
        <Link href="/engineering" className="text-primary hover:text-primary/80">
          Browse engineering notes
        </Link>
      </div>
    </section>
  );
}
