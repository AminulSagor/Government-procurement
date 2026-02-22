"use client";

import { Fingerprint, FileText, FileCheck } from "lucide-react";
import type { CreateAgentFormState, UploadKey } from "../_types/create-agent.types";

function UploadBox({
  Icon,
  title,
  subtitle,
  onPick,
}: {
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      className={[
        "group w-full",
        "rounded-2xl border border-dashed border-[rgba(100,116,139,0.30)]",
        "bg-[rgba(255,255,255,0.96)]",
        "px-6 py-8 text-center",
        "hover:bg-[rgba(246,247,248,0.65)]",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[240px] flex-col items-center">
        <Icon className="h-10 w-10 text-[rgba(100,116,139,0.55)]" />
        <div className="mt-4 text-base font-extrabold text-[rgba(16,24,25,0.85)]">
          {title}
        </div>
        <div className="mt-1 text-xs font-semibold text-[rgba(100,116,139,0.70)]">
          {subtitle}
        </div>
      </div>
    </button>
  );
}

export default function CreateAgentDocsUpload({
  value,
  onChange,
}: {
  value: CreateAgentFormState;
  onChange: (v: CreateAgentFormState) => void;
}) {
  const setFile = (key: UploadKey, fileName: string) => {
    onChange({
      ...value,
      uploads: { ...value.uploads, [key]: { key, fileName } },
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <UploadBox
        Icon={Fingerprint}
        title="এনআইডি কার্ড"
        subtitle="(ফ্রন্ট ও ব্যাক)"
        onPick={() => setFile("signatureCard", "nid.pdf")}
      />
      <UploadBox
        Icon={FileText}
        title="জীবনবৃত্তান্ত (CV)"
        subtitle="PDF ফরম্যাটে দিন"
        onPick={() => setFile("cv", "cv.pdf")}
      />
      <UploadBox
        Icon={FileCheck}
        title="চুক্তিনামা"
        subtitle="(Agreement Copy)"
        onPick={() => setFile("agreement", "agreement.pdf")}
      />
    </div>
  );
}
