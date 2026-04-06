"use client";

import CartHeader from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/cart-header";
import CartSearchBar from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/cart-search-bar";
import CartSelectedItems from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/cart-selected-items";
import RequisitionSlipPanel from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/requisition-slip-panel";
import Breadcrumb from "@/components/breadCrumb";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <div className="py-6">
        <Breadcrumb
          items={[
            { label: "হোম", href: "/" },
            { label: "ক্রয়", href: "#" },
            { label: "খাত নির্বাচন", href: "/office/dashboard/procurement" },
            { label: "কম্পিউটার সামগ্রী", href: "/office/dashboard/procurement/2" },
            { label: "কার্ট" },
          ]}
        />

        <div className="mt-4">
          <CartHeader />
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-6">
            <CartSearchBar />
            <CartSelectedItems />
          </div>

          <div className="lg:col-span-5">
            <RequisitionSlipPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
