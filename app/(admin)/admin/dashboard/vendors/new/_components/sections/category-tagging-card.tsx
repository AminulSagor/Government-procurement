"use client";

import { Tag } from "lucide-react";
import FormCard from "../ui/form-card";
import TagChips from "../ui/tag-chips";
import type { VendorCreateValues, VendorCategory } from "../../_types/vendor";
import { vendorCategories } from "../../_data/vendor-categories";

type Props = {
  values: VendorCreateValues;
  onChange: (next: Partial<VendorCreateValues>) => void;
};

export default function CategoryTaggingCard({ values, onChange }: Props) {
  function add(code: string) {
    const exists = values.categoryCodes.includes(code);
    if (exists) return;
    onChange({ categoryCodes: [...values.categoryCodes, code] });
  }

  function remove(code: string) {
    onChange({ categoryCodes: values.categoryCodes.filter((c) => c !== code) });
  }

  const selected: VendorCategory[] = vendorCategories.filter((c) =>
    values.categoryCodes.includes(c.code)
  );

  return (
    <FormCard title="ক্যাটাগরি ট্যাগিং" icon={<Tag className="h-[18px] w-[18px]" />}>
      <div className="space-y-4">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Tag className="h-4 w-4" />
          </span>
          <input
            placeholder="iBAS কোড দিয়ে খুঁজুন..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
            onChange={() => {
              // demo: you can implement search later (autocomplete)
            }}
          />
        </div>

        <TagChips
          items={selected.map((s) => ({
            key: s.code,
            label: `${s.name} - ${s.code}`,
          }))}
          onRemove={(k) => remove(k)}
          onAddNew={() => add(vendorCategories[0]?.code ?? "")}
          addLabel="+ নতুন কোড যুক্ত করুন"
        />
      </div>
    </FormCard>
  );
}