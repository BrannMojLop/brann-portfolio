import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada | Brandon Mojica",
  description: "La página solicitada no existe dentro del portafolio de ingeniería de Brandon Mojica.",
  robots: { index: false, follow: true },
};

export default function SpanishNotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary-text">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Página no encontrada</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        La ruta solicitada no existe. Puedes seguir explorando el portafolio desde sistemas, ingeniería o la sección profesional.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/es" className="text-primary-text hover:text-primary-text">
          Volver al inicio
        </Link>
        <Link href="/es/engineering" className="text-primary-text hover:text-primary-text">
          Ver notas de ingeniería
        </Link>
      </div>
    </section>
  );
}
