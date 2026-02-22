"use client";

import DialogShell from "./DialogShell";
import CodeTypeCard from "./CodeTypeCard";
import { Folder, ReceiptText } from "lucide-react";

export default function CodeTypeSelectDialog({
  open,
  onClose,
  onPick,
}: {
  open: boolean;
  onClose: () => void;
  onPick: (k: "PARENT" | "ECON") => void;
}) {
  return (
    <DialogShell
      open={open}
      onClose={onClose}
      title="কোডের ধরন নির্বাচন করুন"
      footer={
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className={[
              "h-11 rounded-xl bg-white px-8 text-sm font-semibold",
              "border border-gray/15 text-[var(--color-black)]",
              "hover:bg-[var(--color-off-white)]",
            ].join(" ")}
          >
            বাতিল করুন
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <CodeTypeCard
          title="প্যারেন্ট কোড / ক্যাটাগরি"
          subtitle="নতুন ৪-ডিজিটের ক্যাটাগরি কোড তৈরি করুন।"
          icon={<Folder className="h-10 w-10" />}
          onClick={() => onPick("PARENT")}
        />

        <CodeTypeCard
          title="বিস্তৃত অর্থনৈতিক কোড"
          subtitle="ব্যয়ের জন্য ৭-ডিজিটের বিস্তৃত অর্থনৈতিক কোড তৈরি করুন।"
          icon={<ReceiptText className="h-10 w-10" />}
          onClick={() => onPick("ECON")}
        />
      </div>
    </DialogShell>
  );
}
