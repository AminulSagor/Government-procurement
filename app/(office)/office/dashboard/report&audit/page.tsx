"use client";
import DocumentLibrarySection from "@/app/(office)/office/dashboard/report&audit/_components/document-library-section";
import FinalcialAuditLog from "@/app/(office)/office/dashboard/report&audit/_components/finalcial-audit-logs";
import ReportAndAuditHeader from "@/app/(office)/office/dashboard/report&audit/_components/report-audit-header";
import ReportConfigaration from "@/app/(office)/office/dashboard/report&audit/_components/report-configaration";
import ReportDetailsSection from "@/app/(office)/office/dashboard/report&audit/_components/report-details-section";
import ReportMenuCard from "@/app/(office)/office/dashboard/report&audit/_components/report-menu-card";
import { useState } from "react";

export type ReportType = "report_generator" | "audit_log" | "document_library";

const ReportAndAudit = () => {
  const [reportType, setReportType] = useState<ReportType>("report_generator");
  return (
    <div className="space-y-4">
      <ReportAndAuditHeader reportType={reportType} />

      {/* report area */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* report handler */}
        <div className="space-y-4 col-span-2">
          <ReportMenuCard
            reportType={reportType}
            setReportType={setReportType}
          />
          {reportType !== "document_library" && <ReportConfigaration />}
        </div>
        {/* report content */}
        <div className="col-span-3">
          {reportType !== "document_library" && (
            <ReportDetailsSection reportType={reportType} />
          )}

          {/* document library section */}
          {reportType === "document_library" && <DocumentLibrarySection />}
        </div>
      </div>

      {/* finalcial audit logs*/}
      {reportType !== "document_library" && <FinalcialAuditLog />}
    </div>
  );
};

export default ReportAndAudit;
