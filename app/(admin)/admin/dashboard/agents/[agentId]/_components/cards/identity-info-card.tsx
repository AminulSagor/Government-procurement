"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fingerprint, FileText } from "lucide-react";
import type { AgentProfile } from "../../_types/agent-profile.types";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold text-[rgba(100,116,139,0.75)]">
        {label}
      </div>
      <div className="mt-1 text-sm font-extrabold text-[rgba(16,24,25,0.80)]">
        {value}
      </div>
    </div>
  );
}

export default function IdentityInfoCard({
  data,
  onViewDocs,
}: {
  data: AgentProfile["identity"];
  onViewDocs: () => void;
}) {
  return (
    <Card className="rounded-2xl border border-[rgba(100,116,139,0.14)] bg-white px-6 py-5 shadow-sm">
      {/* header */}
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(120,185,181,0.18)]">
          <Fingerprint className="h-5 w-5 text-[var(--color-primary-color)]" />
        </span>
        <div className="text-base font-extrabold text-[var(--color-black)]">
          পরিচয়পত্র তথ্য
        </div>
      </div>

      {/* body */}
      <div className="mt-6 grid grid-cols-12 gap-4">
        {/* left fields */}
        <div className="col-span-8 space-y-6">
          <Field label="জাতীয় পরিচয়পত্র (NID)" value={data.nidNumber} />
          <Field label="জন্ম তারিখ" value={data.dobBn} />
          <Field label="স্থায়ী ঠিকানা" value={data.presentAddressBn} />
        </div>

        {/* right photo */}
        <div className="col-span-4 flex justify-end">
          <div className="overflow-hidden rounded-xl border border-[rgba(100,116,139,0.14)] bg-[var(--color-off-white)] p-2">
            <div className="relative h-[84px] w-[84px] overflow-hidden rounded-lg">
              <Image
                src="/avatars/Agent Rafiqul Islam.png"
                alt="NID"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* bottom button */}
        <div className="col-span-12 mt-2">
          <Button
            className="h-12 w-full rounded-xl bg-[var(--color-primary-color)] text-sm font-extrabold text-white hover:opacity-95"
            onClick={onViewDocs}
            type="button"
          >
            <FileText className="mr-2 h-5 w-5" />
            নথি দেখুন
          </Button>
        </div>
      </div>
    </Card>
  );
}
