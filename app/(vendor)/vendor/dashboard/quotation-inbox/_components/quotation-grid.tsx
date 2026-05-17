"use client";

import React from "react";
import PaginationBar from "./quotation-pagination";
import { getToken } from "@/utils/cookie.utils";

export default function QuotationGrid() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(0);
  const [itemsCount, setItemsCount] = React.useState(0);

  // React.useEffect(() => {
  //   const loadInbox = async () => {
  //     try {
  //       setLoading(true);
  //       setError("");

  //       const token = getToken();

  //       if (!token) {
  //         throw new Error("লগইন টোকেন পাওয়া যায়নি");
  //       }

  //       const response = await getVendorQuotationInbox({
  //         token,
  //         page,
  //         limit,
  //       });

  //       setTotal(response.data.total);
  //       setTotalPages(response.data.totalPages);
  //       setItemsCount(response.data.data.length);
  //     } catch (error) {
  //       setError(
  //         error instanceof Error ? error.message : "ডাটা লোড করা যায়নি",
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadInbox();
  // }, [page, limit]);

  const from = total === 0 ? 0 : (page - 1) * limit + 1;
  const to = total === 0 ? 0 : Math.min(page * limit, total);

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-gray">
            ভেন্ডর কোটেশন ইনবক্স
          </h2>
          <p className="mt-1 text-xs text-light-gray">
            আপনার সক্রিয় কোটেশন এবং দ্রুত বিড জমা করুন
          </p>
        </div>

        <select className="h-10 rounded-xl border border-gray/15 bg-white px-3 text-xs font-semibold text-gray">
          <option>সর্বশেষ</option>
          <option>সবচেয়ে বেশি মূল্য</option>
          <option>সময়সীমা কাছাকাছি</option>
        </select>
      </div>

      <div className="rounded-2xl border border-gray/15 bg-white p-5">
        {loading ? (
          <p className="text-sm font-semibold text-gray/60">লোড হচ্ছে...</p>
        ) : error ? (
          <p className="text-sm font-semibold text-red-500">{error}</p>
        ) : itemsCount === 0 ? (
          <p className="text-sm font-semibold text-gray/60">
            কোনো কোটেশন পাওয়া যায়নি
          </p>
        ) : (
          <p className="text-sm font-semibold text-gray/60">
            API connected successfully. এখন শুধু item field mapping বাকি।
          </p>
        )}
      </div>

      <div className="p-3">
        <PaginationBar
          total={total}
          from={from}
          to={to}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
