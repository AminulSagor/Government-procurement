import {
  ReturnRequestRow,
  ReturnRequestStatus,
} from "../_types/return-request.types";
import { ReturnRequestFiltersValue } from "../_components/ReturnRequestFilters";

export function formatBdt(n: number) {
  // simple: 9000 => "৳ 9,000"
  return `৳ ${n.toLocaleString("en-US")}`;
}

export function getStatusCounts(rows: ReturnRequestRow[]) {
  const total = rows.length;

  const pendingReview = rows.filter((r) => r.status === "pending").length;
  const rejected = rows.filter((r) => r.status === "denied").length;

  return { total, pendingReview, rejected };
}

export function applyReturnRequestFilters(
  rows: ReturnRequestRow[],
  filters: ReturnRequestFiltersValue,
) {
  const q = filters.query.trim().toLowerCase();

  return rows.filter((r) => {
    const matchesQuery =
      !q ||
      r.orderId.toLowerCase().includes(q) ||
      r.vendor.toLowerCase().includes(q) ||
      r.product.toLowerCase().includes(q) ||
      r.officeTitleBn.toLowerCase().includes(q);

    const matchesDamage =
      filters.damageType === "all" ? true : r.damageType === filters.damageType;

    const matchesOffice =
      filters.office === "all" ? true : r.officeKey === filters.office;

    const matchesStatus =
      filters.status === "all" ? true : r.status === filters.status;

    return matchesQuery && matchesDamage && matchesOffice && matchesStatus;
  });
}
