"use client";

import { useState } from "react";
import AdvancedFilterDialog from "./_components/AdvancedFilterDialog";
import DashboardFilters from "./_components/dashboard-filters";
import DashboardHeader from "./_components/dashboard-header";
import DepartmentsTable from "./_components/departments-table";
import RightPanel from "./_components/right-panel";
import StatsStrip from "./_components/stats-strip";
import {
  demoDashboardHeader,
  demoDepartments,
  demoPendingActions,
  demoQuickLinks,
} from "./_data/admin-dashboard.data";

export default function AdminDashboardPage() {
  const [openAdvanced, setOpenAdvanced] = useState(false);
  return (
    <div className="px-2 py-4 md:px-3 md:py-6">
      <div className="mx-auto w-full">
        <DashboardHeader data={demoDashboardHeader} />

        <div className="mt-4 grid grid-cols-12 gap-4">
          {/* LEFT MAIN */}
          <div className="col-span-12 lg:col-span-9 space-y-4">
            <StatsStrip />
            <DashboardFilters onOpenAdvanced={() => setOpenAdvanced(true)} />
            <DepartmentsTable rows={demoDepartments} />
          </div>

          {/* RIGHT PANEL */}
          <div className="col-span-12 lg:col-span-3">
            <RightPanel pending={demoPendingActions} links={demoQuickLinks} />
          </div>

          {/* Dialog */}
          <AdvancedFilterDialog
            open={openAdvanced}
            onClose={() => setOpenAdvanced(false)}
            onApply={() => setOpenAdvanced(false)}
            onReset={() => setOpenAdvanced(false)}
          />
        </div>
      </div>
    </div>
  );
}
