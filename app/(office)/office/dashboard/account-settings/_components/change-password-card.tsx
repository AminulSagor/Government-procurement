"use client";

import { useMemo, useState } from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import { Eye, EyeOff, RotateCcw } from "lucide-react";
import PasswordRequirements from "./password-requirements";
import {
  ChangePasswordFormState,
  PasswordRequirement,
} from "@/app/(office)/office/types/change-password.types";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold text-black">{children}</p>;
}

function InputRow({
  value,
  onChange,
  type,
  placeholder,
  right,
  readOnly = false,
}: {
  value: string;
  onChange: (v: string) => void;
  type: string;
  placeholder?: string;
  right?: React.ReactNode;
  readOnly?: boolean;
}) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        className="
          w-full h-11 rounded-lg border border-light-gray/30 bg-white
          px-4 pr-12 text-base text-black outline-none
          focus:border-primary-color/60
        "
      />
      {right ? (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">{right}</div>
      ) : null}
    </div>
  );
}

function calcRequirements(pw: string): PasswordRequirement[] {
  const hasLen = pw.length >= 8;
  const hasUpper = /[A-Z]/.test(pw);
  const hasNum = /[0-9]/.test(pw);
  const hasSpecial = /[@#$%]/.test(pw);

  return [
    { id: "len", labelBn: "কমপক্ষে ৮টি অক্ষর হতে হবে", passed: hasLen },
    {
      id: "upper",
      labelBn: "কমপক্ষে একটি বড় হাতের অক্ষর (A-Z) থাকতে হবে",
      passed: hasUpper,
    },
    {
      id: "num",
      labelBn: "কমপক্ষে একটি সংখ্যা (0-9) থাকতে হবে",
      passed: hasNum,
    },
    {
      id: "sp",
      labelBn: "একটি বিশেষ চিহ্ন (যেমন: @, #, $, %) থাকতে হবে",
      passed: hasSpecial,
    },
  ];
}

export default function ChangePasswordCard() {
  const [form, setForm] = useState<ChangePasswordFormState>({
    loginEmail: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",

    showLoginEmail: false,
    showCurrent: false,
    showNew: false,
    showConfirm: false,
  });

  const requirements = useMemo(
    () => calcRequirements(form.newPassword),
    [form.newPassword],
  );

  const canSubmit = useMemo(() => {
    const allPassed = requirements.every((r) => r.passed);
    const match =
      form.newPassword && form.newPassword === form.confirmNewPassword;
    return (
      form.loginEmail.trim() &&
      form.currentPassword.trim() &&
      allPassed &&
      match
    );
  }, [form, requirements]);

  return (
    <div className="flex justify-center">
      <Card className="p-0 overflow-hidden w-full max-w-[680px]">
        {/* header */}
        <div className="flex items-center gap-2 px-6 py-4 bg-off-white border-b border-light-gray/20">
          <RotateCcw className="w-5 h-5 text-primary-color" />
          <h3 className="text-base font-bold text-black">
            পাসওয়ার্ড পরিবর্তন করুন
          </h3>
        </div>

        {/* body */}
        <div className="px-6 py-6 space-y-5">
          {/* Login Email */}
          <div className="space-y-2">
            <Label>লগইন ইমেইল (Login Email)</Label>
            <InputRow
              value={form.loginEmail}
              onChange={(v) => setForm((p) => ({ ...p, loginEmail: v }))}
              type={form.showLoginEmail ? "text" : "password"}
              placeholder=""
              right={
                <button
                  type="button"
                  className="text-light-gray"
                  onClick={() =>
                    setForm((p) => ({
                      ...p,
                      showLoginEmail: !p.showLoginEmail,
                    }))
                  }
                >
                  {form.showLoginEmail ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            />
          </div>

          {/* Current Password */}
          <div className="space-y-2">
            <Label>বর্তমান পাসওয়ার্ড (Current Password)</Label>
            <InputRow
              value={form.currentPassword}
              onChange={(v) => setForm((p) => ({ ...p, currentPassword: v }))}
              type={form.showCurrent ? "text" : "password"}
              right={
                <button
                  type="button"
                  className="text-light-gray"
                  onClick={() =>
                    setForm((p) => ({ ...p, showCurrent: !p.showCurrent }))
                  }
                >
                  {form.showCurrent ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            />
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label>নতুন পাসওয়ার্ড (New Password)</Label>
            <InputRow
              value={form.newPassword}
              onChange={(v) => setForm((p) => ({ ...p, newPassword: v }))}
              type={form.showNew ? "text" : "password"}
              right={
                <button
                  type="button"
                  className="text-light-gray"
                  onClick={() =>
                    setForm((p) => ({ ...p, showNew: !p.showNew }))
                  }
                >
                  {form.showNew ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            />
          </div>

          <PasswordRequirements items={requirements} />

          {/* Confirm New Password */}
          <div className="space-y-2">
            <Label>পাসওয়ার্ড নিশ্চিত করুন (Confirm New Password)</Label>
            <InputRow
              value={form.confirmNewPassword}
              onChange={(v) =>
                setForm((p) => ({ ...p, confirmNewPassword: v }))
              }
              type={form.showConfirm ? "text" : "password"}
              right={
                <button
                  type="button"
                  className="text-light-gray"
                  onClick={() =>
                    setForm((p) => ({ ...p, showConfirm: !p.showConfirm }))
                  }
                >
                  {form.showConfirm ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            />
          </div>

          {/* actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <PrimaryButton
              className={`w-full sm:w-1/2 py-3 text-base ${
                !canSubmit ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={() => {
                // API call here
                console.log("change password", form);
              }}
            >
              পাসওয়ার্ড হালনাগাদ করুন
            </PrimaryButton>

            <SecondaryButton className="w-full sm:w-1/2 py-3 text-base">
              বাতিল করুন
            </SecondaryButton>
          </div>
        </div>
      </Card>
    </div>
  );
}
