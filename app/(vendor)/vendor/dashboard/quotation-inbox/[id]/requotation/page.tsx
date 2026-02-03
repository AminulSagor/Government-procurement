"use client";

import AttentionBanner from "../_components/attention-banner";
import RfqSidePanel from "../_components/rfq-side-panel";


export default function RequotationPage() {
  return (
    <div className="grid grid-cols-[320px_1fr] gap-4">
      {/* LEFT */}
      <RfqSidePanel  />

      {/* RIGHT */}
      <div className="space-y-4">
        {/* Requotation notice */}
        <AttentionBanner
          title="রিকোটেশনের জন্য অনুরোধ"
          message="আপনার পূর্ববর্তী কোটেশন সংশোধন করার অনুরোধ করা হয়েছে। অনুগ্রহ করে প্রয়োজনীয় পরিবর্তন করে পুনরায় জমা দিন।"
          badgeText="এখনই দেখুন"
        />

        {/* SAME FORM, different mode */}
        {/* <QuotationRightForm mode="requote" /> */}
      </div>
    </div>
  );
}
