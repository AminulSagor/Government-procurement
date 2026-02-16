"use client";

import { useMemo, useState } from "react";
import { correctionReasons } from "../_data/requisition-popups.demo";
import { CorrectionReasonKey } from "../_types/requisition-popups.types";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSubmit?: (payload: { reason: CorrectionReasonKey; message: string }) => Promise<void> | void;
};

export default function SendForCorrectionDialog({ open, onOpenChange, onSubmit }: Props) {
  const [reason, setReason] = useState<CorrectionReasonKey>("table-mismatch");
  const [message, setMessage] = useState("");

  useMemo(() => {
    return correctionReasons.find((r) => r.key === reason)?.label ?? "";
  }, [reason]);

  async function handleSubmit() {
    if (!reason) return;
    if (!message.trim()) return;

    await onSubmit?.({ reason, message: message.trim() });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[760px] rounded-2xl p-0">
        <DialogHeader className="px-6 py-4 border-b border-[rgba(0,0,0,0.08)]">
          <DialogTitle className="text-base font-semibold">
            চাহিদাপত্র সংশোধনের জন্য ফেরত পাঠান
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 py-5">
          <div className="space-y-5">
            {/* Reason */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-foreground)]">
                সংশোধনের কারণ <span className="text-[var(--color-danger)]">*</span>
              </label>

              <div className="relative">
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value as CorrectionReasonKey)}
                  className={[
                    "w-full h-11 rounded-lg px-4 pr-10",
                    "bg-white border border-[rgba(0,0,0,0.10)]",
                    "text-[var(--color-foreground)] outline-none",
                    "focus:border-[rgba(0,0,0,0.18)]",
                  ].join(" ")}
                >
                  {correctionReasons.map((r) => (
                    <option key={r.key} value={r.key}>
                      {r.label}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.45)]">
                  ▾
                </div>
              </div>
            </div>

            {/* Detailed message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-foreground)]">
                বিস্তারিত মন্তব্য <span className="text-[var(--color-danger)]">*</span>
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className={[
                  "w-full rounded-lg p-4",
                  "bg-white border border-[rgba(0,0,0,0.10)]",
                  "text-[var(--color-foreground)] outline-none",
                  "focus:border-[rgba(0,0,0,0.18)]",
                ].join(" ")}
                placeholder="বিস্তারিত লিখুন..."
              />

              <div className="text-xs text-[rgba(0,0,0,0.45)]">
                কমপক্ষে ৩০টি ক্যারেক্টার লিখুন
              </div>
            </div>

            {/* Info warning */}
            <div className="rounded-lg border border-[rgba(245,158,11,0.35)] bg-[rgba(245,158,11,0.10)] p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[rgba(245,158,11,0.95)]">ⓘ</div>
                <p className="text-sm text-[rgba(0,0,0,0.70)] leading-6">
                  অনুরোধটি পাঠানোর পর চাহিদাপত্রটি ড্রাফট মোডে ফিরে যাবে এবং সংশোধনের জন্য
                  পূর্ববর্তী ইউজারের কাছে পুনঃপ্রেরণ হবে।
                </p>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Button variant="secondary" type="button" onClick={() => onOpenChange(false)}>
                বাতিল করুন
              </Button>

              <Button
                variant="primary"
                type="button"
                onClick={handleSubmit}
                disabled={message.trim().length < 30}
              >
                সংশোধনের অনুরোধ পাঠান
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
