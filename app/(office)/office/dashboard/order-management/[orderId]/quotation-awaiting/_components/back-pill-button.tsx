"use client";

import PrimaryButton from "@/components/buttons/primary-button";
import { ArrowLeft } from "lucide-react";

export default function BackPillButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <PrimaryButton
      onClick={onClick}
      className="flex items-center gap-2 rounded-md px-4 py-2 text-sm border border-primary-color/20"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </PrimaryButton>
  );
}
