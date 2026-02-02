import DashboardHeader from "./_components/dashboard-header";
import StatsRow from "./_components/stats-row";
import MonthlyIncomeCard from "./_components/monthly-income-card";
import SuccessRateCard from "./_components/success-rate-card";
import NewOpportunities from "./_components/new-opportunities";
import PriorityQueue from "./_components/priority-queue";
import LiveFeed from "./_components/live-feed";


export default function VendorDashboardPage() {
  return (
    <div className="space-y-5">
      <DashboardHeader />

      <StatsRow />

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MonthlyIncomeCard />
        </div>
        <div className="lg:col-span-1">
          <SuccessRateCard />
        </div>
      </div>

      {/* Opportunities */}
      <NewOpportunities />

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PriorityQueue />
        </div>
        <div className="lg:col-span-1">
          <LiveFeed />
        </div>
      </div>
    </div>
  );
}
