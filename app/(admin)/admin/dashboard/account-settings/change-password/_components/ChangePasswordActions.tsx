"use client";

import { Button } from "@/components/ui/button";

export default function ChangePasswordActions({
  saveText,
  cancelText,
  disabled,
  onSave,
  onCancel,
}: {
  saveText: string;
  cancelText: string;
  disabled?: boolean;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="pt-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="button"
          onClick={onSave}
          disabled={disabled}
          className={[
            "h-11 w-full sm:w-[260px] rounded-lg font-bold",
            "bg-[var(--color-primary-color)] text-white",
            "hover:bg-[var(--color-primary-color)]/90",
            "disabled:opacity-60 disabled:cursor-not-allowed",
          ].join(" ")}
        >
          {saveText}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className={[
            "h-11 w-full sm:w-[260px] rounded-lg font-bold",
            "border border-[rgba(100,116,139,0.30)] bg-white",
            "text-[var(--color-black)] hover:bg-[var(--color-off-white)]",
          ].join(" ")}
        >
          {cancelText}
        </Button>
      </div>
    </div>
  );
}
