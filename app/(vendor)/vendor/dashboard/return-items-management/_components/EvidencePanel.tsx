// app/(vendor)/vendor/dashboard/return-items-management/_components/EvidencePanel.tsx
import Image from "next/image";
import type { ReturnRequestItem } from "../_types/return-items-management.types";

export default function EvidencePanel({ evidence }: { evidence: ReturnRequestItem["evidence"] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-extrabold text-slate-500">{evidence.labelBn}</p>
        <span className="text-[11px] font-extrabold text-slate-400">{evidence.attachmentCountText}</span>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
        <div className="relative aspect-[16/9]">
          <Image src={evidence.imageUrl} alt="evidence" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}