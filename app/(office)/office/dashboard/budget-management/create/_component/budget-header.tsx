import BackButton from "@/components/buttons/back-button";
import PrimaryButton from "@/components/buttons/primary-button";
import { SaveAll } from "lucide-react";

const BudgetHeader = ({ step }: { step: number }) => {
  return (
    <div>
      <div className="px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <BackButton />
              <h1 className="text-lg font-semibold">
                বাজেট রিপোর্ট আপলোড করুন
              </h1>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              সরাসরি কপ/ক্যানভাসের পরিবর্তে ধাপে ধাপে প্রক্রিয়া সম্পন্ন করুন
            </p>
          </div>
          {step > 0 && step < 3 && (
            <PrimaryButton>
              <p className="flex items-center gap-2">
                <SaveAll size={18} />
                ড্রাফট সংরক্ষণ করুন
              </p>
            </PrimaryButton>
          )}

          {step === 3 && (
            <PrimaryButton>
              <p className="flex items-center gap-2">
                <SaveAll size={18} />
                প্রণয়ন করুন
              </p>
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetHeader;
