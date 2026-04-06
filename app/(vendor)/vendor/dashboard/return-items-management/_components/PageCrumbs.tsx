// app/(vendor)/vendor/dashboard/return-items-management/_components/PageCrumbs.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageCrumbs({
  crumbsBn,
  backHref,
}: {
  crumbsBn: string;
  backHref: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <p className="text-[12px] font-medium text-slate-500">{crumbsBn}</p>

      <Link href={backHref} className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700">
        <ArrowLeft className="h-4 w-4" />
        ফিরে যান (Back)
      </Link>
    </div>
  );
}