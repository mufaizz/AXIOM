
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ink text-slate-200">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold text-white">
          See Math. <span className="text-accent">Understand Math.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          An AI Math Engine that turns plain-English questions and freehand sketches into interactive,
          animated, step-by-step visual explanations.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/workspace" className="rounded-md bg-accent px-6 py-3 font-medium text-white hover:bg-accent-glow">
            Start Visualizing
          </Link>
          <Link href="/auth/register" className="rounded-md border border-white/10 px-6 py-3 font-medium text-slate-200 hover:bg-white/5">
            Create account
          </Link>
        </div>
      </main>
    </div>
  );
}
