import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}