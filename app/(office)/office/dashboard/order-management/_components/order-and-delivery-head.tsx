import Breadcrumb from "@/components/breadCrumb";
import { Plus } from "lucide-react";
import Link from "next/link";

const OrderAndDeliveryHead = () => {
  const breadCrumb = [
    {
      label: "হোম",
      href: "/office/dashboard",
    },
    {
      label: "অর্ডার",
    },
  ];
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb items={breadCrumb} />

      {/* Header */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black">
            অর্ডার ট্র্যাকিং ও ম্যানেজমেন্ট
          </h1>
          <p className="mt-1 text-sm text-light-gray">
            আপনার চলমান প্রকিউরমেন্ট অর্ডারগুলো ট্র্যাক করুন এবং ড্রাফটগুলো
            সম্পন্ন করুন
          </p>
        </div>

        <Link href={"/office/dashboard/procurement"}>
          <button
            type="button"
            className="flex h-11 items-center gap-2 rounded-md bg-primary-color px-5 text-sm font-extrabold text-white shadow-sm hover:opacity-90"
          >
            <Plus className="h-4 w-4" />
            নতুন অর্ডার
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderAndDeliveryHead;
