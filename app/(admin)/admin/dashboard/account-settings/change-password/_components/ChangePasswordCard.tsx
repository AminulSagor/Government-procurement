// app/(admin)/account-settings/change-password/_components/ChangePasswordCard.tsx
"use client";

import { useMemo, useState } from "react";
import type { ChangePasswordDemo } from "../_types/change-password.types";
import ChangePasswordHeader from "./ChangePasswordHeader";
import PasswordField from "./PasswordField";
import PasswordRequirements from "./PasswordRequirements";
import ChangePasswordActions from "./ChangePasswordActions";

function evaluateRules(pw: string) {
  const minLen = pw.length >= 8;
  const upper = /[A-Z]/.test(pw);
  const number = /[0-9]/.test(pw);
  const special = /[^A-Za-z0-9]/.test(pw);
  return { minLen, upper, number, special };
}

export default function ChangePasswordCard({ demo }: { demo: ChangePasswordDemo }) {
  const [current, setCurrent] = useState(demo.prefill?.currentPassword ?? "");
  const [next, setNext] = useState(demo.prefill?.newPassword ?? "");
  const [confirm, setConfirm] = useState(demo.prefill?.confirmPassword ?? "");

  const rulesState = useMemo(() => evaluateRules(next), [next]);
  const confirmOk = confirm.length > 0 && confirm === next;

  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(100,116,139,0.18)] bg-white shadow-sm">
      <ChangePasswordHeader titleBn={demo.copy.cardTitleBn} />

      <div className="p-6">
        <div className="space-y-5">
          <PasswordField
            labelBn={demo.copy.currentLabelBn}
            labelEn={demo.copy.currentLabelEn}
            value={current}
            onChange={setCurrent}
          />

          <div className="space-y-3">
            <PasswordField
              labelBn={demo.copy.newLabelBn}
              labelEn={demo.copy.newLabelEn}
              value={next}
              onChange={setNext}
            />

            <PasswordRequirements
              titleBn={demo.copy.reqTitleBn}
              titleEn={demo.copy.reqTitleEn}
              rules={demo.rules}
              state={rulesState}
            />
          </div>

          <PasswordField
            labelBn={demo.copy.confirmLabelBn}
            labelEn={demo.copy.confirmLabelEn}
            value={confirm}
            onChange={setConfirm}
            hint={
              confirm.length > 0 && !confirmOk
                ? "পাসওয়ার্ড মিলছে না"
                : undefined
            }
          />

          <ChangePasswordActions
            saveText={demo.copy.saveBtnBn}
            cancelText={demo.copy.cancelBtnBn}
            disabled={!current || !next || !confirmOk || Object.values(rulesState).some((v) => !v)}
            onSave={() => {
              // UI only. Hook your API here.
              // keep empty as per your instruction.
            }}
            onCancel={() => {
              // UI only. navigate back or reset as you want.
              setCurrent(demo.prefill?.currentPassword ?? "");
              setNext(demo.prefill?.newPassword ?? "");
              setConfirm(demo.prefill?.confirmPassword ?? "");
            }}
          />
        </div>
      </div>
    </div>
  );
}
