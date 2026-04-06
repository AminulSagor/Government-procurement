"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloud, X, FileText, CheckCircle2, Loader2 } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

type UploadState = "form" | "uploading" | "success";

const bnDigits = (n: string) =>
  n.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

const formatMB = (bytes: number) => {
  const mb = bytes / 1024 / 1024;
  return bnDigits(mb.toFixed(1));
};

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

const DocumentFileUplaod = ({ open, setOpen }: Props) => {
  // ✅ input is user-chosen (NOT auto from file)
  const [fileName, setFileName] = React.useState("");

  const [file, setFile] = React.useState<File | null>(null);
  const [dragOver, setDragOver] = React.useState(false);

  const [step, setStep] = React.useState<UploadState>("form");
  const [progress, setProgress] = React.useState(0);
  const [uploadedBytes, setUploadedBytes] = React.useState(0);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const timerRef = React.useRef<number | null>(null);

  const reset = () => {
    setFileName("");
    setFile(null);
    setDragOver(false);
    setStep("form");
    setProgress(0);
    setUploadedBytes(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const close = () => {
    setOpen(false);
    reset();
  };

  const validateAndSetFile = (f: File) => {
    if (f.size > MAX_SIZE_BYTES) {
      alert(`সর্বোচ্চ ফাইল সাইজ: ${MAX_SIZE_MB} মেগাবাইট`);
      return;
    }
    setFile(f);
    // ✅ DO NOT auto-fill input
  };

  const onPickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    validateAndSetFile(f);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    validateAndSetFile(f);
  };

  const startFakeUpload = () => {
    // UI demo like your SS (replace with real upload later)
    setStep("uploading");
    setProgress(0);
    setUploadedBytes(0);

    const total = file?.size ?? 0;
    const start = Date.now();

    timerRef.current = window.setInterval(() => {
      const t = (Date.now() - start) / 1800; // ~1.8s duration
      const p = clamp(Math.round(t * 100), 0, 100);

      setProgress(p);
      setUploadedBytes(Math.round((p / 100) * total));

      if (p >= 100) {
        if (timerRef.current) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setTimeout(() => setStep("success"), 250);
      }
    }, 60);
  };

  const onUpload = async () => {
    if (!fileName.trim()) {
      alert("ফাইলের নাম লিখুন");
      return;
    }
    if (!file) {
      alert("ফাইল নির্বাচন করুন");
      return;
    }

    // ✅ replace this with your API call:
    // await uploadDocument({ title: fileName.trim(), file, onProgress })
    console.log("UPLOAD PAYLOAD", {
      title: fileName.trim(),
      file,
      fileSize: file.size,
      mime: file.type,
    });

    startFakeUpload();
  };

  const cancelUpload = () => {
    // UI cancel like the “X” in SS
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setStep("form");
    setProgress(0);
    setUploadedBytes(0);
  };

  const okSuccess = () => {
    close();
  };

  const renderForm = () => (
    <>
      <DialogHeader className="px-6 pt-5 pb-3">
        <div className="flex items-start justify-between">
          <DialogTitle className="text-primary-color text-lg font-bold">
            ফাইল আপলোড করুন
          </DialogTitle>
        </div>
      </DialogHeader>

      <div className="border-t w-full" />

      <div className="px-6 py-5 space-y-4">
        <div className="space-y-2">
          <FieldLabel className="font-semibold text-sm">ফাইলের নাম</FieldLabel>
          <Input
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="ফাইলের নাম লিখুন"
            className="focus-visible:ring-1"
          />
        </div>

        <div className="space-y-2">
          <FieldLabel className="font-semibold text-sm">
            ফাইল নির্বাচন
          </FieldLabel>

          <div
            onDragEnter={() => setDragOver(true)}
            onDragLeave={() => setDragOver(false)}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={[
              "rounded-lg border-2 border-dashed px-4 py-10 cursor-pointer select-none",
              "flex flex-col items-center justify-center text-center gap-2",
              dragOver
                ? "border-primary-color bg-primary-color/5"
                : "border-gray-200 bg-white",
            ].join(" ")}
          >
            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
              <UploadCloud className="h-6 w-6 text-gray-500" />
            </div>

            <p className="text-sm font-semibold text-gray-700">
              ফাইল নির্বাচন করুন বা এখানে টেনে আনুন
            </p>

            <p className="text-xs text-gray-500">
              সর্বোচ্চ ফাইল সাইজ: {MAX_SIZE_MB} মেগাবাইট
            </p>

            {file && (
              <div className="mt-2 text-xs text-gray-700">
                <span className="font-semibold">Selected:</span> {file.name} •{" "}
                {formatMB(file.size)} MB
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={onPickFile}
            />
          </div>
        </div>
      </div>

      <div className="border-t px-6 py-4 flex items-center justify-end gap-3">
        <Button variant="outline" onClick={close}>
          বাতিল
        </Button>
        <Button
          onClick={onUpload}
          className="bg-primary-color hover:bg-primary-color/90"
        >
          আপলোড করুন
        </Button>
      </div>
    </>
  );

  const renderUploading = () => {
    const total = file?.size ?? 0;

    return (
      <>
        <DialogHeader className="px-6 pt-5 pb-3">
          <div className="flex items-start justify-between">
            <DialogTitle className="text-primary-color text-lg font-bold">
              ফাইল আপলোড প্রগতি
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="border-t w-full" />

        <div className="px-6 py-5 space-y-5">
          <div className="space-y-2">
            <FieldLabel className="font-semibold text-sm">
              ফাইলের নাম
            </FieldLabel>
            <Input value={fileName} readOnly className="focus-visible:ring-0" />
          </div>

          <div className="space-y-2">
            <FieldLabel className="font-semibold text-sm">
              আপলোড স্ট্যাটাস
            </FieldLabel>

            <div className="rounded-xl border bg-white p-4">
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary-color/5 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary-color" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {file?.name ?? "-"}
                    </p>
                    <p className="text-sm font-semibold text-primary-color">
                      {bnDigits(String(progress))}%
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {formatMB(uploadedBytes)} মেগাবাইট / {formatMB(total)}{" "}
                    মেগাবাইট
                  </p>

                  <div className="mt-3 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-primary-color rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={cancelUpload}
                  className="h-10 w-10 rounded-md hover:bg-gray-100 flex items-center justify-center"
                  title="Cancel"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t px-6 py-4 flex items-center justify-end gap-3">
          <Button variant="outline" onClick={close}>
            বাতিল
          </Button>
          <Button
            disabled
            className="bg-primary-color/60 hover:bg-primary-color/60 cursor-not-allowed"
          >
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              আপলোড হচ্ছে...
            </span>
          </Button>
        </div>
      </>
    );
  };

  const renderSuccess = () => (
    <>
      <DialogHeader className="px-6 pt-5 pb-3">
        <div className="flex items-start justify-between">
          <DialogTitle className="text-primary-color text-lg font-bold">
            ফাইল আপলোড সফল
          </DialogTitle>
        </div>
      </DialogHeader>

      <div className="border-t w-full" />

      <div className="px-6 py-6">
        <div className="space-y-2">
          <FieldLabel className="font-semibold text-sm">ফাইলের নাম</FieldLabel>
          <Input
            value={file?.name ?? fileName}
            readOnly
            className="focus-visible:ring-0"
          />
        </div>

        <div className="py-10 flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>

          <p className="mt-6 text-xl font-extrabold text-gray-900">
            আপলোড সফল হয়েছে!
          </p>

          <p className="mt-2 text-sm text-gray-600">{file?.name ?? "-"}</p>
          <p className="mt-1 text-sm text-gray-500">
            {file ? `${formatMB(file.size)} মেগাবাইট` : ""}
          </p>
        </div>
      </div>

      <div className="border-t px-6 py-4 flex items-center justify-center">
        <Button
          onClick={okSuccess}
          className="bg-primary-color hover:bg-primary-color/90 w-full sm:w-60 h-12 text-base font-bold"
        >
          ঠিক আছে
        </Button>
      </div>
    </>
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        // prevent closing while uploading (optional)
        if (step === "uploading") return;
        if (!v) close();
        else setOpen(true);
      }}
    >
      <DialogContent className="w-full p-0 overflow-hidden">
        {step === "form" && renderForm()}
        {step === "uploading" && renderUploading()}
        {step === "success" && renderSuccess()}
      </DialogContent>
    </Dialog>
  );
};

export default DocumentFileUplaod;
