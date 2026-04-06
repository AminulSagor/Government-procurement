import { ORDER_LIST_MOCK } from "./_data/order-management.mock";
import OrdersSummaryCards from "@/app/(admin)/admin/dashboard/order-management/_components/orders-summary-cards";
import Card from "@/components/cards/card";
import OrdersToolbar from "@/app/(admin)/admin/dashboard/order-management/_components/orders-toolbar";
import OrdersTable from "@/app/(admin)/admin/dashboard/order-management/_components/orders-table";
import OrderManagementHeader from "@/app/(admin)/admin/dashboard/order-management/_components/order-management-header";

export default function OrderManagementPage() {
  return (
    <div className="space-y-7">
      <OrderManagementHeader />
      <OrdersSummaryCards rows={ORDER_LIST_MOCK} />

      <OrdersToolbar />
      <Card className="p-5 space-y-4">
        <OrdersTable rows={ORDER_LIST_MOCK} />
      </Card>
    </div>
  );
}
