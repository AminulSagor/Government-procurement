"use client";

import { useState } from "react";

export default function PdfPreviewPanel({
  titleBn,
  pdfUrl,
}: {
  titleBn: string;
  pdfUrl: string;
}) {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white overflow-hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => history.back()}
            className="h-8 px-2 rounded-lg text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]"
          >
            ←
          </button>
          <p className="text-sm font-semibold text-[var(--color-black)]">
            {titleBn}
          </p>
        </div>

        {/* TOOLBAR */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoom((z) => Math.max(50, z - 10))}
            className="h-8 px-2 rounded-lg text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]"
          >
            −
          </button>

          <span className="text-xs text-[var(--color-light-gray)]">{zoom}%</span>

          <button
            onClick={() => setZoom((z) => Math.min(200, z + 10))}
            className="h-8 px-2 rounded-lg text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]"
          >
            +
          </button>

          <a
            href={pdfUrl}
            download
            className="h-8 px-2 rounded-lg text-[var(--color-light-gray)] hover:bg-[var(--color-off-white)]"
          >
            ⤓
          </a>
        </div>
      </div>

      {/* PDF BODY */}
      <div className="bg-[#2f2f2f] p-4">
        <div className="mx-auto w-full max-w-[780px] rounded-md bg-white overflow-hidden">
          <iframe
            src={`${pdfUrl}#zoom=${zoom}`}
            className="w-full h-[800px]"
          />
        </div>
      </div>
    </div>
  );
}
