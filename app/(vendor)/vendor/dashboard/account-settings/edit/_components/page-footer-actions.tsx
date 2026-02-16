"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function PageFooterActions({
  onCancel,
  onSubmit,
}: {
  onCancel: () => void; // no-op
  onSubmit: () => void; // no-op
}) {
  return (
    <div className="flex items-center justify-end gap-3">
      <Button
        onClick={onCancel}
        className={cn("h-9 px-4 text-xs bg-white text-gray border border-gray/15")}
      >
        বাতিল
      </Button>

      <Button
        variant="primary"
        onClick={onSubmit}
        className="h-9 px-4 text-xs"
      >
        পরিবর্তনগুলো সংরক্ষণ করুন
      </Button>
    </div>
  );
}
