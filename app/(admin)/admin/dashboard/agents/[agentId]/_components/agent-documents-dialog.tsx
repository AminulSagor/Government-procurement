"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  X,
  Folder,
  Download,
  Eye,
  ClipboardList,
  FileText,
  FileCheck,
} from "lucide-react";

type DocItem = {
  key: "nid" | "cv" | "agreement";
  titleLines: [string, string];
  Icon: React.ElementType;
};

const items: DocItem[] = [
  { key: "nid", titleLines: ["জাতীয়", "পরিচয়পত্র (NID)"], Icon: ClipboardList },
  { key: "cv", titleLines: ["জীবনবৃত্তান্ত", "(CV)"], Icon: FileText },
  {
    key: "agreement",
    titleLines: ["চুক্তিনামা", "(Agreement Paper)"],
    Icon: FileCheck,
  },
];

function DocCard({
  titleLines,
  Icon,
  onDownload,
  onView,
}: {
  titleLines: [string, string];
  Icon: React.ElementType;
  onDownload: () => void;
  onView: () => void;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white px-6 py-7 shadow-sm">
      {/* top */}
      <div className="flex flex-col items-center text-center">
        <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[rgba(120,185,181,0.18)]">
          <Icon className="h-8 w-8 text-[var(--color-primary-color)]" />
        </div>

        {/* fixed height title area */}
        <div className="mt-5 min-h-[64px]">
          <div className="text-[18px] font-extrabold leading-snug text-[var(--color-black)]">
            {titleLines[0]}
          </div>
          <div className="text-[18px] font-extrabold leading-snug text-[var(--color-black)]">
            {titleLines[1]}
          </div>
        </div>
      </div>

      {/* actions */}
      <div className="mt-auto pt-5">
        <div className="grid grid-cols-1 gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onDownload}
            className="h-11 w-full rounded-xl border border-[rgba(31,110,128,0.55)] bg-white font-bold text-[var(--color-primary-color)]"
          >
            <Download className="mr-2 h-4 w-4" />
            ডাউনলোড
          </Button>

          <Button
            type="button"
            onClick={onView}
            className="h-11 w-full rounded-xl bg-[var(--color-primary-color)] font-bold text-white hover:opacity-95"
          >
            <Eye className="mr-2 h-4 w-4" />
            দেখুন
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function AgentDocumentsDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className={[
          // ✅ WIDTH FIX (responsive)
          "w-[calc(100vw-48px)] sm:w-full sm:max-w-[980px]",
          // look & feel
          "rounded-2xl p-0 [&>button]:hidden",
          // optional: keep dialog inside viewport
          "max-h-[calc(100vh-48px)] overflow-hidden",
        ].join(" ")}
      >
        <div className="flex flex-col">
          {/* header */}
          <div className="flex items-center justify-between px-7 py-6">
            <div className="flex items-center gap-3">
              <Folder className="h-6 w-6 text-[var(--color-primary-color)]" />
              <h3 className="text-[20px] font-extrabold text-[var(--color-black)]">
                এজেন্ট নথিপত্র
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[rgba(100,116,139,0.08)]"
            >
              <X className="h-5 w-5 text-[var(--color-medium-gray)]" />
            </button>
          </div>

          <div className="border-t border-[rgba(100,116,139,0.10)]" />

          {/* body */}
          <div className="bg-[rgba(246,247,248,0.55)] px-7 py-7">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {items.map((it) => (
                <DocCard
                  key={it.key}
                  titleLines={it.titleLines}
                  Icon={it.Icon}
                  onDownload={() => console.log("download", it.key)}
                  onView={() => console.log("view", it.key)}
                />
              ))}
            </div>
          </div>

          {/* footer */}
          <div className="flex justify-end bg-[var(--color-off-white)] px-7 py-5">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="h-11 rounded-xl px-8 font-bold"
            >
              বন্ধ করুন
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
