"use client";

import * as React from "react";
import Card from "@/components/cards/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Eye, Download, ChevronLeft, ChevronRight } from "lucide-react";
import {
  DateType,
  DocumentRow,
  FileType,
  TYPE_LABEL,
} from "@/app/(office)/office/types/report-audit";
import { DOCUMENTS } from "@/app/(office)/office/dummy-data/report-audit-data";

const DocumentLibrarySection = () => {
  const [query, setQuery] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState<FileType | "all">("all");
  const [dateFilter, setDateFilter] = React.useState<DateType>("all");

  const [page, setPage] = React.useState(1);
  const pageSize = 6;

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = [...DOCUMENTS];

    // type filter
    if (typeFilter !== "all") {
      list = list.filter((d) => d.type === typeFilter);
    }

    if (dateFilter !== "all") {
      // keep as-is for now (demo)
      list = list;
    }

    // search filter
    if (q) {
      list = list.filter((d) =>
        [d.title, d.uploadedAt, TYPE_LABEL[d.type]]
          .join(" ")
          .toLowerCase()
          .includes(q),
      );
    }

    return list;
  }, [query, typeFilter, dateFilter]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  React.useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const visible = filtered.slice(startIndex, endIndex);

  const handleView = (doc: DocumentRow) => {
    if (!doc.fileUrl || doc.fileUrl === "#") return;
    window.open(doc.fileUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownload = async (doc: DocumentRow) => {
    if (!doc.fileUrl || doc.fileUrl === "#") return;

    // simple download (works if server allows)
    const a = document.createElement("a");
    a.href = doc.fileUrl;
    a.download = `${doc.title}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="space-y-5">
      {/* filters */}
      <Card>
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="ডকুমেন্ট খুঁজুন...."
              className="pl-9 focus-visible:ring-1 w-full"
            />
          </div>

          {/* file type */}
          <Select
            value={typeFilter}
            onValueChange={(v) => setTypeFilter(v as FileType | "all")}
          >
            <div className="space-y-1 w-full lg:w-auto">
              <SelectTrigger className="w-full focus-visible:ring-1 cursor-pointer md:min-w-56">
                <SelectValue placeholder="ফাইলের ধরন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">সব ফাইল</SelectItem>
                <SelectItem value="uploaded">আপলোড করা ফাইল</SelectItem>
                <SelectItem value="generated">জেনারেট করা ফাইল</SelectItem>
                <SelectItem value="receipt">লেনদেন রিসিট</SelectItem>
              </SelectContent>
            </div>
          </Select>

          {/* date range */}
          <Select
            value={dateFilter}
            onValueChange={(v) => setDateFilter(v as DateType)}
          >
            <div className="space-y-1 w-full lg:w-auto">
              <SelectTrigger className="w-full focus-visible:ring-1 cursor-pointer md:min-w-56">
                <SelectValue placeholder="তারিখের পরিসর" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">সব সময়</SelectItem>
                <SelectItem value="this_month">এই মাস</SelectItem>
                <SelectItem value="last_30">শেষ ৩০ দিন</SelectItem>
                <SelectItem value="this_year">এই বছর</SelectItem>
              </SelectContent>
            </div>
          </Select>
        </div>
      </Card>

      {/* documents table */}
      <Card className="p-0 overflow-hidden">
        {/* header row */}
        <div className="bg-primary-color/5 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-[1fr_180px_140px] gap-4 text-sm font-semibold text-gray-700">
            <p className="text-primary-color">ডকুমেন্ট নাম</p>
            <p className="text-primary-color text-center">আপলোডের তারিখ</p>
            <p className="text-primary-color text-right">অ্যাকশন</p>
          </div>
        </div>

        {/* rows */}
        <div className="divide-y divide-gray-200">
          {visible.map((doc) => (
            <div
              key={doc.id}
              className="px-6 py-5 grid grid-cols-[1fr_180px_140px] gap-4 items-center"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* pdf square icon placeholder (match UI) */}
                <div className="h-10 w-10 rounded-md bg-red-50 flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-extrabold text-red-500">
                    PDF
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {doc.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {TYPE_LABEL[doc.type]}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 text-center whitespace-nowrap">
                {doc.uploadedAt}
              </p>

              <div className="flex justify-end items-center gap-2">
                <ActionIconBtn title="দেখুন" onClick={() => handleView(doc)}>
                  <Eye className="h-4 w-4" />
                </ActionIconBtn>
                <ActionIconBtn
                  title="ডাউনলোড"
                  onClick={() => handleDownload(doc)}
                >
                  <Download className="h-4 w-4" />
                </ActionIconBtn>
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <div className="px-6 py-10 text-center text-gray-500">
              কোনো ডকুমেন্ট পাওয়া যায়নি
            </div>
          )}
        </div>
      </Card>

      {/* pagination */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-gray-600">
            {total === 0
              ? "০ টি ডকুমেন্ট"
              : `মোট ${total} টি ডকুমেন্টের মধ্যে ${startIndex + 1} থেকে ${endIndex} দেখানো হচ্ছে`}
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
    </div>
  );
};

export default DocumentLibrarySection;

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

const ActionIconBtn = ({
  title,
  onClick,
  children,
}: {
  title: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-gray-100"
    >
      <span className="text-primary-color">{children}</span>
    </button>
  );
};
