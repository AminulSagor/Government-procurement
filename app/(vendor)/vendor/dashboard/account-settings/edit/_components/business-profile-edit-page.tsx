"use client";

import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Card from "@/components/cards/card";
import BusinessInfoFormCard from "./business-info-form-card";
import BankInfoFormCard from "./bank-info-form-card";
import VerificationUploadCard from "./verification-upload-card";
import PageFooterActions from "./page-footer-actions";
import { demoEditForm } from "../_data/business-profile-edit.demo";
import { BusinessProfileEditForm } from "../_types/business-profile-edit.types";

export default function BusinessProfileEditPage() {
  const initial = useMemo(() => demoEditForm, []);
  const [form, setForm] = useState<BusinessProfileEditForm>(initial);

  const setField = (k: keyof BusinessProfileEditForm, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
  };

  const onPickFile = (k: keyof BusinessProfileEditForm) => {
    // demo only
    setForm((p) => ({ ...p, [k]: "document-demo.pdf" }));
  };

  const onCancel = () => null; // no-op
  const onSubmit = () => null; // no-op

  return (
    <div className="px-6 py-6">
      <div className="mx-auto w-full max-w-[1100px]">
        <div>
          <h1 className="text-2xl font-semibold text-gray">
            ব্যবসায়িক প্রোফাইল সম্পাদনা
          </h1>
          <p className="mt-1 text-sm text-gray">
            আপনার ব্যবসায়িক তথ্য এবং নথিপত্র হালনাগাদ করুন
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            <BusinessInfoFormCard form={form} setField={setField} />
            <BankInfoFormCard
              form={form}
              setField={setField}
              onPickCheque={() => onPickFile("bankChequeFileName")}
            />
          </div>

          <div>
            <Card className="p-4">
              <VerificationUploadCard
                tradeLicenseFileName={form.tradeLicenseFileName}
                tinFileName={form.tinFileName}
                binFileName={form.binFileName}
                onPickTradeLicense={() => onPickFile("tradeLicenseFileName")}
                onPickTin={() => onPickFile("tinFileName")}
                onPickBin={() => onPickFile("binFileName")}
              />
            </Card>
          </div>
        </div>

        <div className="mt-6 border-t border-gray/10 pt-4">
          <PageFooterActions onCancel={onCancel} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}
