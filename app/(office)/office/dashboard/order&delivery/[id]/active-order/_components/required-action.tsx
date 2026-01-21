import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import Card from "@/components/cards/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export const RequiredActions = ({
  note = "অর্ডারটি সফলভাবে ডেলিভারি হওয়ার আগে পেমেন্টটি বাকি করে নিন। পণ্য গ্রহণের পর অবশ্যই পেমেন্ট সম্পন্ন করুন।",
  primaryLabel = "প্রাপ্তি নিশ্চিত করুন",
  secondaryLabel = "সমস্যা রিপোর্ট করুন",
  onPrimary,
  onSecondary,
}: {
  note?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}) => {
  return (
    <Card>
      <div>
        <p className="text-base font-extrabold text-primary-color">
          প্রয়োজনীয় পদক্ষেপ
        </p>
        <p className="mt-2 text-sm font-semibold text-light-gray leading-relaxed">
          {note}
        </p>

        <div className="mt-5 space-y-3">
          <PrimaryButton className="flex px-5 py-2 items-center text-sm gap-2 w-full justify-center">
            <CheckCircle2 className="h-5 w-5" />
            {primaryLabel}
          </PrimaryButton>

          <SecondaryButton className="flex px-5 py-2 items-center text-sm gap-2 w-full justify-center">
            <AlertTriangle className="h-5 w-5 text-gray-700" />
            {secondaryLabel}
          </SecondaryButton>
        </div>
      </div>
    </Card>
  );
};
