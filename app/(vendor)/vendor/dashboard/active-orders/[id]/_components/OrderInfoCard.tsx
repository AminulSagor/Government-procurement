import Card from "@/components/cards/card";
import { Building2, CalendarDays, Hash, Tag } from "lucide-react";

export default function OrderInfoCard() {
  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-6">
      {/* header */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50">
          <Building2 size={16} className="text-primary-color" />
        </div>
        <p className="text-sm font-extrabold text-light-gray">
          অর্ডারের তথ্য (Order Info)
        </p>
      </div>

      {/* title */}
      <p className="mt-4 text-lg font-extrabold text-light-gray">
        Printer Paper A4 (80 GSM)
      </p>

      {/* info grid */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* office */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-light-gray/10">
            <Building2 size={16} className="text-primary-color" />
          </div>
          <div>
            <p className="text-xs font-semibold text-light-gray">
              অফিস (OFFICE)
            </p>
            <p className="mt-1 text-sm font-extrabold text-black">
              District Commissioners Office, Dhaka
            </p>
          </div>
        </div>

        {/* order date */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-light-gray/10">
            <CalendarDays size={16} className="text-primary-color/60" />
          </div>
          <div>
            <p className="text-xs font-semibold text-light-gray">
              অর্ডারের তারিখ (ORDER DATE)
            </p>
            <p className="mt-1 text-sm font-extrabold text-gray">
              ১২ আগস্ট ২০২৫
            </p>
          </div>
        </div>

        {/* ref */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-light-gray/10">
            <Hash size={16} className="text-primary-color/60" />
          </div>
          <div>
            <p className="text-xs font-semibold text-light-gray">
              রেফারেন্স (REF)
            </p>
            <p className="mt-1 text-sm font-extrabold text-black">
              BD-GOV-PROC-8821
            </p>
          </div>
        </div>

        {/* category */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-light-gray/10">
            <Tag size={16} className="text-primary-color/60" />
          </div>
          <div>
            <p className="text-xs font-semibold text-light-gray">
              ক্যাটাগরি (CATEGORY)
            </p>
            <p className="mt-1 text-sm font-extrabold text-gray">
              Stationery & Office Supplies
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
