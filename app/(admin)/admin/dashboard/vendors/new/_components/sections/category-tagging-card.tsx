"use client";

import { useEffect, useMemo, useState } from "react";
import { Tag, X } from "lucide-react";
import FormCard from "../ui/form-card";
import type { VendorCreateValues } from "../../_types/vendor";
import { getOperationalCodes } from "@/service/admin/code.service";
import type { OperationalCodeListItem } from "@/types/admin/code.types";

type Props = {
  values: VendorCreateValues;
  onChange: (next: Partial<VendorCreateValues>) => void;
};

export default function CategoryTaggingCard({ values, onChange }: Props) {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState<OperationalCodeListItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<OperationalCodeListItem[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const visibleOptions = useMemo(() => {
    return options.filter((item) => !values.categoryCodes.includes(item.code));
  }, [options, values.categoryCodes]);

  const selected = useMemo(() => {
    return values.categoryCodes.map((code) => {
      const found = selectedItems.find((item) => item.code === code);

      return {
        code,
        label: found
          ? `${found.codeNameBangla || found.codeNameEnglish} - ${found.code}`
          : code,
      };
    });
  }, [values.categoryCodes, selectedItems]);

  function add(item: OperationalCodeListItem) {
    const exists = values.categoryCodes.includes(item.code);
    if (exists) return;

    setSelectedItems((prev) => {
      const alreadyStored = prev.some((p) => p.code === item.code);
      return alreadyStored ? prev : [...prev, item];
    });

    onChange({ categoryCodes: [...values.categoryCodes, item.code] });
    setSearch("");
    setOpen(false);
  }

  function remove(code: string) {
    onChange({ categoryCodes: values.categoryCodes.filter((c) => c !== code) });
    setSelectedItems((prev) => prev.filter((item) => item.code !== code));
  }

  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(async () => {
      try {
        setLoading(true);

        const response = await getOperationalCodes({
          page: 1,
          limit: 20,
          status: true,
          search,
        });

        setOptions(response);
      } catch {
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => window.clearTimeout(timer);
  }, [search, open]);

  return (
    <FormCard title="ক্যাটাগরি ট্যাগিং" icon={<Tag className="h-[18px] w-[18px]" />}>
      <div className="space-y-4">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Tag className="h-4 w-4" />
          </span>
          <input
            value={search}
            onFocus={() => setOpen(true)}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpen(true);
            }}
            placeholder="iBAS কোড বা নাম দিয়ে খুঁজুন..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:ring-4 focus:ring-sky-100"
          />

          {open ? (
            <div className="absolute left-0 right-0 top-[48px] z-50 max-h-60 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
              {loading ? (
                <p className="px-4 py-3 text-sm text-slate-500">Loading...</p>
              ) : visibleOptions.length > 0 ? (
                visibleOptions.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => add(item)}
                    className="flex w-full flex-col px-4 py-3 text-left text-sm hover:bg-slate-50"
                  >
                    <span className="font-semibold text-slate-900">
                      {item.code} - {item.codeNameBangla}
                    </span>
                    <span className="text-xs text-slate-500">
                      {item.codeNameEnglish}
                    </span>
                  </button>
                ))
              ) : (
                <p className="px-4 py-3 text-sm text-slate-500">
                  কোনো কোড পাওয়া যায়নি
                </p>
              )}
            </div>
          ) : null}
        </div>

        {selected.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selected.map((item) => (
              <span
                key={item.code}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {item.label}

                <button
                  type="button"
                  onClick={() => remove(item.code)}
                  className="rounded-full hover:bg-slate-200"
                  aria-label="Remove category"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </FormCard>
  );
}