"use client";

import { Filter, ScanLine } from "lucide-react";
import Dialog from "@/components/dialog/dialog";
import SecondaryButton from "@/components/buttons/secondary-button";
import PrimaryButton from "@/components/buttons/primary-button";

export type ProductFilterValues = {
  minPrice: string;
  maxPrice: string;
  itemCode: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  value: ProductFilterValues;
  onChange: (v: ProductFilterValues) => void;

  onReset: () => void;
  onApply: () => void;
};

export default function ProductFilterDialog({
  open,
  onOpenChange,
  value,
  onChange,
  onReset,
  onApply,
}: Props) {
  const set = (patch: Partial<ProductFilterValues>) =>
    onChange({ ...value, ...patch });

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      size="md"
      className="p-0 overflow-hidden"
    >
      {/* header */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-black">ফিল্টার করুন</h2>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* body */}
      <div className="px-6 py-5 space-y-5">
        {/* price range */}
        <div>
          <div className="mb-2 text-sm font-semibold text-black">
            মূল্য পরিসীমা (BDT)
          </div>

          <div className="grid grid-cols-[1fr_24px_1fr] items-center gap-3">
            <input
              value={value.minPrice}
              onChange={(e) => set({ minPrice: e.target.value })}
              placeholder="সর্বনিম্ন"
              inputMode="numeric"
              className="h-11 w-full rounded-md border border-primary-color/20 bg-white px-4 text-sm outline-none"
            />

            <div className="text-center text-medium-gray">-</div>

            <input
              value={value.maxPrice}
              onChange={(e) => set({ maxPrice: e.target.value })}
              placeholder="সর্বোচ্চ"
              inputMode="numeric"
              className="h-11 w-full rounded-md border border-primary-color/20 bg-white px-4 text-sm outline-none"
            />
          </div>
        </div>

        {/* item code */}
        <div>
          <div className="mb-2 text-sm font-semibold text-black">আইটেম কোড</div>

          <div className="flex items-center gap-3 h-11 rounded-md border border-primary-color/20 bg-white px-4">
            <ScanLine className="text-medium-gray" size={18} />
            <input
              value={value.itemCode}
              onChange={(e) => set({ itemCode: e.target.value })}
              placeholder="কোড অনুসন্ধান করুন..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-primary-color/10" />

      {/* footer */}
      <div className="px-6 py-4 flex items-center justify-end gap-3">
        <SecondaryButton
          className="h-11 px-6"
          onClick={() => {
            onReset();
            onOpenChange(false);
          }}
        >
          রিসেট
        </SecondaryButton>

        <PrimaryButton
          className="h-11 px-6 flex items-center gap-2"
          onClick={() => {
            onApply();
            onOpenChange(false);
          }}
        >
          <span>
            <Filter size={18}/>
          </span>{" "}
          ফিল্টার প্রয়োগ করুন
        </PrimaryButton>
      </div>
    </Dialog>
  );
}
