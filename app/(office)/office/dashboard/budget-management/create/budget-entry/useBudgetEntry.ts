"use client";

import { useMemo, useState } from "react";
import type { BudgetHead, BudgetRow } from "@/app/(office)/office/types/budget-entry.types";

type EditableKey =
  | "approvedBudget"
  | "approvedRevised"
  | "approvedDivision"
  | "approvedExpected"
  | "approvedExpense"
  | "actualExpense"
  | "unapprovedDivision"
  | "unapprovedExpected";

function toNumber(v: string) {
  const n = Number(String(v || "0").replace(/[^\d.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function toStringNumber(n: number) {
  // keep simple numeric string; you can swap to Bangla later
  return String(Math.max(0, Math.trunc(n)));
}

function recomputeRow(row: BudgetRow): BudgetRow {
  // simple logic (no assumptions beyond math):
  // total = division + expected (if you want different, adjust here)
  const total = toNumber(row.approvedDivision) + toNumber(row.approvedExpected);
  const remaining = Math.max(0, total - toNumber(row.actualExpense));

  // rate = (actualExpense / total) * 100
  const pct = total > 0 ? Math.round((toNumber(row.actualExpense) / total) * 100) : 0;

  return {
    ...row,
    approvedTotal: toStringNumber(total),
    remaining: toStringNumber(remaining),
    usageRatePct: `${toStringNumber(pct)}%`,
  };
}

function recomputeHeadSubtotal(head: BudgetHead): BudgetHead {
  const sum = (k: EditableKey | "approvedTotal" | "remaining") =>
    head.rows.reduce((acc, r) => acc + toNumber((r as any)[k]), 0);

  const subtotal = {
    ...head.subtotal,
    approvedBudget: toStringNumber(sum("approvedBudget")),
    approvedRevised: toStringNumber(sum("approvedRevised")),
    approvedDivision: toStringNumber(sum("approvedDivision")),
    approvedExpected: toStringNumber(sum("approvedExpected")),
    approvedTotal: toStringNumber(sum("approvedTotal")),
    approvedExpense: toStringNumber(sum("approvedExpense")),
    actualExpense: toStringNumber(sum("actualExpense")),
    remaining: toStringNumber(sum("remaining")),
    unapprovedDivision: toStringNumber(sum("unapprovedDivision")),
    unapprovedExpected: toStringNumber(sum("unapprovedExpected")),
  };

  return { ...head, subtotal };
}

function makeEmptyRow(headCode: string): BudgetRow {
  return recomputeRow({
    code: headCode,
    itemCode: "০০০",
    description: "ব্যয়ের বিবরণ",

    approvedBudget: "০",
    approvedRevised: "০",
    approvedDivision: "০",
    approvedExpected: "০",
    approvedTotal: "০",
    approvedExpense: "০",

    actualExpense: "০",
    remaining: "০",
    usageRatePct: "০%",

    unapprovedDivision: "০",
    unapprovedExpected: "০",
  });
}

export function useBudgetEntry(initialHeads: BudgetHead[]) {
  const [heads, setHeads] = useState<BudgetHead[]>(
    () => initialHeads.map((h) => recomputeHeadSubtotal({ ...h, rows: h.rows.map(recomputeRow) }))
  );

  const updateCell = (headCode: string, rowIndex: number, key: EditableKey, value: string) => {
    setHeads((prev) =>
      prev.map((h) => {
        if (h.headCode !== headCode) return h;

        const rows = h.rows.map((r, idx) => {
          if (idx !== rowIndex) return r;
          const next = recomputeRow({ ...r, [key]: value } as BudgetRow);
          return next;
        });

        return recomputeHeadSubtotal({ ...h, rows });
      })
    );
  };

  const updateDescription = (headCode: string, rowIndex: number, value: string) => {
    setHeads((prev) =>
      prev.map((h) => {
        if (h.headCode !== headCode) return h;
        const rows = h.rows.map((r, idx) => (idx === rowIndex ? { ...r, description: value } : r));
        return recomputeHeadSubtotal({ ...h, rows });
      })
    );
  };

  const addItem = (headCode: string) => {
    setHeads((prev) =>
      prev.map((h) => {
        if (h.headCode !== headCode) return h;
        const rows = [...h.rows, makeEmptyRow(headCode)];
        return recomputeHeadSubtotal({ ...h, rows });
      })
    );
  };

  const addHead = () => {
    setHeads((prev) => {
      const newCode = String(3000 + prev.length + 1); // no assumption; just unique-ish
      const newHead: BudgetHead = {
        headCode: newCode,
        headTitle: "ব্যয়ের খাত",
        itemsCount: 0,
        totalBudget: "৳ ০",
        remaining: "৳ ০",
        rows: [],
        subtotal: {
          approvedBudget: "০",
          approvedRevised: "০",
          approvedDivision: "০",
          approvedExpected: "০",
          approvedTotal: "০",
          approvedExpense: "০",
          actualExpense: "০",
          remaining: "০",
          unapprovedDivision: "০",
          unapprovedExpected: "০",
        } as any,
      };
      return [...prev, newHead];
    });
  };

  const computedSummary = useMemo(() => {
    const headsCount = heads.length;
    const totalRemaining = heads.reduce((acc, h) => acc + toNumber(h.subtotal?.remaining ?? "0"), 0);
    const totalApproved = heads.reduce((acc, h) => acc + toNumber(h.subtotal?.approvedTotal ?? "0"), 0);

    return {
      headsCount,
      // keep your formatting externally if needed
      totalBudget: `৳ ${toStringNumber(totalApproved)}`,
      remaining: `৳ ${toStringNumber(totalRemaining)}`,
    };
  }, [heads]);

  const payload = useMemo(() => {
    return {
      heads: heads.map((h) => ({
        headCode: h.headCode,
        headTitle: h.headTitle,
        rows: h.rows,
        subtotal: h.subtotal,
      })),
    };
  }, [heads]);

  return {
    heads,
    setHeads, // optional
    computedSummary,
    payload,
    updateCell,
    updateDescription,
    addItem,
    addHead,
  };
}
