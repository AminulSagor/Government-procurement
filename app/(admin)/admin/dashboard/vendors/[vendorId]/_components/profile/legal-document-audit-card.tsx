"use client";

import { useMemo, useState } from "react";
import {
  FileText,
  CreditCard,
  IdCard,
  Landmark,
  Eye,
  ChevronDown,
} from "lucide-react";
import Card from "../ui/card";
import type {
  VendorDetails,
  LegalDocKey,
  LegalDocStatus,
  LegalDocIconName,
} from "../../_types/vendor-details";

type Props = {
  vendor: VendorDetails;
};

const statusOptions: Array<{ label: string; value: LegalDocStatus }> = [
  { label: "যাচাইযোগ্য", value: "verifiable" },
  { label: "যাচাইাধীন", value: "pending" },
  { label: "অবৈধ", value: "invalid" },
];

export default function LegalDocumentAuditCard({ vendor }: Props) {
  const initial = useMemo(() => vendor.legalDocs, [vendor.legalDocs]);
  const [docs, setDocs] = useState(initial);

  function setStatus(key: LegalDocKey, status: LegalDocStatus) {
    setDocs((prev) => prev.map((d) => (d.key === key ? { ...d, status } : d)));
  }

  function onView(title: string) {
    alert(`Demo view: ${title}`);
  }

  return (
    <Card className="p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-3 px-6 pt-6">
        <FileText className="h-5 w-5 text-primary-color" />
        <div className="text-base font-extrabold text-slate-900">
          আইনি নথিপত্র অডিট (Legal Document Audit)
        </div>
      </div>

      <div className="mt-4 h-px w-full bg-slate-200/70" />

      {/* table */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-[1fr_140px_220px] gap-3 pb-3 text-xs font-bold text-slate-400">
          <div>নথিপত্র</div>
          <div className="text-center">ভিউ</div>
          <div className="text-right">যাচাইকরণ স্থিতি</div>
        </div>

        <div className="divide-y divide-slate-100">
          {docs.map((d) => (
            <div
              key={d.key}
              className="grid grid-cols-[1fr_140px_220px] items-center gap-3 py-5"
            >
              {/* left */}
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700">
                  <DocIcon name={d.iconName} />
                </div>

                <div className="text-sm font-extrabold text-slate-900">
                  {d.title}
                </div>
              </div>

              {/* middle */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => onView(d.title)}
                  className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#EAF3F5] px-5 text-xs font-extrabold text-primary-color hover:opacity-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
                >
                  <Eye className="h-4 w-4" />
                  ভিউ
                </button>
              </div>

              {/* right */}
              <div className="flex items-center justify-end">
                <div className="relative">
                  <select
                    value={d.status}
                    onChange={(e) =>
                      setStatus(d.key, e.target.value as LegalDocStatus)
                    }
                    className="h-10 w-[170px] appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-xs font-extrabold text-slate-700 outline-none focus:ring-4 focus:ring-sky-100"
                  >
                    {statusOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function DocIcon({ name }: { name: LegalDocIconName }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "file":
      return <FileText className={cls} />;
    case "tin":
      return <CreditCard className={cls} />;
    case "nid":
      return <IdCard className={cls} />;
    case "bank":
      return <Landmark className={cls} />;
    default:
      return <FileText className={cls} />;
  }
}