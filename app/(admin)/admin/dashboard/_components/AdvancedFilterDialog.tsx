"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";

export default function AdvancedFilterDialog({
  open,
  onClose,
  onApply,
  onReset,
}: {
  open: boolean;
  onClose: () => void;
  onApply?: () => void;
  onReset?: () => void;
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) onClose();
      }}
    >
      <DialogContent className="border-none bg-transparent p-0 shadow-none">
        <div className="w-[820px] max-w-[92vw] overflow-hidden rounded-2xl bg-white">
          {/* Header */}
          <div className="px-8 pt-7 pb-4">
            <h2 className="text-2xl font-semibold">ফিল্টার করুন</h2>
          </div>

          {/* Body */}
          <div className="px-8 pb-6">
            <div className="grid grid-cols-12 gap-x-8 gap-y-5">
              <FieldSelect label="বিভাগ" className="col-span-12 md:col-span-6" />
              <FieldSelect label="জেলা" className="col-span-12 md:col-span-6" />
              <FieldSelect label="উপজেলা" className="col-span-12" />
              <FieldSelect label="মন্ত্রণালয়" className="col-span-12 md:col-span-6" />
              <FieldSelect label="অধিদপ্তর" className="col-span-12 md:col-span-6" />

              {/* Budget Range */}
              <div className="col-span-12">
                <p className="mb-2 text-[12px] font-semibold">
                  বাজেট সীমা{" "}
                  <span className="font-semibold tracking-wide text-[var(--color-primary-color)]">
                    (BUDGET RANGE)
                  </span>
                </p>

                <div className="grid grid-cols-12 items-center gap-4">
                  <div className="col-span-12 md:col-span-5">
                    <FieldInput placeholder="Minimum" />
                  </div>

                  <div className="col-span-12 md:col-span-2 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray">থেকে</span>
                  </div>

                  <div className="col-span-12 md:col-span-5">
                    <FieldInput placeholder="Maximum" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[var(--color-light-gray)] bg-[var(--color-off-white)] px-8 py-5">
            <Button
              variant="outline"
              onClick={onReset}
              className="h-11 rounded-xl border-[var(--color-light-gray)] bg-white px-7 text-gray hover:bg-[var(--color-off-white)]"
            >
              রিসেট করুন
            </Button>

            <Button
              onClick={onApply}
              className="h-11 rounded-xl bg-[var(--color-primary-color)] px-8 text-white hover:bg-[var(--color-primary-color)]/90"
            >
              ফিল্টার প্রয়োগ করুন
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FieldSelect({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-2 text-[12px] font-semibold text-gray">{label}</p>

      <div className="relative">
        <select
          className="h-12 w-full appearance-none rounded-xl border border-[var(--color-light-gray)] bg-[var(--color-off-white)] px-4 pr-10 text-sm text-gray outline-none focus:border-[var(--color-primary-color)]"
          defaultValue="select"
        >
          <option value="select">নির্বাচন করুন</option>
        </select>

        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray" />
      </div>
    </div>
  );
}

function FieldInput({ placeholder }: { placeholder: string }) {
  return (
    <input
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-[var(--color-light-gray)] bg-[var(--color-off-white)] px-4 text-sm text-gray outline-none focus:border-[var(--color-primary-color)]"
    />
  );
}
