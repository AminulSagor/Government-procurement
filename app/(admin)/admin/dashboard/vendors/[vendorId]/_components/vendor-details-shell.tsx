"use client";

import { useMemo, useState } from "react";
import BackButton from "./ui/back-button";
import VendorTabs, { type VendorTabKey } from "./vendor-tabs";
import VendorProfilePanel from "./profile/vendor-profile-panel";
import VendorInventoryPanel from "./inventory/vendor-inventory-panel";
import { vendorDetailsDemo } from "../_data/vendor-details-demo";

type Props = {
  vendorId: string;
};

export default function VendorDetailsShell({ vendorId }: Props) {
  const data = useMemo(() => vendorDetailsDemo(vendorId), [vendorId]);
  const [tab, setTab] = useState<VendorTabKey>("profile");

  return (
    <main className="min-h-[calc(100vh-64px)] bg-off-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-6">
        <BackButton href="/admin/dashboard/vendors" label="পেছনে যান" />

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
          <VendorTabs active={tab} onChange={setTab} />
        </div>

        <div className="mt-5">
          {tab === "profile" ? (
            <VendorProfilePanel vendor={data} />
          ) : (
            <VendorInventoryPanel vendor={data} />
          )}
        </div>
      </div>
    </main>
  );
}