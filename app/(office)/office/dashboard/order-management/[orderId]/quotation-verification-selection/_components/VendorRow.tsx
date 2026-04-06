"use client";

import BadgePill from "@/app/(office)/office/dashboard/order-management/[orderId]/quotation-verification-selection/_components/BadgePill";
import { VendorQuote } from "@/app/(office)/office/types/quotation-verification-selection.types";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import { Eye } from "lucide-react";

function moneyBn(n: number) {
  return new Intl.NumberFormat("bn-BD").format(n);
}

export default function VendorRow({
  quote,
  isSelected,
  onSelect,
  onDetails,
}: {
  quote: VendorQuote;
  isSelected: boolean;
  onSelect?: () => void;
  onDetails?: () => void;
}) {
  const rowBg = isSelected ? "bg-green/5" : "bg-white";
  const leftBar = isSelected ? "border-green" : "border-transparent";

  return (
    <tr className={`${rowBg} border-l-4 ${leftBar}`}>
      {/* vendor */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-4 min-w-[280px]">
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold
            ${isSelected ? "bg-green/10 text-green" : "bg-off-white text-light-gray"}`}
          >
            {quote.avatarLetter}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-bold text-black whitespace-nowrap">
                {quote.vendorName}
              </div>
              {quote.recommendation === "best" ? (
                <BadgePill text="সর্বনিম্ন দরদাতা" tone="success" />
              ) : null}
            </div>
            <div className="mt-1 text-xs text-light-gray">
              {quote.vendorTagline}
            </div>
          </div>
        </div>
      </td>

      {/* unit */}
      <td className="px-4 py-4 text-center whitespace-nowrap">
        <div className="text-xs text-light-gray">একক দর</div>
        <div
          className={`mt-1 text-sm font-extrabold ${isSelected ? "text-green" : "text-black"}`}
        >
          ৳{moneyBn(quote.unitPrice)}
        </div>
      </td>

      {/* total */}
      <td className="px-4 py-4 text-center whitespace-nowrap">
        <div className="text-xs text-light-gray">মোট দর</div>
        <div className="mt-1 text-sm font-extrabold text-black">
          ৳{moneyBn(quote.totalPrice)}
        </div>
      </td>

      {/* details */}
      <td className="px-4 py-4 whitespace-nowrap">
        <button
          onClick={onDetails}
          className="inline-flex items-center gap-2 text-sm font-semibold text-light-gray hover:text-primary-color"
        >
          <Eye className="h-4 w-4" />
          বিস্তারিত
        </button>
      </td>

      {/* budget badge */}
      <td className="px-4 py-4 whitespace-nowrap">
        {quote.status === "within-budget" ? (
          <BadgePill text="বাজেটের মধ্যে" tone="success" />
        ) : (
          <BadgePill text="বাজেট অতিক্রম করেছে" tone="danger" />
        )}
      </td>

      {/* action */}
      <td className="px-5 py-4">
        <div className="min-w-[190px] flex justify-end">
          {isSelected ? (
            <PrimaryButton className="px-5 py-3 text-sm rounded-lg w-full flex items-center justify-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-white" />
              অফার গ্রহণ করুন
            </PrimaryButton>
          ) : (
            <SecondaryButton
              onClick={onSelect}
              className="px-5 py-3 text-sm rounded-lg w-full border border-primary-color/25"
            >
              অফার গ্রহণ করুন
            </SecondaryButton>
          )}
        </div>
      </td>
    </tr>
  );
}
