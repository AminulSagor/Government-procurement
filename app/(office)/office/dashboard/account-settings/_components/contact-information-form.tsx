"use client";

import { useMemo, useState } from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import { Contact2 } from "lucide-react";
import { ContactInformationFormData } from "@/app/(office)/office/types/office-information-edit.types";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold text-black">{children}</p>;
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type={type}
      className="
        w-full h-11 rounded-lg border border-light-gray/30 bg-white
        px-4 text-base text-black outline-none
        focus:border-primary-color/60
      "
    />
  );
}

export default function ContactInformationForm({
  initialData,
}: {
  initialData: ContactInformationFormData;
}) {
  const [form, setForm] = useState<ContactInformationFormData>(initialData);

  const canSave = useMemo(() => {
    return (
      form.officerInCharge.trim() &&
      form.designation.trim() &&
      form.phone.trim() &&
      form.email.trim() &&
      form.address.trim()
    );
  }, [form]);

  return (
    <Card className="p-0 overflow-hidden">
      {/* section header */}
      <div className="flex items-center gap-3 px-5 py-4">
        <Contact2 className="w-5 h-5 text-primary-color" />
        <h3 className="text-base font-bold text-black">
          যোগাযোগের তথ্য{" "}
          <span className="text-medium-gray font-semibold">
            (Contact Information)
          </span>
        </h3>
      </div>

      <div className="border-t border-light-gray/20" />

      {/* form */}
      <div className="px-5 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label>দায়িত্বপ্রাপ্ত কর্মকর্তা (Officer in Charge)</Label>
            <Input
              value={form.officerInCharge}
              onChange={(v) => setForm((p) => ({ ...p, officerInCharge: v }))}
            />
          </div>

          <div className="space-y-2">
            <Label>পদবি (Designation)</Label>
            <Input
              value={form.designation}
              onChange={(v) => setForm((p) => ({ ...p, designation: v }))}
            />
          </div>

          <div className="space-y-2">
            <Label>মোবাইল নম্বর (Phone)</Label>
            <Input
              value={form.phone}
              onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
            />
          </div>

          <div className="space-y-2">
            <Label>ইমেইল (Email)</Label>
            <Input
              value={form.email}
              onChange={(v) => setForm((p) => ({ ...p, email: v }))}
              type="email"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>ঠিকানা (Address)</Label>
            <Input
              value={form.address}
              onChange={(v) => setForm((p) => ({ ...p, address: v }))}
            />
          </div>
        </div>

        {/* actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <SecondaryButton className="px-8 py-3 text-base">
            বাতিল করুন (Cancel)
          </SecondaryButton>

          <PrimaryButton
            className={`px-8 py-3 text-base ${!canSave ? "opacity-50 pointer-events-none" : ""}`}
            onClick={() => {
              // hook your API here
              console.log("save", form);
            }}
          >
            সংশোধন সংরক্ষণ করুন (Save Changes)
          </PrimaryButton>
        </div>
      </div>
    </Card>
  );
}
