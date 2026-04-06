"use client";

import { Pencil, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VendorRow } from "../_types/vendors.types";

export default function VendorActions({
  row,
  onVerify,
  onEdit,
  onView,
  onDelete,
}: {
  row: VendorRow;
  onVerify: (id: string) => void;
  onEdit: (id: string) => void;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  if (row.status === "pending") {
    return (
      <Button
        type="button"
        onClick={() => onVerify(row.id)}
        className="h-9 rounded-xl bg-[var(--color-primary-color)] px-4 text-white hover:opacity-95"
      >
        যাচাই করুন
      </Button>
    );
  }

  return (
    <div className="flex items-center justify-end gap-3">
      <button
        type="button"
        onClick={() => onEdit(row.id)}
        className="text-[var(--color-medium-gray)] hover:text-[var(--color-black)]"
        aria-label="Edit"
      >
        <Pencil className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => onView(row.id)}
        className="text-[var(--color-medium-gray)] hover:text-[var(--color-black)]"
        aria-label="View"
      >
        <Eye className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => onDelete(row.id)}
        className="text-[var(--color-medium-gray)] hover:text-[var(--color-red)]"
        aria-label="Delete"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
