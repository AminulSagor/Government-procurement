"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export default function FormFooterActions({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <div className="flex items-center justify-end gap-3 bg-secondary/30 px-5 py-4">
      <Button
        onClick={onCancel}
        className={cn(
          "h-9 bg-white px-4 text-xs text-gray",
        )}
      >
        বাতিল (Cancel)
      </Button>

      <Button variant="primary" onClick={onSave} className="h-9 px-5 text-xs">
        <Save size={14} className="mr-2" />
        সংরক্ষণ করুন (Save)
      </Button>
    </div>
  );
}
