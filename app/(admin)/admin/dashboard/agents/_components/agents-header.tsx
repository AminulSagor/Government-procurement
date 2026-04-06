"use client";

import { UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AgentsHeader({
  titleBn,
  subtitleEn,
}: {
  titleBn: string;
  subtitleEn: string;
}) {
  const router = useRouter();

  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-[22px] font-extrabold text-[var(--color-black)]">
          {titleBn}
        </h1>
        <p className="mt-1 text-sm text-[var(--color-medium-gray)]">
          {subtitleEn}
        </p>
      </div>

      <Button
        onClick={() => router.push("./agents/create")}
        className="rounded-xl bg-[var(--color-primary-color)] px-4 py-2 text-white hover:opacity-95"
      >
        <UsersRound className="mr-2 h-4 w-4" />
        + নতুন এজেন্ট যুক্ত করুন
      </Button>
    </div>
  );
}
