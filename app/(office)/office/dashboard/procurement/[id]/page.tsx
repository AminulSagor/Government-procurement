import Breadcrumb from "@/components/breadCrumb";
import ProductSummaryCard from "@/app/(office)/office/dashboard/procurement/_components/product-summary-card";
import ProductDetailsHead from "@/app/(office)/office/dashboard/procurement/_components/product-details-head";
import { ProcurementCategories } from "@/app/(office)/office/dummy-data/procurement-product-data";
import ProcurementProductSection from "@/app/(office)/office/dashboard/procurement/_components/procurement-product-section";

type Props = {
  params: Promise<{ id: string }>;
};


export default async function ProcurementDetailsPage({ params }: Props) {
  const { id } = await params;

  const category = ProcurementCategories.find(
    (categories) => categories.id === id,
  );

  const breadCrumb = [
    { label: "হোম", href: "/" },
    { label: "ক্রয়", href: "#" },
    { label: "খাত নির্বাচন", href: "/office/dashboard/procurement" },
    { label: "কম্পিউটার সামগ্রী" },
  ];

  if (!category) {
    return (
      <div>
        <p>Procurement Products Category Not found</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-5">
      <Breadcrumb items={breadCrumb} />
      <ProductDetailsHead code={category.code} />
      <ProductSummaryCard category={category} />
      <ProcurementProductSection category={category} />
    </div>
  );
}