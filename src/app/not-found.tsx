import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
      <section className="flex min-h-[calc(100svh-5rem)] items-center justify-center px-8 py-16 text-center">
        <div className="max-w-lg">
          <p className="text-sm font-medium tracking-widest text-organic-strong">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            This page may have moved, or the address is incorrect.
          </p>
          <Link href="/" className="btn-action mt-8 inline-flex min-h-11 items-center justify-center">
            Back to home
          </Link>
        </div>
      </section>
  );
}
