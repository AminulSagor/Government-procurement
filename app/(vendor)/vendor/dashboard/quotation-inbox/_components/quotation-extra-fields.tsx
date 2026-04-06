"use client";

import React from "react";
import Card from "@/components/cards/card";
import PrimaryButton from "@/components/buttons/primary-button";
import { CloudUpload, ArrowRight } from "lucide-react";

type Props = {
  onSubmit?: () => void;
};

export default function QuotationExtraFields({ onSubmit }: Props) {
  const [logistics, setLogistics] = React.useState("");
  const [warranty, setWarranty] = React.useState("");
  const [deliveryTime, setDeliveryTime] = React.useState("");
  const [notes, setNotes] = React.useState("");

  return (
    <Card className="rounded-2xl border border-gray/15 bg-white p-5">
      {/* row: logistics / warranty / delivery */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* logistics */}
        <div>
          <p className="text-xs font-extrabold text-gray">
            সরবরাহ ও পরিবহন (Logistics)
          </p>
          <select
            value={logistics}
            onChange={(e) => setLogistics(e.target.value)}
            className="mt-2 h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
          >
            <option value="">Select</option>
            <option value="included">Included</option>
            <option value="separate">Separate Charge</option>
            <option value="pickup">Buyer Pickup</option>
          </select>
        </div>

        {/* warranty */}
        <div>
          <p className="text-xs font-extrabold text-gray">
            ওয়ারেন্টি সময়কাল (Warranty Duration)
          </p>
          <select
            value={warranty}
            onChange={(e) => setWarranty(e.target.value)}
            className="mt-2 h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
          >
            <option value="">Select</option>
            <option value="no">No Warranty</option>
            <option value="3m">3 Months</option>
            <option value="6m">6 Months</option>
            <option value="1y">1 Year</option>
          </select>
        </div>

        {/* delivery time */}
        <div>
          <p className="text-xs font-extrabold text-gray">
            ডেলিভারি সময় (Delivery Time)
          </p>
          <select
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="mt-2 h-10 w-full rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray"
          >
            <option value="">Select</option>
            <option value="24h">Within 24 Hours</option>
            <option value="3d">Within 3 Days</option>
            <option value="7d">Within 7 Days</option>
            <option value="14d">Within 14 Days</option>
          </select>
        </div>
      </div>

      {/* upload documents */}
      <div className="mt-5">
        <p className="text-xs font-extrabold text-gray">
          নথি আপলোড (Upload Documents)
        </p>

        <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray/25 bg-white px-4 py-8 text-center">
          <span className="text-gray/50">
            <CloudUpload size={22} />
          </span>

          <p className="mt-2 text-xs font-semibold text-gray">
            এখানে ড্র্যাগ করে ছাড়ুন অথবা আপলোড করুন
          </p>
          <p className="mt-1 text-[11px] font-semibold text-gray/45">
            PDF / Images (Max 10MB)
          </p>

          <input type="file" className="hidden" multiple />
        </label>
      </div>

      {/* notes */}
      <div className="mt-5">
        <p className="text-xs font-extrabold text-gray">নোট (Optional)</p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="অতিরিক্ত তথ্য লিখুন..."
          className="mt-2 min-h-[110px] w-full rounded-2xl border border-gray/15 bg-white px-3 py-3 text-xs font-semibold text-gray placeholder:text-gray/35"
        />
      </div>

      {/* submit */}
      <div className="mt-5">
        <PrimaryButton
          onClick={onSubmit}
          className="w-full py-3 text-sm font-extrabold flex items-center justify-center gap-2"
        >
          কোটেশন সাবমিট করুন <ArrowRight size={18} />
        </PrimaryButton>

        <p className="mt-2 text-center text-[11px] font-semibold text-gray/45">
          সাবমিট করার আগে সব তথ্য যাচাই করুন
        </p>
      </div>
    </Card>
  );
}
