"use client";

import ReturnPolicyCard from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/return-policy-card";
import ReturnProductForm from "@/app/(office)/office/dashboard/order-management/[orderId]/order-details/_components/return-product-form";
import Breadcrumb from "@/components/breadCrumb";
import BackButton from "@/components/buttons/back-button";
import Card from "@/components/cards/card";

export default function ReturnProductRequestPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <div className="py-6">
        <Breadcrumb
          items={[
            { label: "হোম", href: "/" },
            { label: "অর্ডার", href: "/orders" },
            {
              label: "অর্ডারের বিস্তারিত",
              href: "/office/dashboard/order-management/4922/order-details",
            },
            { label: "পণ্য ফেরত" },
          ]}
        />

        <div className="mt-5 flex items-start gap-6">
          <div className="flex-1">
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <BackButton />
                <div>
                  <h1 className="text-xl font-semibold text-black">
                    পণ্য ফেরত আবেদন
                  </h1>
                  <p className="text-sm text-medium-gray mt-1">
                    iBAS+ সরকারি ক্রয় ব্যবস্থার জন্য পণ্য ফেরত আবেদন ফর্ম পূরণ
                    করুন
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <ReturnProductForm />
              </div>
            </Card>
          </div>

          <div className="w-[420px] hidden lg:block">
            <ReturnPolicyCard />
          </div>
        </div>

        <div className="lg:hidden mt-6">
          <ReturnPolicyCard />
        </div>
      </div>
    </div>
  );
}
