"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, DraftingCompass, Plus, Send } from "lucide-react";
import { REPORTS } from "./data";
import PageHeader from "./page-header";
import PaginationBar from "./pagination-bar";
import ReportsTable from "./report-table";
import ReportsCards from "./reports-cards";
import StatCard from "./stat-card";
import Toolbar from "./toolbar";

export default function BudgetReports() {
  const [q, setQ] = React.useState("");
  const [status, setStatus] = React.useState<ReportStatus | "All">("All");

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return REPORTS.filter((r) => {
      const matchQuery =
        !query ||
        r.id.toLowerCase().includes(query) ||
        r.fiscalYear.toLowerCase().includes(query) ||
        r.officeCode.toLowerCase().includes(query);

      const matchStatus = status === "All" ? true : r.status === status;
      return matchQuery && matchStatus;
    });
  }, [q, status]);

  const stats: StatItem[] = React.useMemo(() => {
    const approved = REPORTS.filter((r) => r.status === "Approved").length;
    const submitted = REPORTS.filter((r) => r.status === "Submitted").length;
    const draft = REPORTS.filter((r) => r.status === "Draft").length;

    return [
      {
        title: "অনুমোদিত রিপোর্ট",
        value: approved,
        icon: (
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="h-5 w-5" />
          </div>
        ),
      },
      {
        title: "ড্রাফ্ট",
        value: draft,
        icon: (
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-orange-700">
            <DraftingCompass className="h-5 w-5" />
          </div>
        ),
      },
    ];
  }, []);

  return (
    <div className="min-h-screen bg-muted/30">
      <div>
        <PageHeader />

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {stats.map((s) => (
            <StatCard key={s.title} item={s} />
          ))}
        </div>

        <Card className="mt-4">
          <CardHeader className="space-y-2 pb-3">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-base md:text-lg">
                রিপোর্ট তালিকা
              </CardTitle>

              <Button variant={"primary"} className="w-full md:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                নতুন রিপোর্ট তৈরি করুন
              </Button>
            </div>

            <Toolbar
              q={q}
              onChangeQ={setQ}
              status={status}
              onChangeStatus={setStatus}
              resultsCount={filtered.length}
            />
          </CardHeader>

          <CardContent className="pt-0">
            {/* Desktop table */}
            <div className="hidden md:block">
              <ReportsTable rows={filtered} />
            </div>

            {/* Mobile cards */}
            <div className="md:hidden">
              <ReportsCards rows={filtered} />
            </div>

            <div className="mt-4">
              <PaginationBar />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
