"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FieldLabel, Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar1, FilePlus, Search, PlusCircle, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { AuditRow, FY } from "@/app/(office)/office/types/report-audit";

type AuditReportEntryProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const AuditReportEntry = ({ open, setOpen }: AuditReportEntryProps) => {
  const [date, setDate] = React.useState<Date>();
  const [title, setTitle] = React.useState("");
  const [fy, setFy] = React.useState<FY>("২০২৫ - ২০২৬");

  const [rows, setRows] = React.useState<AuditRow[]>([
    { id: "r1", itemQuery: "", qty: 1, unitPrice: 0 },
  ]);

  const totalCost = React.useMemo(() => {
    return rows.reduce((sum, r) => sum + r.qty * r.unitPrice, 0);
  }, [rows]);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: `r${prev.length + 1}`,
        itemQuery: "",
        qty: 1,
        unitPrice: 0,
      },
    ]);
  };

  const removeRow = (id: string) => {
    setRows((prev) =>
      prev.length === 1 ? prev : prev.filter((r) => r.id !== id),
    );
  };

  const updateRow = (id: string, patch: Partial<AuditRow>) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleGenerate = () => {
    // TODO: wire API
    // payload example:
    // {
    //   title,
    //   fiscalYear: fy,
    //   date: date?.toISOString(),
    //   items: rows.map(r => ({ category: r.itemQuery, qty: r.qty, unit_price: r.unitPrice }))
    // }
    console.log("Generate report payload", {
      title,
      fiscalYear: fy,
      date,
      items: rows.map((r) => ({
        category: r.itemQuery,
        qty: r.qty,
        unit_price: r.unitPrice,
        total: r.qty * r.unitPrice,
      })),
      grandTotal: totalCost,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full md:min-w-3xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-5">
          <DialogTitle className="text-primary-color text-lg font-bold flex items-center gap-2">
            <FilePlus className="h-5 w-5" />
            নতুন অডিট রিপোর্ট এন্ট্রি
          </DialogTitle>
        </DialogHeader>

        <div className="border-t w-full mt-4" />

        <div className="px-6 py-5">
          {/* forms area */}
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            {/* title */}
            <div className="space-y-2 w-full md:w-auto">
              <FieldLabel className="font-semibold text-sm">
                রিপোর্টের শিরোনাম
              </FieldLabel>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="উদাঃ ক্রয় সারাংশ রিপোর্ট"
                className="focus-visible:ring-1 w-full md:min-w-56"
              />
            </div>

            {/* fiscal year */}
            <Select value={fy} onValueChange={(v) => setFy(v as FY)}>
              <div className="space-y-1 w-full md:w-auto">
                <FieldLabel className="font-semibold">অর্থবছর</FieldLabel>
                <SelectTrigger className="w-full focus-visible:ring-1 cursor-pointer md:min-w-56 mt-2">
                  <SelectValue placeholder="অর্থবছর নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="২০২৫ - ২০২৬">২০২৫ - ২০২৬</SelectItem>
                  <SelectItem value="২০২৩ - ২০২৪">২০২৩ - ২০২৪</SelectItem>
                  <SelectItem value="২০২২ - ২০২৩">২০২২ - ২০২৩</SelectItem>
                </SelectContent>
              </div>
            </Select>

            {/* date */}
            <Field className="w-full md:w-auto">
              <div className="space-y-2 w-full">
                <FieldLabel
                  htmlFor="date-picker-simple"
                  className="text-sm font-semibold"
                >
                  তারিখ
                </FieldLabel>

                <Popover>
                  <PopoverTrigger asChild className="w-full md:min-w-56">
                    <Button
                      variant="outline"
                      id="date-picker-simple"
                      className="justify-start font-normal w-full"
                    >
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span className="flex items-center justify-between w-full">
                          <span>mm/dd/yyyy</span>
                          <Calendar1 size={16} />
                        </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      defaultMonth={date}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </Field>
          </div>

          {/* data grid */}
          <div className="mt-6">
            <h2 className="text-medium-gray text-sm font-semibold">
              অডিট ডাটা গ্রিড
            </h2>

            <div className="mt-3 border rounded-lg overflow-hidden">
              {/* table header */}
              <div className="bg-gray-50 px-4 py-3">
                <div className="grid grid-cols-[1fr_110px_140px_150px_48px] gap-3 text-sm font-semibold text-gray-700">
                  <p>আইটেম ক্যাটাগরি</p>
                  <p className="text-center">পরিমাণ</p>
                  <p className="text-center">একক মূল্য (৳)</p>
                  <p className="text-right">মোট (৳)</p>
                  <p className="text-right"></p>
                </div>
              </div>

              {/* rows */}
              <div className="divide-y">
                {rows.map((row) => {
                  const rowTotal = row.qty * row.unitPrice;
                  return (
                    <div
                      key={row.id}
                      className="px-4 py-4 grid grid-cols-[1fr_110px_140px_150px_48px] gap-3 items-center"
                    >
                      {/* category search input */}
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          value={row.itemQuery}
                          onChange={(e) =>
                            updateRow(row.id, { itemQuery: e.target.value })
                          }
                          placeholder="সার্চ করুন..."
                          className="pl-9 focus-visible:ring-1"
                        />
                      </div>

                      {/* qty */}
                      <Input
                        type="number"
                        min={1}
                        value={row.qty}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          updateRow(row.id, {
                            qty: Number.isFinite(v) ? Math.max(1, v) : 1,
                          });
                        }}
                        className="focus-visible:ring-1 text-center"
                      />

                      {/* unit price */}
                      <Input
                        type="number"
                        min={0}
                        step="0.01"
                        value={row.unitPrice}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          updateRow(row.id, {
                            unitPrice: Number.isFinite(v) ? Math.max(0, v) : 0,
                          });
                        }}
                        className="focus-visible:ring-1 text-center"
                      />

                      {/* total */}
                      <div className="h-10 rounded-md bg-gray-100 flex items-center justify-end px-3 font-semibold text-gray-700">
                        {moneyBDT(rowTotal)}
                      </div>

                      {/* delete */}
                      <button
                        type="button"
                        onClick={() => removeRow(row.id)}
                        className="h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-red-50"
                        title="রো ডিলিট"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* add row */}
              <div className="px-4 py-4">
                <button
                  type="button"
                  onClick={addRow}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-color hover:underline"
                >
                  <PlusCircle className="h-4 w-4" />
                  নতুন সারি যুক্ত করুন
                </button>
              </div>
            </div>

            {/* total card */}
            <div className="mt-6 flex justify-end">
              <div className="w-full sm:w-[320px] rounded-lg border bg-primary-color/5 px-5 py-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700">
                  মোট ব্যয়:
                </p>
                <p className="text-2xl font-extrabold text-primary-color">
                  {moneyBDT(totalCost)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* footer buttons */}
        <div className="border-t px-6 py-4 flex items-center justify-end gap-3">
          <Button variant="outline" onClick={handleCancel}>
            বাতিল
          </Button>
          <Button
            onClick={handleGenerate}
            className="bg-primary-color hover:bg-primary-color/90"
          >
            রিপোর্ট জেনারেট করুন
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuditReportEntry;

const moneyBDT = (value: number) => `৳${toBnNumber(value)}`;

const toBnNumber = (value: number) => {
  // 12345.67 -> "১২,৩৪৫.৬৭"
  const s = value.toFixed(2);
  const [intPart, dec] = s.split(".");
  const withComma = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const map: Record<string, string> = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
    ",": ",",
    ".": ".",
    "-": "-",
  };
  const bn = (withComma + "." + dec)
    .split("")
    .map((c) => map[c] ?? c)
    .join("");
  return bn;
};
