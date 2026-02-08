"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


export default function FormFooterActions({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <div className="flex items-center justify-end gap-3 px-5 py-4">
      <Button
        onClick={onCancel}
        className={cn("h-9 px-4 text-xs bg-white text-gray border border-gray/15")}
      >
        বাতিল (Cancel)
      </Button>

      <Button variant="primary" onClick={onSave} className="h-9 px-5 text-xs">
        সংরক্ষণ করুন (Save)
      </Button>
    </div>
  );
}
