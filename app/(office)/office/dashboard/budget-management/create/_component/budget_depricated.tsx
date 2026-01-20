"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type RowItem = {
  id: string;
  code: string;
  title: string;
  alloc: { bachat: number; sanglapito: number; bitoron: number };
  approved: { prastab: number; note: number; mot: number };
  released: { prakkak: number; oboshishto: number };
  percent: number;
  actual: { bitoron: number; prastab: number };
};

const toBn = (n: number) =>
  new Intl.NumberFormat("bn-BD", { maximumFractionDigits: 0 }).format(n);

const num = (v: string) => {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
};

function MoneyInput({
  value,
  onChange,
  className,
  disabled,
}: {
  value: number;
  onChange: (v: number) => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <Input
      value={String(value ?? 0)}
      onChange={(e) => onChange(num(e.target.value))}
      inputMode="numeric"
      className={cn(
        "h-9 w-24 rounded-md border-muted-foreground/20 bg-white text-center text-sm",
        className,
      )}
      disabled={disabled}
    />
  );
}

export default function BudgetTableComponent() {
  const [open, setOpen] = React.useState(true);

  const [rows, setRows] = React.useState<RowItem[]>([
    {
      id: "1",
      code: "০৩৫৫",
      title: "কর্মচারী সামগ্রী",
      alloc: { bachat: 0, sanglapito: 0, bitoron: 323 },
      approved: { prastab: 0, note: 321, mot: 0 },
      released: { prakkak: 323, oboshishto: 0 },
      percent: 0,
      actual: { bitoron: 0, prastab: 0 },
    },
    {
      id: "2",
      code: "০৩৫৫",
      title: "স্ট্যাম্প ও ফি",
      alloc: { bachat: 0, sanglapito: 0, bitoron: 28 },
      approved: { prastab: 0, note: 20, mot: 0 },
      released: { prakkak: 20, oboshishto: 1 },
      percent: 98,
      actual: { bitoron: 0, prastab: 0 },
    },
  ]);

  const totals = React.useMemo(() => {
    const sum = <T,>(pick: (r: RowItem) => number) =>
      rows.reduce((a, r) => a + (pick(r) ?? 0), 0);

    const allocBachat = sum((r) => r.alloc.bachat);
    const allocSanglapito = sum((r) => r.alloc.sanglapito);
    const allocBitoron = sum((r) => r.alloc.bitoron);

    const approvedPrastab = sum((r) => r.approved.prastab);
    const approvedNote = sum((r) => r.approved.note);
    const approvedMot = sum((r) => r.approved.mot);

    const releasedPrakkak = sum((r) => r.released.prakkak);
    const releasedOboshishto = sum((r) => r.released.oboshishto);

    const actualBitoron = sum((r) => r.actual.bitoron);
    const actualPrastab = sum((r) => r.actual.prastab);

    return {
      allocBachat,
      allocSanglapito,
      allocBitoron,
      approvedPrastab,
      approvedNote,
      approvedMot,
      releasedPrakkak,
      releasedOboshishto,
      actualBitoron,
      actualPrastab,
    };
  }, [rows]);

  const grandTotal = totals.allocBitoron; // screenshot-style: "মোট বরাদ্দ" main number
  const subTotal = totals.releasedPrakkak; // screenshot-style: "অবশিষ্ট/অনুমোদিত" small number

  const updateRow = (id: string, patch: Partial<RowItem>) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        code: "০৩৫৫",
        title: "নতুন আইটেম",
        alloc: { bachat: 0, sanglapito: 0, bitoron: 0 },
        approved: { prastab: 0, note: 0, mot: 0 },
        released: { prakkak: 0, oboshishto: 0 },
        percent: 0,
        actual: { bitoron: 0, prastab: 0 },
      },
    ]);
  };

  return (
    <div className="w-full">
      <div className="rounded-xl border bg-white">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg"
              onClick={() => setOpen((v) => !v)}
              aria-label="toggle"
            >
              {open ? (
                <Minus className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </Button>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="rounded-full px-3">
                ০৩৫৫
              </Badge>
              <div className="font-semibold text-slate-800">
                মুদ্রণ ও মনিহারী
              </div>
              <Badge
                variant="outline"
                className="rounded-full border-emerald-200 bg-emerald-50 text-emerald-700"
              >
                আইটেম: {toBn(rows.length)}
              </Badge>
            </div>
          </div>

          <div className="flex items-end gap-10">
            <div className="text-right">
              <div className="text-xs text-slate-500">মোট বরাদ্দ</div>
              <div className="text-lg font-semibold text-slate-900">
                ৳ {toBn(grandTotal)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500">অবশিষ্ট</div>
              <div className="text-lg font-semibold text-slate-900">
                ৳ {toBn(subTotal)}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Table */}
        {open && (
          <div className="overflow-x-auto">
            <Table className="min-w-[1100px]">
              <TableHeader>
                {/* Group header row */}
                <TableRow className="bg-slate-50">
                  <TableHead
                    rowSpan={2}
                    className="w-[90px] text-center font-semibold"
                  >
                    কোড
                  </TableHead>
                  <TableHead rowSpan={2} className="w-[260px] font-semibold">
                    বিবরণ
                  </TableHead>

                  <TableHead colSpan={3} className="text-center font-semibold">
                    বরাদ্দ
                  </TableHead>

                  <TableHead colSpan={3} className="text-center font-semibold">
                    অনুমোদিত
                  </TableHead>

                  <TableHead colSpan={2} className="text-center font-semibold">
                    মঞ্জুরিকৃত
                  </TableHead>

                  <TableHead
                    rowSpan={2}
                    className="w-[120px] text-center font-semibold"
                  >
                    কার্যক্রমের অগ্রগতি (%)
                  </TableHead>

                  <TableHead colSpan={2} className="text-center font-semibold">
                    ব্যয়
                  </TableHead>
                </TableRow>

                {/* Sub header row */}
                <TableRow className="bg-slate-50">
                  <TableHead className="text-center font-semibold">
                    বাঁচত
                  </TableHead>
                  <TableHead className="text-center font-semibold">
                    সংলাপিত
                  </TableHead>
                  <TableHead className="text-center font-semibold">
                    বিতরণ
                  </TableHead>

                  <TableHead className="text-center font-semibold">
                    প্রস্তাব
                  </TableHead>
                  <TableHead className="text-center font-semibold">
                    নোট
                  </TableHead>
                  <TableHead className="text-center font-semibold">
                    মোট
                  </TableHead>

                  <TableHead className="text-center font-semibold">
                    প্রকৃত ব্যয়
                  </TableHead>
                  <TableHead className="text-center font-semibold">
                    অবশিষ্ট
                  </TableHead>

                  <TableHead className="text-center font-semibold">
                    বিতরণ
                  </TableHead>
                  <TableHead className="text-center font-semibold">
                    প্রস্তাব
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.id} className="hover:bg-slate-50/60">
                    <TableCell className="text-center font-medium text-slate-800">
                      {r.code}
                    </TableCell>

                    <TableCell className="text-slate-800">{r.title}</TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.alloc.bachat}
                        onChange={(v) =>
                          updateRow(r.id, { alloc: { ...r.alloc, bachat: v } })
                        }
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.alloc.sanglapito}
                        onChange={(v) =>
                          updateRow(r.id, {
                            alloc: { ...r.alloc, sanglapito: v },
                          })
                        }
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.alloc.bitoron}
                        onChange={(v) =>
                          updateRow(r.id, { alloc: { ...r.alloc, bitoron: v } })
                        }
                        className="border-emerald-200"
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.approved.prastab}
                        onChange={(v) =>
                          updateRow(r.id, {
                            approved: { ...r.approved, prastab: v },
                          })
                        }
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.approved.note}
                        onChange={(v) =>
                          updateRow(r.id, {
                            approved: { ...r.approved, note: v },
                          })
                        }
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.approved.mot}
                        onChange={(v) =>
                          updateRow(r.id, {
                            approved: { ...r.approved, mot: v },
                          })
                        }
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.released.prakkak}
                        onChange={(v) =>
                          updateRow(r.id, {
                            released: { ...r.released, prakkak: v },
                          })
                        }
                        className="border-emerald-200"
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-10 text-right text-sm text-slate-700">
                          {toBn(r.released.oboshishto)}
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2 py-1 text-xs font-semibold",
                          r.percent >= 80
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700",
                        )}
                      >
                        {toBn(r.percent)}%
                      </span>
                    </TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.actual.bitoron}
                        onChange={(v) =>
                          updateRow(r.id, {
                            actual: { ...r.actual, bitoron: v },
                          })
                        }
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <MoneyInput
                        value={r.actual.prastab}
                        onChange={(v) =>
                          updateRow(r.id, {
                            actual: { ...r.actual, prastab: v },
                          })
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}

                {/* Add row */}
                <TableRow>
                  <TableCell colSpan={13} className="py-4">
                    <Button
                      variant="ghost"
                      className="gap-2 text-slate-700"
                      onClick={addRow}
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border">
                        <Plus className="h-4 w-4" />
                      </span>
                      নতুন আইটেম যোগ করুন
                    </Button>
                  </TableCell>
                </TableRow>

                {/* Footer totals */}
                <TableRow className="bg-slate-50">
                  <TableCell
                    colSpan={2}
                    className="font-semibold text-slate-800"
                  >
                    উপমোট - মুদ্রণ ও মনিহারী:
                  </TableCell>

                  <TableCell className="text-center font-semibold">
                    {toBn(totals.allocBachat)}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {toBn(totals.allocSanglapito)}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {toBn(totals.allocBitoron)}
                  </TableCell>

                  <TableCell className="text-center font-semibold">
                    {toBn(totals.approvedPrastab)}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {toBn(totals.approvedNote)}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {toBn(totals.approvedMot)}
                  </TableCell>

                  <TableCell className="text-center font-semibold">
                    {toBn(totals.releasedPrakkak)}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {toBn(totals.releasedOboshishto)}
                  </TableCell>

                  <TableCell className="text-center font-semibold">—</TableCell>

                  <TableCell className="text-center font-semibold">
                    {toBn(totals.actualBitoron)}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {toBn(totals.actualPrastab)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex flex-wrap justify-between gap-2 pt-2">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                ফিরে যান
              </Button>

              <Button
                className="bg-teal-700 hover:bg-teal-800"
                // onClick={onNext}
              >
                রিভিউ
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
