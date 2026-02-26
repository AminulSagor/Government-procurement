import RefundRecentDecsession from "@/app/(admin)/admin/dashboard/refunds/_components/refund-recent-decession";
import RefundRequestQueueTable from "@/app/(admin)/admin/dashboard/refunds/_components/refund-request-quee-table";
import RefundStatsOverview from "@/app/(admin)/admin/dashboard/refunds/_components/refund-stats-overview";
import RefundsReasons from "@/app/(admin)/admin/dashboard/refunds/_components/refunds-reasons";

const page = () => {
  return (
    <div className="space-y-6 p-6 bg-[#F8F9FA] min-h-screen">
      <RefundStatsOverview />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_450px] gap-4 items-start">
        <RefundsReasons />
        <RefundRecentDecsession />
      </div>
      <RefundRequestQueueTable />
    </div>
  );
};

export default page;
