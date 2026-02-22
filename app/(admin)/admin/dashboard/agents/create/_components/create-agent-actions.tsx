"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function CreateAgentActions({
  onCancel,
  onSubmit,
}: {
  onCancel: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="flex items-center justify-end gap-4">
      <Button
        variant="outline"
        className="h-11 rounded-xl border border-[rgba(100,116,139,0.14)] bg-white px-7 font-bold text-[rgba(16,24,25,0.75)]"
        onClick={onCancel}
        type="button"
      >
        বাতিল করুন
      </Button>

      <Button
        className="h-11 rounded-xl bg-[var(--color-primary-color)] px-7 font-extrabold text-white hover:opacity-95"
        onClick={onSubmit}
        type="button"
      >
        <CheckCircle2 className="mr-2 h-5 w-5" />
        এজেন্ট সংরক্ষণ করুন
      </Button>
    </div>
  );
}
