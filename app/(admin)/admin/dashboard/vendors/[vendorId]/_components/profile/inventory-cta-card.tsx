import Link from "next/link";
import { ClipboardCheck, ArrowRight } from "lucide-react";
import type { VendorDetails } from "../../_types/vendor-details";
import Card from "../ui/card";

type Props = {
  vendor: VendorDetails;
};

export default function InventoryCtaCard({ vendor }: Props) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="relative rounded-2xl bg-primary-color">
        {/* subtle overlay like screenshot */}
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rotate-12 rounded-3xl bg-white/10" />
        <div className="absolute right-10 bottom-6 h-20 w-20 rotate-12 rounded-2xl bg-white/10" />

        <div className="flex items-center justify-between gap-5 px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white">
              <ClipboardCheck className="h-7 w-7" />
            </div>

            <div>
              <div className="text-lg font-extrabold text-white">ইনভেন্টরি ব্রাউজ করুন</div>
              <div className="mt-1 text-sm text-white/80">
                {vendor.orgName} এর মজুদ পণ্য দেখুন
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-bold text-white/80">মোট পণ্য</div>
            <div className="mt-1 text-2xl font-extrabold text-white">{vendor.totalItems}</div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="flex justify-end">
            <Link
              href="#"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-extrabold text-primary-color hover:bg-white/95"
            >
              বিস্তারিত ইনভেন্টরি দেখুন
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}