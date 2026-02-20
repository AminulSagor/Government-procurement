"use client";

import PageHeader from "./_components/page-header";
import SupplierCard from "./_components/supplier-card";
import ProductCard from "./_components/product-card";
import FinanceCard from "./_components/finance-card";
import InfoCards from "./_components/info-cards";
import AttachmentsCard from "./_components/attachments-card";
import BottomBar from "./_components/bottom-bar";
import { quotationVerificationDetailsDemo } from "@/app/(office)/office/dummy-data/quotation-verification-details-demo";

export default function Page() {
  const data = quotationVerificationDetailsDemo;

  return (
    <div className="py-6">
      <PageHeader
        title="উদ্ধৃতি যাচাই ও টার্ম ব্রেকডাউন"
        rfqCode={data.rfqCode}
        departmentLabel={data.departmentLabel}
        statusLabel={data.statusLabel}
      />

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <SupplierCard supplier={data.supplier} />
          <ProductCard product={data.product} />
        </div>

        <div className="space-y-6">
          <FinanceCard finance={data.finance} />
          <InfoCards timeline={data.timeline} warranty={data.warranty} />
          <AttachmentsCard attachments={data.attachments} />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
