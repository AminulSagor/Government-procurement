"use client";

import * as React from "react";
import type { ReportType } from "@/app/(office)/office/dashboard/report&audit/page";
import Card from "@/components/cards/card";
import { Eye, Printer, ZoomIn } from "lucide-react";
import {
  AUDIT_LOG_DATA,
  SUMMARY_DATA,
} from "@/app/(office)/office/dummy-data/report-audit-data";

const ReportDetailsSection = ({ reportType }: { reportType: ReportType }) => {
  const [scale, setScale] = React.useState(1);

  const isReportGenerator = reportType === "report_generator";
  const isAuditLog = reportType === "audit_log";

  const handleZoomIn = () =>
    setScale((s) => Math.min(1.25, Number((s + 0.05).toFixed(2))));
  const handlePrint = () => window.print();

  const pageTitle = isReportGenerator
    ? "ক্রয় সারাংশ রিপোর্ট (অর্থবছর ২০২৩-২৪)"
    : isAuditLog
      ? "লেনদেন সারাংশ (TXN-882190)"
      : "";

  return (
    <Card className="p-0">
      {/* top bar */}
      <div className="flex justify-between items-center border-b border-primary-color/20 p-5">
        <p className="flex items-center gap-2 text-primary-color">
          <Eye size={18} />
          <span className="text-black font-semibold text-sm">লাইভ প্রিভিউ</span>
        </p>

        <div className="flex items-center gap-4">
          {isAuditLog && (
            <p className="px-3 py-1.5 text-xs text-red/90 rounded-full border bg-[#FDE68A]">
              নিচের TxID লিংকে ক্লিক করে প্রিভিউ আপডেট করুন
            </p>
          )}

          <p className="flex gap-4 items-center">
            <button
              type="button"
              onClick={handleZoomIn}
              className="hover:opacity-70"
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="hover:opacity-70"
              title="Print"
            >
              <Printer size={15} />
            </button>
          </p>
        </div>
      </div>

      {/* preview canvas */}

      <div className="w-full bg-[#F9FAFB] px-3 py-4 md:px-6 md:py-5 lg:px-10 lg:py-8 xl:px-16 rounded-md  xl:py-12">
        <div
          className="rounded-sm bg-white p-2 md:p-4 lg:p-6 xl:p-8 shadow-lg origin-top min-h-200"
          style={{ transform: `scale(${scale})` }}
        >
          {/* report head */}
          <div className="flex flex-col md:flex-row gap-3 justify-between overflow-x-auto md:items-center">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-primary-color">
                iBAS+ সরকারি রিপোর্ট
              </h1>
              <p className="text-light-gray text-sm">
                অফিসিয়াল ডকুমেন্ট • গোপনীয়
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold md:text-end">
                তারিখ: ২৪ অক্টোবর, ২০২৩
              </p>
              <p className="text-light-gray md:text-end">
                আইডি: {isAuditLog ? "TXN-882190" : "PROC-SUM-2023-098"}
              </p>
            </div>
          </div>

          <div className="h-1 w-full bg-primary-color mt-8" />

          {/* title */}
          {(isReportGenerator || isAuditLog) && (
            <div className="mt-8 text-center">
              <h2 className="font-bold text-base md:text-lg text-gray-900 border-b-2 border-b-black inline">
                {pageTitle}
              </h2>
            </div>
          )}

          {/*rendering based on report type */}
          {isReportGenerator ? (
            <div className="mt-8">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-xs text-gray-500">
                      <th className="text-left font-semibold py-3 border-b border-gray-200">
                        অডিটের ক্যাটাগরি
                      </th>
                      <th className="text-left font-semibold py-3 border-b border-gray-200">
                        পরিমাণ
                      </th>
                      <th className="text-left font-semibold py-3 border-b border-gray-200">
                        একক মূল্য
                      </th>
                      <th className="text-right font-semibold py-3 border-b border-gray-200">
                        মোট
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUMMARY_DATA.map((r, idx) => (
                      <tr key={idx} className="text-sm">
                        <td className="py-4 border-b border-gray-100">
                          {r.category}
                        </td>
                        <td className="py-4 border-b border-gray-100">
                          {r.qtyText}
                        </td>
                        <td className="py-4 border-b border-gray-100">
                          {r.unitPriceText}
                        </td>
                        <td className="py-4 border-b border-gray-100 text-right font-semibold">
                          {r.totalText}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="w-full sm:w-90">
                  <div className="h-px w-full bg-gray-900/40" />
                  <div className="flex items-center justify-between mt-3 text-sm font-semibold">
                    <span className="text-gray-800">মোট ব্যয়</span>
                    <span className="text-gray-900">৳৬৩,৩৬০.০০</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-xs text-gray-400">
                কপিরাইট © সরকারি রিপোর্ট • এই নথি শুধুমাত্র অফিসিয়াল ব্যবহারের
                জন্য
              </div>
            </div>
          ) : isAuditLog ? (
            /* =========================
                TXN AUDIT LOG
               ========================= */
            <div className="mt-8">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-xs text-gray-500">
                      <th className="text-left font-semibold py-3 border-b border-gray-200">
                        বিবরণ
                      </th>
                      <th className="text-left font-semibold py-3 border-b border-gray-200">
                        পরিমাণ
                      </th>
                      <th className="text-left font-semibold py-3 border-b border-gray-200">
                        কোড
                      </th>
                      <th className="text-right font-semibold py-3 border-b border-gray-200">
                        অবস্থা
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {AUDIT_LOG_DATA.map((r, idx) => (
                      <tr key={idx} className="text-sm">
                        <td className="py-4 border-b border-gray-100">
                          {r.description}
                        </td>
                        <td className="py-4 border-b border-gray-100">
                          {r.qtyText}
                        </td>
                        <td className="py-4 border-b border-gray-100">
                          {r.code}
                        </td>
                        <td className="py-4 border-b border-gray-100 text-right">
                          <span className="text-green-600 font-semibold">
                            {r.statusText}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-gray-50 rounded-md p-4">
                <p className="text-sm font-semibold text-gray-700">মন্তব্য:</p>
                <p className="text-sm text-gray-600 mt-1">
                  অফিস ক্রয়ের টাকা বাবদ পেমেন্ট ভাউচার সংযুক্ত করা হয়েছে।
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="w-full sm:w-[320px]">
                  <div className="h-px w-full bg-gray-900/40" />
                  <div className="flex items-center justify-between mt-3 text-sm font-semibold">
                    <span className="text-gray-800">মোট লেনদেন</span>
                    <span className="text-gray-900">৳৫৪,৮০০.০০</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-xs text-gray-400">
                কপিরাইট © সরকারি রিপোর্ট • এই নথি শুধুমাত্র অফিসিয়াল ব্যবহারের
                জন্য
              </div>
            </div>
          ) : (
            /* document_library -> preview optional */
            <div className="mt-10 text-center text-sm text-gray-500">
              প্রিভিউ দেখাতে রিপোর্ট টাইপ নির্বাচন করুন
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ReportDetailsSection;
