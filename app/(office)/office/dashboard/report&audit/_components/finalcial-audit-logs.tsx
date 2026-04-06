"use client";

import * as React from "react";
import SecondaryButton from "@/components/buttons/secondary-button";
import Card from "@/components/cards/card";
import { Input } from "@/components/ui/input";
import {
  FileChartColumnIncreasing,
  Search,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  AuditType,
  FinancialAuditRow,
} from "@/app/(office)/office/types/report-audit";
import { AUDIT_LOGS } from "@/app/(office)/office/dummy-data/report-audit-data";

const FinalcialAuditLog = () => {
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const pageSize = 4;

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return AUDIT_LOGS;

    return AUDIT_LOGS.filter((r) => {
      const hay = [
        r.dateTime,
        r.txid,
        r.code,
        r.description,
        r.type,
        r.amount,
        r.balance,
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(q);
    });
  }, [query]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  React.useEffect(() => {
    // keep page valid after filtering
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const visible = filtered.slice(startIndex, endIndex);

  const handleCSVExport = () => {
    downloadCSV(filtered);
  };

  const handleOpenPdf = (row: FinancialAuditRow) => {
    if (!row.pdfUrl || row.pdfUrl === "#") return;
    window.open(row.pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="p-0">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-5">
        <div className="flex items-center gap-2">
          <FileChartColumnIncreasing className="text-primary-color" size={20} />
          <h2 className="text-black font-bold text-lg">আর্থিক অডিট লগ</h2>
        </div>

        <div className="flex gap-3 flex-col md:flex-row md:items-center">
          <div className="relative w-full md:w-90">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search..."
              className="pl-9 focus-visible:ring-1"
            />
          </div>

          <SecondaryButton
            onClick={handleCSVExport}
            className="px-4 py-1.5 bg-[#DDE2E3]"
          >
            CSV এক্সপোর্ট করুন
          </SecondaryButton>
        </div>
      </div>

      <div className="h-px w-full bg-gray-200" />

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="text-left font-semibold px-6 py-4 whitespace-nowrap">
                তারিখ
              </th>
              <th className="text-left font-semibold px-6 py-4 whitespace-nowrap">
                TXID
              </th>
              <th className="text-left font-semibold px-6 py-4 whitespace-nowrap">
                কোড
              </th>
              <th className="text-left font-semibold px-6 py-4 whitespace-nowrap">
                বিবরণ
              </th>
              <th className="text-left font-semibold px-6 py-4 whitespace-nowrap">
                ধরন
              </th>
              <th className="text-left font-semibold px-6 py-4 whitespace-nowrap">
                পরিমাণ
              </th>
              <th className="text-left font-semibold px-6 py-4 whitespace-nowrap">
                স্থিতি
              </th>
              <th className="text-center font-semibold px-6 py-4 whitespace-nowrap">
                নথিপত্র
              </th>
            </tr>
          </thead>

          <tbody>
            {visible.map((row) => {
              const isCredit = row.type === "ক্রেডিট";
              return (
                <tr key={row.id} className="border-t border-gray-200 text-sm">
                  <td className="px-6 py-5 whitespace-nowrap text-gray-800">
                    {row.dateTime}
                  </td>

                  <td className="px-6 py-5 whitespace-nowrap">
                    <button
                      type="button"
                      className="text-primary-color font-bold hover:underline"
                      onClick={() => {
                        // optional: open a drawer/details later
                        navigator.clipboard
                          ?.writeText(row.txid)
                          .catch(() => {});
                      }}
                      title="Click to copy TXID"
                    >
                      {row.txid}
                    </button>
                  </td>

                  <td className="px-6 py-5 whitespace-nowrap text-gray-800">
                    {row.code}
                  </td>

                  <td className="px-6 py-5 text-gray-800 min-w-90">
                    {row.description}
                  </td>

                  <td className="px-6 py-5 whitespace-nowrap">
                    <Badge type={row.type} />
                  </td>

                  <td
                    className={[
                      "px-6 py-5 whitespace-nowrap font-semibold",
                      isCredit ? "text-green-600" : "text-gray-900",
                    ].join(" ")}
                  >
                    {row.amount}
                  </td>

                  <td className="px-6 py-5 whitespace-nowrap text-gray-900 font-semibold">
                    {row.balance}
                  </td>

                  <td className="px-6 py-5 whitespace-nowrap text-center">
                    <IconButton
                      title="PDF দেখুন"
                      onClick={() => handleOpenPdf(row)}
                    />
                  </td>
                </tr>
              );
            })}

            {visible.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  কোনো ডাটা পাওয়া যায়নি
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5">
        <p className="text-sm text-gray-600">
          {total === 0
            ? "০ টি ফলাফল"
            : `মোট ${total} টি ফলাফলের মধ্যে ${
                startIndex + 1
              } থেকে ${endIndex} দেখানো হচ্ছে`}
        </p>

        <div className="flex items-center gap-2 justify-end">
          <PageButton
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <span className="inline-flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              পূর্ববর্তী
            </span>
          </PageButton>

          {Array.from({ length: totalPages })
            .slice(0, 3)
            .map((_, idx) => {
              const p = idx + 1;
              return (
                <PageButton
                  key={p}
                  active={p === page}
                  onClick={() => setPage(p)}
                >
                  {p}
                </PageButton>
              );
            })}

          <PageButton
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            <span className="inline-flex items-center gap-1">
              পরবর্তী
              <ChevronRight className="h-4 w-4" />
            </span>
          </PageButton>
        </div>
      </div>
    </Card>
  );
};

export default FinalcialAuditLog;

function downloadCSV(rows: FinancialAuditRow[]) {
  const headers = ["তারিখ", "TXID", "কোড", "বিবরণ", "ধরন", "পরিমাণ", "স্থিতি"];
  const escape = (v: string) => `"${String(v).replaceAll('"', '""')}"`;

  const lines = [
    headers.join(","),
    ...rows.map((r) =>
      [r.dateTime, r.txid, r.code, r.description, r.type, r.amount, r.balance]
        .map(escape)
        .join(","),
    ),
  ].join("\n");

  const blob = new Blob([lines], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `financial-audit-log-${Date.now()}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const Badge = ({ type }: { type: AuditType }) => {
  const isDebit = type === "ডেবিট";
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        isDebit ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700",
      ].join(" ")}
    >
      {type}
    </span>
  );
};

const IconButton = ({
  onClick,
  title,
}: {
  onClick?: () => void;
  title?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-50"
    >
      <span className="text-primary-color">
        <FileText className="h-4 w-4" />
      </span>
    </button>
  );
};

const PageButton = ({
  active,
  children,
  onClick,
  disabled,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "h-8 min-w-10 px-3 rounded-md border text-sm font-semibold",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50",
        active
          ? "bg-primary-color text-white border-primary-color"
          : "bg-white text-gray-700 border-gray-200",
      ].join(" ")}
    >
      {children}
    </button>
  );
};
