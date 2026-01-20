"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  ArrowLeft,
  CheckCircle2,
  CloudUpload,
  FileText,
  Plus,
  X,
} from "lucide-react";
import BudgetTableComponent from "./budget_depricated";

/* ----------------------------- types ----------------------------- */
type StepKey = "upload" | "code" | "budget" | "review";

type BudgetRow = {
  id: string;
  code: string;
  title: string;
  unit: string;
  qty: number;
  rate: number;
};

type BudgetSection = {
  id: string;
  title: string;
  tag?: string;
  rows: BudgetRow[];
};

/* ----------------------------- helpers ----------------------------- */
function formatBDT(n: number) {
  try {
    return new Intl.NumberFormat("bn-BD", {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    // fallback if Intl missing
    return `৳ ${Math.round(n).toString()}`;
  }
}

function sumSection(section: BudgetSection) {
  return section.rows.reduce((acc, r) => acc + (r.qty || 0) * (r.rate || 0), 0);
}

function sumAll(sections: BudgetSection[]) {
  return sections.reduce((acc, s) => acc + sumSection(s), 0);
}

function uid() {
  return Math.random().toString(16).slice(2);
}

/* ----------------------------- stepper ----------------------------- */
function Stepper({
  steps,
  currentIndex,
}: {
  steps: { key: StepKey; label: string }[];
  currentIndex: number;
}) {
  return (
    <div className="w-full">
      <div className="relative mt-2">
        <div className="absolute left-0 right-0 top-4 h-px bg-muted" />
        <div className="relative flex items-center justify-between">
          {steps.map((s, i) => {
            const done = i < currentIndex;
            const active = i === currentIndex;

            return (
              <div key={s.key} className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-sm",
                    done && "border-teal-600",
                    active && "border-teal-700 ring-4 ring-teal-100",
                    !done && !active && "border-muted-foreground/30",
                  )}
                >
                  {done ? (
                    <CheckCircle2 className="h-4 w-4 text-teal-700" />
                  ) : (
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        active ? "bg-teal-700" : "bg-muted-foreground/40",
                      )}
                    />
                  )}
                </div>

                <div
                  className={cn(
                    "text-xs",
                    active ? "text-teal-800" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- step: upload ----------------------------- */
function UploadStep({
  file,
  onPick,
  onRemove,
  onNext,
}: {
  file: File | null;
  onPick: (f: File) => void;
  onRemove: () => void;
  onNext: () => void;
}) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <Card className="border-muted-foreground/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <FileText className="h-4 w-4 text-teal-700" />
          ডকুমেন্ট আপলোড করুন
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          ডেটা এন্ট্রি শুরু করার জন্য বাজেট রিপোর্টের PDF আপলোড করুন
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {!file ? (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={cn(
              "group relative flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-10",
              "border-muted-foreground/30 bg-muted/30 hover:bg-muted/40 transition",
            )}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
              <CloudUpload className="h-5 w-5 text-teal-700" />
            </div>

            <div className="text-sm">
              <span className="text-teal-800 font-medium">
                আপলোডের জন্য ক্লিক করুন
              </span>{" "}
              বা ফাইলটি এখানে ড্র্যাগ & ড্রপ করুন
            </div>

            <div className="text-xs text-muted-foreground">
              শুধু PDF ফাইল, সর্বোচ্চ ৫০ MB
            </div>

            <input
              ref={inputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onPick(f);
              }}
            />
          </button>
        ) : (
          <div className="flex items-center justify-between rounded-lg border bg-teal-50/40 px-4 py-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-teal-700" />
              <div>
                <div className="text-sm font-medium">{file.name}</div>
                <div className="text-xs text-muted-foreground">
                  আপনার ফাইল আপলোড হয়েছে
                </div>
              </div>
            </div>

            <button
              type="button"
              className="rounded-md p-2 hover:bg-black/5"
              onClick={onRemove}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="flex justify-end">
          <Button
            className="bg-teal-700 hover:bg-teal-800"
            onClick={onNext}
            disabled={!file}
          >
            পরবর্তী
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ----------------------------- step: code ----------------------------- */
function CodeStep({
  fiscalFrom,
  fiscalTo,
  setFiscalFrom,
  setFiscalTo,
  onNext,
  onBack,
}: {
  fiscalFrom: string;
  fiscalTo: string;
  setFiscalFrom: (v: string) => void;
  setFiscalTo: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-4">
      <Card className="border-muted-foreground/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">কোড দিন</CardTitle>
          <p className="text-sm text-muted-foreground">
            ডকুমেন্ট ও এন্ট্রির কোড প্রবেশ করান
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-sm text-muted-foreground">অর্থ বছর</div>

            <div className="flex items-center gap-2">
              <Input
                value={fiscalFrom}
                onChange={(e) => setFiscalFrom(e.target.value)}
                placeholder="২০—"
                className="h-9 w-20"
              />
              <span className="text-muted-foreground">—</span>
              <Input
                value={fiscalTo}
                onChange={(e) => setFiscalTo(e.target.value)}
                placeholder="২০—"
                className="h-9 w-20"
              />
            </div>

            <div className="ml-auto flex gap-2">
              <Button variant="outline" onClick={onBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                ফিরে যান
              </Button>
              <Button
                className="bg-teal-700 hover:bg-teal-800"
                onClick={onNext}
                disabled={!fiscalFrom || !fiscalTo}
              >
                পরবর্তী
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <HintCards />
    </div>
  );
}

/* ----------------------------- step: budget entry ----------------------------- */
function BudgetEntryStep({
  office,
  setOffice,
  sections,
  setSections,
  onNext,
  onBack,
}: {
  office: string;
  setOffice: (v: string) => void;
  sections: BudgetSection[];
  setSections: React.Dispatch<React.SetStateAction<BudgetSection[]>>;
  onNext: () => void;
  onBack: () => void;
}) {
  const grand = sumAll(sections);

  const addRow = (sectionId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              rows: [
                ...s.rows,
                {
                  id: uid(),
                  code: "",
                  title: "",
                  unit: "",
                  qty: 0,
                  rate: 0,
                },
              ],
            }
          : s,
      ),
    );
  };

  const updateRow = (
    sectionId: string,
    rowId: string,
    patch: Partial<BudgetRow>,
  ) => {
    setSections((prev) =>
      prev.map((s) => {
        if (s.id !== sectionId) return s;
        return {
          ...s,
          rows: s.rows.map((r) => (r.id === rowId ? { ...r, ...patch } : r)),
        };
      }),
    );
  };

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      {
        id: uid(),
        title: "নতুন খাত",
        tag: "অর্থনীতি - ১",
        rows: [],
      },
    ]);
  };

  return (
    <div className="space-y-4">
      <Card className="border-muted-foreground/20">
        <CardContent className="pt-5 space-y-4">
          {/* top selector row */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[260px]">
              <Select value={office} onValueChange={setOffice}>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="অফিস নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="barishal">
                    বরিশাল মহানগরী কর অঞ্চল, বরিশাল
                  </SelectItem>
                  <SelectItem value="dhaka">ঢাকা কর অঞ্চল</SelectItem>
                  <SelectItem value="ctg">চট্টগ্রাম কর অঞ্চল</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="bg-teal-700 hover:bg-teal-800"
              onClick={onNext}
              disabled={!office}
            >
              রিপোর্ট জেনারেট করুন
            </Button>
          </div>

          <Separator />

          {/* summary */}
          <div className="grid gap-3 sm:grid-cols-3">
            <MiniStat title="মোট খাত" value={`${sections.length} টি`} />
            <MiniStat title="মোট বাজেট" value={formatBDT(grand)} />
            <MiniStat
              title="স্ট্যাটাস"
              value={<Badge className="bg-teal-700">এন্ট্রি চলছে</Badge>}
            />
          </div>
        </CardContent>
      </Card>

      {/* tables */}
      <div className="space-y-4">
        {sections.map((section) => {
          const subtotal = sumSection(section);

          return (
            <Card key={section.id} className="border-muted-foreground/20">
              <CardHeader className="py-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">{section.title}</div>
                    {section.tag ? (
                      <Badge variant="secondary" className="bg-teal-50">
                        {section.tag}
                      </Badge>
                    ) : null}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    উপ-মোট:{" "}
                    <span className="font-medium">{formatBDT(subtotal)}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 pb-4">
                <div className="rounded-lg border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-teal-50/60">
                        <TableHead className="w-[90px]">কোড</TableHead>
                        <TableHead>বিবরণ</TableHead>
                        <TableHead className="w-[110px]">একক</TableHead>
                        <TableHead className="w-[110px] text-right">
                          পরিমাণ
                        </TableHead>
                        <TableHead className="w-[130px] text-right">
                          দর
                        </TableHead>
                        <TableHead className="w-[150px] text-right">
                          মোট
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {section.rows.length === 0 ? (
                        <TableRow>
                          <TableCell
                            colSpan={6}
                            className="py-6 text-center text-sm text-muted-foreground"
                          >
                            কোনো আইটেম নেই — “যোগ করুন” চাপুন
                          </TableCell>
                        </TableRow>
                      ) : (
                        section.rows.map((r) => {
                          const total = (r.qty || 0) * (r.rate || 0);

                          return (
                            <TableRow key={r.id}>
                              <TableCell>
                                <Input
                                  value={r.code}
                                  onChange={(e) =>
                                    updateRow(section.id, r.id, {
                                      code: e.target.value,
                                    })
                                  }
                                  className="h-9"
                                />
                              </TableCell>

                              <TableCell>
                                <Input
                                  value={r.title}
                                  onChange={(e) =>
                                    updateRow(section.id, r.id, {
                                      title: e.target.value,
                                    })
                                  }
                                  className="h-9"
                                />
                              </TableCell>

                              <TableCell>
                                <Input
                                  value={r.unit}
                                  onChange={(e) =>
                                    updateRow(section.id, r.id, {
                                      unit: e.target.value,
                                    })
                                  }
                                  className="h-9"
                                />
                              </TableCell>

                              <TableCell className="text-right">
                                <Input
                                  type="number"
                                  value={String(r.qty)}
                                  onChange={(e) =>
                                    updateRow(section.id, r.id, {
                                      qty: Number(e.target.value || 0),
                                    })
                                  }
                                  className="h-9 text-right"
                                />
                              </TableCell>

                              <TableCell className="text-right">
                                <Input
                                  type="number"
                                  value={String(r.rate)}
                                  onChange={(e) =>
                                    updateRow(section.id, r.id, {
                                      rate: Number(e.target.value || 0),
                                    })
                                  }
                                  className="h-9 text-right"
                                />
                              </TableCell>

                              <TableCell className="text-right font-medium">
                                {formatBDT(total)}
                              </TableCell>
                            </TableRow>
                          );
                        })
                      )}

                      {/* subtotal row */}
                      <TableRow className="bg-muted/20">
                        <TableCell
                          colSpan={5}
                          className="text-right font-medium"
                        >
                          উপ-মোট
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {formatBDT(subtotal)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addRow(section.id)}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    যোগ করুন
                  </Button>

                  <div className="text-xs text-muted-foreground">
                    API ইন্টিগ্রেশনের সময় এখানে validation/locking বসাবে
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* add section */}
        <button
          type="button"
          onClick={addSection}
          className="w-full rounded-lg border border-dashed p-4 text-sm text-muted-foreground hover:bg-muted/30 transition"
        >
          <span className="inline-flex items-center gap-2">
            <Plus className="h-4 w-4" /> নতুন খাত যোগ করতে ক্লিক করুন
          </span>
        </button>

        <div className="flex flex-wrap justify-between gap-2 pt-2">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            ফিরে যান
          </Button>

          <Button className="bg-teal-700 hover:bg-teal-800" onClick={onNext}>
            রিভিউ
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- step: review ----------------------------- */
function ReviewStep({
  fileName,
  fiscalFrom,
  fiscalTo,
  office,
  sections,
  onBack,
  onSubmit,
}: {
  fileName: string;
  fiscalFrom: string;
  fiscalTo: string;
  office: string;
  sections: BudgetSection[];
  onBack: () => void;
  onSubmit: () => void;
}) {
  const grand = sumAll(sections);

  return (
    <Card className="border-muted-foreground/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">রিপোর্ট জেনারেট করুন</CardTitle>
        <p className="text-sm text-muted-foreground">
          সাবমিট করার আগে একবার রিভিউ করুন
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <MiniStat title="ডকুমেন্ট" value={fileName || "—"} />
          <MiniStat title="অর্থ বছর" value={`${fiscalFrom}—${fiscalTo}`} />
          <MiniStat title="অফিস" value={office || "—"} />
          <MiniStat title="গ্র্যান্ড টোটাল" value={formatBDT(grand)} />
        </div>

        <Separator />

        <div className="text-sm">
          <div className="font-medium mb-2">খাতসমূহ</div>
          <div className="space-y-2">
            {sections.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between rounded-md border px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span>{s.title}</span>
                  {s.tag ? (
                    <Badge variant="secondary" className="bg-teal-50">
                      {s.tag}
                    </Badge>
                  ) : null}
                </div>
                <div className="font-medium">{formatBDT(sumSection(s))}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 pt-2">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            ফিরে যান
          </Button>

          <Button className="bg-teal-700 hover:bg-teal-800" onClick={onSubmit}>
            সাবমিট করুন
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ----------------------------- shared: hint cards ----------------------------- */
function HintCards() {
  return (
    <Card className="border-muted-foreground/10 bg-muted/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <FileText className="h-4 w-4 text-teal-700" />
          নির্দেশনা
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-3 md:grid-cols-3">
          <HintCard
            title="ধাপ ১: রিপোর্ট আপলোড"
            text="প্রয়োজনীয় বাজেট রিপোর্টের PDF ফাইল আপলোড করতে হবে"
          />
          <HintCard
            title="ধাপ ২: কোড দিন"
            text="প্রাসঙ্গিক কোড/অর্থ বছর দিয়ে ডেটা যাচাই সহজ হবে"
          />
          <HintCard
            title="মনে রাখবেন"
            text="সঠিক তথ্য দিলে রিপোর্ট দ্রুত ও নির্ভুল হবে"
            highlight
          />
        </div>
      </CardContent>
    </Card>
  );
}

function HintCard({
  title,
  text,
  highlight,
}: {
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-background p-3",
        highlight && "bg-teal-50/50 border-teal-200",
      )}
    >
      <div className="text-sm font-medium">{title}</div>
      <div className="mt-1 text-xs text-muted-foreground">{text}</div>
    </div>
  );
}

function MiniStat({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-background p-3">
      <div className="text-xs text-muted-foreground">{title}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

/* ----------------------------- main component ----------------------------- */
export default function BudgetReportWizard() {
  const steps: { key: StepKey; label: string }[] = [
    { key: "upload", label: "ডকুমেন্ট আপলোড" },
    { key: "code", label: "কোড দিন" },
    { key: "budget", label: "বাজেট নির্ধারণ" },
    { key: "review", label: "রিপোর্ট জেনারেট করুন" },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // data states
  const [file, setFile] = React.useState<File | null>(null);
  const [fiscalFrom, setFiscalFrom] = React.useState("");
  const [fiscalTo, setFiscalTo] = React.useState("");
  const [office, setOffice] = React.useState("");

  const [sections, setSections] = React.useState<BudgetSection[]>([
    {
      id: uid(),
      title: "মূলধন ও পরিচালন",
      tag: "অর্থনীতি - ১",
      rows: [
        {
          id: uid(),
          code: "০১০১",
          title: "স্টেশনারি সামগ্রী",
          unit: "প্যাক",
          qty: 1,
          rate: 5000,
        },
        {
          id: uid(),
          code: "০১০২",
          title: "ফাইল ও ফোল্ডার",
          unit: "পিস",
          qty: 10,
          rate: 120,
        },
      ],
    },
    {
      id: uid(),
      title: "বাজার খাত",
      tag: "অর্থনীতি - ২",
      rows: [
        {
          id: uid(),
          code: "০২০১",
          title: "পরিষ্কার-পরিচ্ছন্নতা",
          unit: "মাস",
          qty: 1,
          rate: 8000,
        },
      ],
    },
  ]);

  const stepKey = steps[currentIndex]?.key;

  const goNext = () =>
    setCurrentIndex((i) => Math.min(i + 1, steps.length - 1));
  const goBack = () => setCurrentIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="min-h-screen bg-white">
      {/* top bar */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border">
                  <ArrowLeft className="h-4 w-4" />
                </div>
                <h1 className="text-lg font-semibold">
                  বাজেট রিপোর্ট আপলোড করুন
                </h1>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                সরাসরি কপ/ক্যানভাসের পরিবর্তে ধাপে ধাপে প্রক্রিয়া সম্পন্ন করুন
              </p>
            </div>

            <Button variant="outline" className="hidden sm:inline-flex">
              ফাইল সংরক্ষণ করুন
            </Button>
          </div>

          <div className="mt-3">
            <Stepper steps={steps} currentIndex={currentIndex} />
          </div>
        </div>
      </div>

      {/* body */}
      <div className="mx-auto max-w-6xl px-4 py-6 space-y-4">
        {stepKey === "upload" && (
          <>
            <UploadStep
              file={file}
              onPick={(f) => setFile(f)}
              onRemove={() => setFile(null)}
              onNext={goNext}
            />
            <HintCards />
          </>
        )}

        {stepKey === "code" && (
          <CodeStep
            fiscalFrom={fiscalFrom}
            fiscalTo={fiscalTo}
            setFiscalFrom={setFiscalFrom}
            setFiscalTo={setFiscalTo}
            onBack={goBack}
            onNext={goNext}
          />
        )}

        {stepKey === "budget" && (
          <BudgetEntryStep
            office={office}
            setOffice={setOffice}
            sections={sections}
            setSections={setSections}
            onBack={goBack}
            onNext={goNext}
          />
        )}

        {stepKey === "review" && (
          <ReviewStep
            fileName={file?.name ?? ""}
            fiscalFrom={fiscalFrom}
            fiscalTo={fiscalTo}
            office={office}
            sections={sections}
            onBack={goBack}
            onSubmit={() => {
              // TODO: integrate API here
              console.log("submit payload", {
                fileName: file?.name,
                fiscalFrom,
                fiscalTo,
                office,
                sections,
              });
              alert("Submitted (demo) ✅");
            }}
          />
        )}
      </div>
    </div>
  );
}
