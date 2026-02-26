"use client";

import React, { useMemo, useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import Dialog from "@/components/dialog/dialog";
import SecondaryButton from "@/components/buttons/secondary-button";
import PrimaryButton from "@/components/buttons/primary-button";

type EvidenceFile = File;

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  onSubmit?: (payload: { message: string; evidence?: EvidenceFile }) => void;

  defaultMessage?: string;
};

export default function OrderRequiredActionsDialog({
  open,
  onOpenChange,
  onSubmit,
  defaultMessage = "",
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [message, setMessage] = useState(defaultMessage);
  const [file, setFile] = useState<EvidenceFile | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const fileHint = useMemo(() => {
    if (!file) return "ফাইল নির্বাচন করুন বা এখানে টেনে আনুন";
    return file.name;
  }, [file]);

  const handlePickFile = () => inputRef.current?.click();

  const validateAndSetFile = (f?: File | null) => {
    if (!f) return;

    // max 10 MB (like screenshot)
    const maxBytes = 10 * 1024 * 1024;
    if (f.size > maxBytes) return;

    setFile(f);
  };

  const handleSubmit = () => {
    onSubmit?.({ message, evidence: file ?? undefined });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} size="md">
      <div className="space-y-4">
        {/* title */}
        <div className="pb-2 border-b border-primary-color/10">
          <h2 className="text-lg font-semibold text-primary-color">
            প্রাপ্তি নিশ্চিত করুন
          </h2>
        </div>

        {/* form */}
        <div className="space-y-4">
          {/* feedback */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">
              ফিডব্যাক ও মন্তব্য
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="আপনার ফিডব্যাক ও মন্তব্য লিখুন..."
              className="w-full min-h-[120px] rounded-lg border border-primary-color/20 bg-white
                         px-4 py-3 text-sm text-black placeholder:text-medium-gray
                         focus:outline-none focus:ring-2 focus:ring-primary-color/20"
            />
          </div>

          {/* evidence */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">
              সংযুক্ত দলিলাদি (Evidence)
            </label>

            <input
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={(e) => validateAndSetFile(e.target.files?.[0] ?? null)}
            />

            <div
              role="button"
              tabIndex={0}
              onClick={handlePickFile}
              onKeyDown={(e) => e.key === "Enter" && handlePickFile()}
              onDragEnter={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragOver(true);
              }}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragOver(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragOver(false);
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragOver(false);
                validateAndSetFile(e.dataTransfer.files?.[0] ?? null);
              }}
              className={`
                w-full rounded-xl border-2 border-dashed
                ${dragOver ? "border-primary-color/60 bg-secondary-color/10" : "border-medium-gray/40 bg-off-white"}
                px-6 py-10 text-center cursor-pointer
                transition-all duration-150
              `}
            >
              <div className="mx-auto w-fit rounded-full bg-white border border-primary-color/10 p-3">
                <UploadCloud className="h-6 w-6 text-medium-gray" />
              </div>

              <p className="mt-3 text-sm text-black">{fileHint}</p>
              <p className="mt-1 text-xs text-medium-gray">
                সর্বোচ্চ ফাইল সাইজ: ১০ মেগাবাইট
              </p>

              {file && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  <SecondaryButton
                    className="px-3 py-1 text-sm"
                    onClick={() => {
                      setFile(null);
                      if (inputRef.current) inputRef.current.value = "";
                    }}
                  >
                    ফাইল সরান
                  </SecondaryButton>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="pt-2 flex items-center justify-end gap-3">
          <SecondaryButton
            className="px-6 py-2"
            onClick={() => onOpenChange(false)}
          >
            বাতিল
          </SecondaryButton>

          <PrimaryButton className="px-6 py-2" onClick={handleSubmit}>
            প্রাপ্তি নিশ্চিত করুন
          </PrimaryButton>
        </div>
      </div>
    </Dialog>
  );
}
