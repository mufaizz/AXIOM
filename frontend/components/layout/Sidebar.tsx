
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/cn";

const items = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/workspace", label: "Workspace" },
  { href: "/visualizer", label: "Visualizer" },
  { href: "/history", label: "History" },
  { href: "/settings", label: "Settings" },
  { href: "/profile", label: "Profile" },
];

export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className="w-60 border-r border-white/10 bg-ink-soft p-4">
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className={cn(
                "block rounded-md px-3 py-2 text-sm",
                router.pathname === it.href ? "bg-accent text-white" : "text-slate-300 hover:bg-white/5"
              )}
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
