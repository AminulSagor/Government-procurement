"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-medium-gray">
      <Home className="w-4 h-4 text-medium-gray" />
      {items.map((it, idx) => (
        <div key={`${it.label}-${idx}`} className="flex items-center gap-2">
          {idx !== 0 && <span className="text-light-gray">/</span>}
          {it.href ? (
            <Link href={it.href} className="hover:underline">
              {it.label}
            </Link>
          ) : (
            <span className="text-primary-color">{it.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}
