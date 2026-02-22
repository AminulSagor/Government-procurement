"use client";

import { UploadCloud, X } from "lucide-react";
import { formatBytes } from "../../_utils/file";

type Props = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  file: File | null | undefined;
  accept?: string;
  onChange: (file: File | null) => void;
};

export default function FileDropzone({
  title,
  subtitle,
  icon,
  file,
  accept = ".pdf,.jpg,.jpeg,.png",
  onChange,
}: Props) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700">
            {icon ?? <UploadCloud className="h-5 w-5" />}
          </div>

          <div>
            <div className="text-sm font-extrabold text-slate-900">{title}</div>
            <div className="mt-1 text-xs text-slate-500">{subtitle}</div>
          </div>
        </div>

        {file ? (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <X className="h-4 w-4" />
            Remove
          </button>
        ) : (
          <label className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept={accept}
              onChange={(e) => onChange(e.target.files?.[0] ?? null)}
            />
            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100">
              <UploadCloud className="h-4 w-4" />
              ফাইল যুক্ত করুন
            </span>
          </label>
        )}
      </div>

      {file ? (
        <div className="mt-3 rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-700">
          <div className="font-semibold">{file.name}</div>
          <div className="mt-1 text-slate-500">{formatBytes(file.size)}</div>
        </div>
      ) : null}
    </div>
  );
}