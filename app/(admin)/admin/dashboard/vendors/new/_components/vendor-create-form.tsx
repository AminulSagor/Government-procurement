"use client";

import { useMemo, useState } from "react";
import BasicInfoCard from "./sections/basic-info-card";
import AddressCard from "./sections/address-card";
import AccessControlCard from "./sections/access-control-card";
import DocumentUploadCard from "./sections/document-upload-card";
import CategoryTaggingCard from "./sections/category-tagging-card";
import BottomActions from "./ui/bottom-actions";
import type { VendorCreateValues, VendorDocumentKey } from "../_types/vendor";
import { vendorCreateDefaults } from "../_data/vendor-demo";
import { vendorDocumentMeta } from "../_data/vendor-documents";

export default function VendorCreateForm() {
  const [values, setValues] = useState<VendorCreateValues>(vendorCreateDefaults);

  const documents = useMemo(() => vendorDocumentMeta, []);

  function patch(next: Partial<VendorCreateValues>) {
    setValues((p) => ({ ...p, ...next }));
  }

  function patchDocs(key: VendorDocumentKey, file: File | null) {
    setValues((p) => ({
      ...p,
      documents: { ...p.documents, [key]: file },
    }));
  }

  function onSubmit() {
    // demo only: replace with server action / API call
    console.log("SUBMIT payload:", values);
    alert("Demo: form submitted. Check console for payload.");
  }

  return (
    <section className="relative">
      {/* main grid like your screenshot */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* LEFT column */}
        <div className="space-y-5">
          <BasicInfoCard values={values} onChange={patch} />
          <AddressCard values={values} onChange={patch} />
          <AccessControlCard values={values} onChange={patch} />
        </div>

        {/* RIGHT column */}
        <div className="space-y-5">
          <DocumentUploadCard
            items={documents}
            files={values.documents}
            onPick={patchDocs}
          />
          <CategoryTaggingCard values={values} onChange={patch} />
        </div>
      </div>

      {/* bottom bar */}
      <BottomActions
        onCancel={() => history.back()}
        onSubmit={onSubmit}
        submitLabel="ভেন্ডর রেজিস্ট্রেশন তৈরি করুন"
      />
    </section>
  );
}