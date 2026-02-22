"use client";

import { MapPin } from "lucide-react";
import FormCard from "../ui/form-card";
import type { VendorCreateValues } from "../../_types/vendor";

type Props = {
  values: VendorCreateValues;
  onChange: (next: Partial<VendorCreateValues>) => void;
};

export default function AddressCard({ values, onChange }: Props) {
  return (
    <FormCard title="ঠিকানা" icon={<MapPin className="h-[18px] w-[18px]" />}>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm font-bold text-slate-700">প্রতিষ্ঠানের পূর্ণ ঠিকানা</div>
          <textarea
            value={values.address}
            onChange={(e) => onChange({ address: e.target.value })}
            placeholder="গ্রাম/রাস্তা, ডাকঘর, থানা, জেলা..."
            className="min-h-[120px] w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
          />
        </div>

        <div className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-700">
          বিঃদ্রঃ প্রতিষ্ঠানের ঠিকানাসহ যেকোনো তথ্য প্রদানের ক্ষেত্রে যথাযথ প্রমাণক
          দলিলাদি আপলোড করা বাধ্যতামূলক।
        </div>
      </div>
    </FormCard>
  );
}