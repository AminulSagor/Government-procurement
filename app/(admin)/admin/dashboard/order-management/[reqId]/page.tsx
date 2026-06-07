import { REQ_CASE_MOCK } from "../_data/order-management.mock";
import FlowShell from "@/app/(admin)/admin/dashboard/order-management/_components/flow-shell";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ reqId: string }>;
}) {
  const { reqId } = await params;
  const data = { ...REQ_CASE_MOCK, reqId };

  return (
    <div className="space-y-6 p-6 bg-[#F8F9FA]">
      <FlowShell data={data} />
    </div>
  );
}