"use client";

import React, { useMemo, useState } from "react";
import Card from "@/components/cards/card";
import { Eye, Pencil, Trash2 } from "lucide-react";

import type {
  OfficeStatus,
  OfficeType,
} from "../_types/office-management.type";
import { OFFICE_MANAGEMENT_TABLE_DATA } from "../_data/office-management-data";
import { useRouter } from "next/navigation";

function TypeBadge({ type }: { type: OfficeType }) {
  const style =
    type === "উপজেলা"
      ? "bg-blue/10 text-blue"
      : type === "জেলা"
        ? "bg-blue/10 text-blue"
        : "bg-purple/10 text-purple";

  return (
    <span
      className={[
        "inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold",
        style,
      ].join(" ")}
    >
      {type}
    </span>
  );
}

function StatusPill({ status }: { status: OfficeStatus }) {
  const isActive = status === "active";
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
        isActive ? "bg-green/15 text-green" : "bg-yellow/15 text-orange",
      ].join(" ")}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {isActive ? "সক্রিয়" : "নিষ্ক্রিয়"}
    </span>
  );
}

function ActionIconBtn({
  label,
  children,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={[
        "h-9 w-9 rounded-md",
        "flex items-center justify-center",
        "text-medium-gray",
        "transition-all duration-150 ease-out",
        "hover:bg-off-white",
        "active:scale-[0.97] active:translate-y-px",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Pagination({
  page,
  totalPages,
  onPrev,
  onNext,
  onGo,
}: {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onGo: (p: number) => void;
}) {
  const pages = useMemo(() => {
    const arr: number[] = [];
    for (let i = 1; i <= totalPages; i++) arr.push(i);
    return arr;
  }, [totalPages]);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        className="h-10 w-10 rounded-md border border-primary-color/20 bg-white text-medium-gray"
      >
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onGo(p)}
          className={[
            "h-10 w-10 rounded-md border font-bold",
            p === page
              ? "bg-primary-color text-white border-primary-color"
              : "bg-white text-black border-primary-color/20",
          ].join(" ")}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        onClick={onNext}
        className="h-10 w-10 rounded-md border border-primary-color/20 bg-white text-medium-gray"
      >
        ›
      </button>
    </div>
  );
}

export default function OfficeManagementTable() {
  const all = OFFICE_MANAGEMENT_TABLE_DATA;

  const [page, setPage] = useState(1);
  const limit = 5;

  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const rows = useMemo(() => {
    const start = (page - 1) * limit;
    return all.slice(start, start + limit);
  }, [page, all]);

  const from = total === 0 ? 0 : (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);

  const router = useRouter();

  return (
    <Card className="p-0 overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-medium-gray bg-off-white/60">
              <th className="px-6 py-4 font-semibold">অফিসের নাম</th>
              <th className="px-6 py-4 font-semibold">আইডি (১০-ডিজিট)</th>
              <th className="px-6 py-4 font-semibold">ধরণ</th>
              <th className="px-6 py-4 font-semibold">প্যারেন্ট অফিস</th>
              <th className="px-6 py-4 font-semibold">স্ট্যাটাস</th>
              <th className="px-6 py-4 font-semibold text-center">অ্যাকশন</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-primary-color/10">
                <td className="px-6 py-5">
                  <p className="font-semibold text-black">{r.officeNameBn}</p>
                </td>

                <td className="px-6 py-5 text-sm text-medium-gray">
                  {r.officeId10Digit}
                </td>

                <td className="px-6 py-5">
                  <TypeBadge type={r.type} />
                </td>

                <td className="px-6 py-5 text-sm text-medium-gray">
                  {r.parentOfficeBn}
                </td>

                <td className="px-6 py-5">
                  <StatusPill status={r.status} />
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <ActionIconBtn label="Edit" onClick={() => {}}>
                      <Pencil className="h-5 w-5" />
                    </ActionIconBtn>
                    <ActionIconBtn
                      label="View"
                      onClick={() => {
                        router.push(
                          `/admin/dashboard/offices/office-configaration/${r.id}`,
                        );
                      }}
                    >
                      <Eye className="h-5 w-5" />
                    </ActionIconBtn>
                    <ActionIconBtn label="Delete" onClick={() => {}}>
                      <Trash2 className="h-5 w-5" />
                    </ActionIconBtn>
                  </div>
                </td>
              </tr>
            ))}

            {rows.length === 0 ? (
              <tr>
                <td
                  className="px-6 py-10 text-center text-sm text-medium-gray"
                  colSpan={6}
                >
                  কোনো ডাটা পাওয়া যায়নি
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between gap-3 px-6 py-4">
        <p className="text-sm text-medium-gray">
          {from}-{to} এর মধ্যে {rows.length}টি অফিস প্রদর্শিত হচ্ছে
        </p>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          onGo={(p) => setPage(p)}
        />
      </div>
    </Card>
  );
}
