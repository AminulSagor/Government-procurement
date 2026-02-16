// app/(vendor)/bids/_components/pagination.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function PageBtn({ active, children }: { active?: boolean; children: React.ReactNode }) {
  return (
    <button
      className={cn(
        "h-9 w-9 rounded-xl border text-sm font-extrabold",
        active
          ? "border-gray/15 bg-primary-color text-white"
          : "border-gray/15 bg-white text-gray/60 hover:text-gray"
      )}
    >
      {children}
    </button>
  );
}

export default function Pagination() {
  return (
    <div className="flex items-center gap-2">
      <button
        className="h-9 w-9 rounded-xl border border-gray/15 bg-white grid place-items-center text-gray/60 hover:text-gray"
        aria-label="Prev"
      >
        <ChevronLeft size={16} />
      </button>

      <PageBtn active >১</PageBtn>
      <PageBtn>২</PageBtn>
      <PageBtn>৩</PageBtn>

      <button
        className="h-9 w-9 rounded-xl border border-gray/15 bg-white grid place-items-center text-gray/60 hover:text-gray"
        aria-label="Next"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
