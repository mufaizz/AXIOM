
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between border-b border-white/10 bg-ink-soft px-6">
      <Link href="/" className="text-lg font-semibold text-white">MathViz</Link>
      <div className="flex gap-4 text-sm text-slate-300">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/workspace">Workspace</Link>
        <Link href="/auth/login" className="text-accent">Login</Link>
      </div>
    </nav>
  );
}
