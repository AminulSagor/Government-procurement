// app/(vendor)/vendor/dashboard/return-requests/[requestId]/_components/BreadcrumbBack.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BreadcrumbBack({
  breadcrumbBn,
  backHref,
  backLabelBn,
}: {
  breadcrumbBn: string;
  backHref: string;
  backLabelBn: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* <p className="text-[12px] font-medium text-slate-500">{breadcrumbBn}</p> */}

      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 hover:text-slate-900"
      >
        <ArrowLeft className="h-4 w-4" />
        {backLabelBn}
      </Link>
    </div>
  );
}