"use client";

import { Card } from "@/components/ui/card";
import { User, MapPinned, Upload } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "ব্যক্তিগত তথ্য": User,
  "এলাকা ও নিয়োগ": MapPinned,
  "নথিপত্র আপলোড": Upload,
};

export default function CreateAgentSection({
  titleBn,
  children,
}: {
  titleBn: string;
  children: React.ReactNode;
}) {
  const Icon = iconMap[titleBn] ?? User;

  return (
    <Card className="rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-[rgba(100,116,139,0.10)] px-7 py-5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(120,185,181,0.18)]">
          <Icon className="h-5 w-5 text-[var(--color-primary-color)]" />
        </span>

        <div className="text-base font-extrabold text-[var(--color-black)]">
          {titleBn}
        </div>
      </div>

      <div className="px-7 py-7">{children}</div>
    </Card>
  );
}
