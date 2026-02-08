"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function UploadDropzone({
  fileName,
  onPick,
  onClear,
}: {
  fileName?: string;
  onPick: () => void;
  onClear: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-gray/20 bg-secondary px-6 py-10 text-center",
        "hover:border-primary"
      )}
    >
      <div className="mx-auto grid max-w-[420px] place-items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary border border-gray/15">
          ⬆
        </div>

        <p className="text-xs font-semibold text-gray">
          Upload a file
        </p>
        <p className="text-[11px] text-gray">
          or drag and drop
        </p>
        <p className="text-[11px] text-gray">
          PNG, JPG, GIF up to 5MB
        </p>

        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={onPick}
            className="h-9 rounded-lg bg-primary px-4 text-xs font-semibold text-white hover:opacity-95"
          >
            ফাইল নির্বাচন করুন
          </button>

          {fileName ? (
            <button
              type="button"
              onClick={onClear}
              className="h-9 rounded-lg border border-gray/15 bg-white px-4 text-xs font-semibold text-gray hover:border-primary"
            >
              Remove
            </button>
          ) : null}
        </div>

        {fileName ? (
          <p className="mt-2 text-[11px] text-gray">Selected: {fileName}</p>
        ) : null}
      </div>
    </div>
  );
}
