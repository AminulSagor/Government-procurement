"use client";

import React, { useMemo, useState } from "react";
import { CheckCircle2, Lock } from "lucide-react";
import Card from "@/components/cards/card";
import type {
  AdvancePaymentEntryData,
  UploadFileItem,
} from "@/app/(office)/office/types/advance-payment";
function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-semibold text-black">{children}</label>;
}

function Input({
  value,
  onChange,
  placeholder,
  readOnly,
  rightIcon,
}: {
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  rightIcon?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className={[
          "w-full rounded-md border px-4 py-3 text-sm outline-none",
          "border-medium-gray/20 bg-white text-black",
          readOnly ? "pr-12" : "pr-12",
        ].join(" ")}
      />
      {rightIcon ? (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {rightIcon}
        </div>
      ) : null}
    </div>
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className="w-full rounded-md border border-medium-gray/20 bg-white px-4 py-3 text-sm text-black outline-none"
    />
  );
}

function UploadBox({
  onPick,
  allowedTypesLabel,
}: {
  onPick: () => void;
  allowedTypesLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      className="w-full rounded-lg border-2 border-dashed border-medium-gray/25 bg-white p-8 text-center hover:brightness-105"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-off-white">
        <span className="text-primary-color text-xl">☁</span>
      </div>
      <p className="mt-3 text-sm text-black">
        ফাইল এখানে টেনে আনুন বা{" "}
        <span className="text-primary-color underline">নির্বাচন করুন</span>
      </p>
      <p className="mt-1 text-xs text-medium-gray">{allowedTypesLabel}</p>
    </button>
  );
}

function FileRow({
  file,
  onRemove,
}: {
  file: UploadFileItem;
  onRemove: () => void;
}) {
  return (
    <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-medium-gray/15 bg-off-white p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-medium-gray/15">
          <span className="text-red font-semibold">PDF</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-black">{file.name}</p>
          <p className="text-xs text-medium-gray">{file.sizeLabel}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-medium-gray/25 bg-white text-medium-gray hover:brightness-105"
        aria-label="Remove file"
      >
        🗑
      </button>
    </div>
  );
}

export default function PaymentForm({
  data,
}: {
  data: AdvancePaymentEntryData;
}) {
  const [recipientName, setRecipientName] = useState("");
  const [amount, setAmount] = useState("৳ 50,000");
  const [reference, setReference] = useState("REF-998210");
  const [note, setNote] = useState("");

  const [files, setFiles] = useState<UploadFileItem[]>(data.uploadedFiles);

  const stepText = useMemo(() => {
    const current = data.stepper.currentStepIndex + 1;
    const total = data.stepper.items.length;
    return `STEP ${String(current).padStart(2, "0")} OF ${String(total).padStart(2, "0")}`;
  }, [data.stepper.currentStepIndex, data.stepper.items.length]);

  const handlePickFile = () => {
    // demo add
    setFiles((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        name: "Invoice_Sep2023.pdf",
        sizeLabel: "2.4 MB",
      },
    ]);
  };

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-black">পেমেন্ট বিবরণ</h3>
            <p className="mt-1 text-sm text-medium-gray">
              প্রয়োজনীয় তথ্য দিয়ে নিচের ফর্মটি পূরণ করুন
            </p>
          </div>
          <p className="text-xs text-medium-gray">{stepText}</p>
        </div>

        <div className="mt-5 border-t border-medium-gray/15 pt-5 space-y-5">
          <div className="space-y-2">
            <FieldLabel>অফিস কোড</FieldLabel>
            <Input
              value={data.form.officeCode}
              readOnly
              rightIcon={<Lock className="h-4 w-4 text-medium-gray" />}
            />
          </div>

          <div className="space-y-2">
            <FieldLabel>
              {data.form.recipientNameLabel} <span className="text-red">*</span>
            </FieldLabel>
            <Input
              value={recipientName}
              onChange={setRecipientName}
              placeholder={data.form.placeholders.recipientName}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <FieldLabel>
                {data.form.amountLabel} <span className="text-red">*</span>
              </FieldLabel>
              <Input
                value={amount}
                onChange={setAmount}
                placeholder={data.form.placeholders.amount}
                rightIcon={<CheckCircle2 className="h-5 w-5 text-green" />}
              />
              <p className="text-xs text-green">{data.form.helper.amountOk}</p>
            </div>

            <div className="space-y-2">
              <FieldLabel>
                {data.form.referenceLabel} <span className="text-red">*</span>
              </FieldLabel>
              <Input
                value={reference}
                onChange={setReference}
                placeholder={data.form.placeholders.reference}
                rightIcon={<CheckCircle2 className="h-5 w-5 text-green" />}
              />
              <p className="text-xs text-medium-gray">
                {data.form.helper.referenceOk}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <FieldLabel>{data.form.noteLabel}</FieldLabel>
            <Textarea
              value={note}
              onChange={setNote}
              placeholder={data.form.placeholders.note}
            />
          </div>

          <div className="space-y-3">
            <FieldLabel>{data.form.uploadTitle}</FieldLabel>
            <UploadBox
              onPick={handlePickFile}
              allowedTypesLabel={data.form.helper.allowedTypesLabel}
            />

            {files.map((f) => (
              <FileRow
                key={f.id}
                file={f}
                onRemove={() =>
                  setFiles((prev) => prev.filter((x) => x.id !== f.id))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
