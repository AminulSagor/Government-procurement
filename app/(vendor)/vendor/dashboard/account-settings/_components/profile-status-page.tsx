"use client";

import React, { useMemo, useState } from "react";
import ProfileHeader from "./profile-header";
import ProfileCompletionCard from "./profile-completion-card";
import BusinessInfoCard from "./business-info-card";
import VerificationCard from "./verification-card";
import BankInfoStrip from "./bank-info-strip";
import SecurityPrivacyCard from "./security-privacy-card";
import { demoProfileStatus } from "../_data/profile-status.demo";
import { ProfileStatusData } from "../_types/profile-status.types";
import { redirect } from "next/navigation";

export default function ProfileStatusPage() {
  const initial = useMemo(() => demoProfileStatus, []);
  const [data, setData] = useState<ProfileStatusData>(initial);

  // ✅ functional demo handlers
  const onEditBusiness = () => {
    redirect("/vendor/dashboard/account-settings/edit");
    // setData((p) => ({
    //   ...p,
    //   business: { ...p.business, name: p.business.name + " (Edited)" },
    // }));
  };

  const onEditVerification = (key: string) => {
    setData((p) => ({
      ...p,
      verification: p.verification.map((v) =>
        v.key === key
          ? { ...v, value: v.value + "-X", status: v.status }
          : v
      ),
    }));
  };

  const onToggle2FA = () => {
    setData((p) => ({
      ...p,
      security: { twoFAEnabled: !p.security.twoFAEnabled },
    }));
  };

  const onChangePassword = () => {
    // demo only: pretend success by changing hint a bit
    setData((p) => ({
      ...p,
      completionHint: "পাসওয়ার্ড পরিবর্তন অনুরোধ সম্পন্ন হয়েছে (ডেমো)।",
    }));
  };

  return (
    <div className="px-6 py-6">
      <div className="mx-auto w-full max-w-[1100px]">
        <ProfileHeader />

        <div className="mt-4">
          <ProfileCompletionCard
            percent={data.completionPercent}
            label={data.completionLabel}
            hint={data.completionHint}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <BusinessInfoCard business={data.business} onEdit={onEditBusiness} />
          <VerificationCard
            items={data.verification}
          />
        </div>

        <div className="mt-4">
          <BankInfoStrip bank={data.bank} />
        </div>

        <div className="mt-4">
          <SecurityPrivacyCard
            twoFAEnabled={data.security.twoFAEnabled}
            onToggle2FA={onToggle2FA}
            onChangePassword={onChangePassword}
          />
        </div>
      </div>
    </div>
  );
}
