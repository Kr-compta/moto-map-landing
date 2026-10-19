import Link from "next/link";
import { Logo } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <Logo className="size-16" />
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-muted">
        Page introuvable · Page not found
      </p>
      <div className="flex gap-3">
        <Link href="/fr" className="rounded-full border border-line px-5 py-2.5 font-semibold hover:bg-surface">
          Accueil
        </Link>
        <Link href="/en" className="rounded-full border border-line px-5 py-2.5 font-semibold hover:bg-surface">
          Home
        </Link>
      </div>
    </main>
  );
}
