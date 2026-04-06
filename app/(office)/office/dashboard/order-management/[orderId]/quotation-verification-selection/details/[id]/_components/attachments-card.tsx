"use client";

import { FileText, Image as ImageIcon } from "lucide-react";
import Card from "@/components/cards/card";
import { Attachment } from "@/app/(office)/office/types/quotation-verification-details-types";

export default function AttachmentsCard({
  attachments,
}: {
  attachments: Attachment[];
}) {
  return (
    <Card className="p-5">
      <h3 className="text-base font-semibold text-black">সংযুক্ত নথিপত্র</h3>

      <div className="mt-4 space-y-3">
        {attachments.map((a) => (
          <div
            key={a.id}
            className="flex items-center justify-between gap-3 rounded-lg border border-medium-gray/15 bg-off-white p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-medium-gray/15">
                {a.type === "pdf" ? (
                  <FileText className="h-5 w-5 text-red" />
                ) : (
                  <ImageIcon className="h-5 w-5 text-blue" />
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-black">{a.title}</p>
                <p className="text-xs text-medium-gray">{a.meta}</p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-medium-gray/25 bg-white px-3 py-2 text-sm text-black hover:brightness-105"
            >
              ⬇
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
