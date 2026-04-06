"use client";

import Card from "@/components/cards/card";
import { ProductDetails } from "../_types/requisition-popups.types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  data: ProductDetails;
  onViewSpecPdf?: (attachmentId: string) => void;
};

export default function ViewProductDetailsDialog({
  open,
  onOpenChange,
  data,
  onViewSpecPdf,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[760px] rounded-2xl p-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="border-b border-[rgba(0,0,0,0.08)] px-6 py-4">
          <DialogTitle className="text-base font-semibold">
            পণ্যের বিস্তারিত স্পেসিফিকেশন
          </DialogTitle>
        </DialogHeader>

        {/* Scroll Body */}
        <div className="max-h-[70vh] overflow-y-auto overflow-x-hidden px-6 py-5">
          <div className="space-y-5">
            {/* Title */}
            <div className="space-y-1">
              <div className="text-2xl font-bold text-[var(--color-primary-color)]">
                {data.titleBn}{" "}
                {data.titleEn ? (
                  <span className="font-semibold">{data.titleEn}</span>
                ) : null}{" "}
                – <span className="font-bold">{data.quantityText}</span>
              </div>

              <div className="h-1 w-14 rounded-full bg-[var(--color-primary-color)]" />
            </div>

            {/* Description */}
            <div className="whitespace-pre-line text-[rgba(0,0,0,0.70)] leading-7">
              {data.descriptionBn}
            </div>

            {/* Attachments */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[rgba(0,0,0,0.60)]">
                সংযুক্ত নথি (ATTACHED DOCUMENTS)
              </div>

              {(data.attachments?.length ?? 0) === 0 ? (
                <Card className="border border-[rgba(0,0,0,0.10)] bg-white p-4">
                  <div className="text-sm text-[rgba(0,0,0,0.60)]">
                    কোনো সংযুক্ত নথি নেই
                  </div>
                </Card>
              ) : (
                <div className="space-y-3">
                  {data.attachments!.map((a) => (
                    <Card
                      key={a.id}
                      className="flex flex-col gap-3 border border-[rgba(0,0,0,0.10)] bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      {/* Left */}
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,0,0,0.08)]">
                          <span className="text-sm font-bold text-[rgba(220,38,38,0.95)]">
                            PDF
                          </span>
                        </div>

                        <div className="min-w-0 space-y-0.5">
                          <div className="truncate font-semibold text-[var(--color-foreground)]">
                            {a.fileName}
                          </div>
                          <div className="truncate text-xs text-[rgba(0,0,0,0.50)]">
                            সাইজঃ {a.sizeText} | তারিখঃ {a.dateText}
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <div className="flex justify-end sm:justify-start">
                        <Button
                          variant="primary"
                          type="button"
                          onClick={() => onViewSpecPdf?.(a.id)}
                          className="h-10 w-full sm:w-auto sm:min-w-[170px]"
                        >
                          স্পেসিফিকেশন দেখুন
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="border-t border-[rgba(0,0,0,0.08)] px-6 py-4 flex justify-end bg-white">
          <Button
            variant="secondary"
            type="button"
            onClick={() => onOpenChange(false)}
          >
            বন্ধ করুন
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
