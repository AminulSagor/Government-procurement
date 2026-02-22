"use client";

import { FileText, CreditCard, IdCard } from "lucide-react";
import FormCard from "../ui/form-card";
import FileDropzone from "../ui/file-dropzone";
import type { VendorDocuments, VendorDocumentKey, VendorDocumentMeta } from "../../_types/vendor";

type Props = {
  items: VendorDocumentMeta[];
  files: VendorDocuments;
  onPick: (key: VendorDocumentKey, file: File | null) => void;
};

const ICONS: Record<string, React.ReactNode> = {
  trade_license: <FileText className="h-5 w-5" />,
  tin: <CreditCard className="h-5 w-5" />,
  nid: <IdCard className="h-5 w-5" />,
};

export default function DocumentUploadCard({ items, files, onPick }: Props) {
  return (
    <FormCard title="নথি আপলোড" icon={<FileText className="h-[18px] w-[18px]" />}>
      <div className="space-y-4">
        {items.map((it) => (
          <FileDropzone
            key={it.key}
            title={it.title}
            subtitle={it.subtitle}
            icon={ICONS[it.key]}
            file={files[it.key]}
            accept={it.accept}
            onChange={(f) => onPick(it.key, f)}
          />
        ))}
      </div>
    </FormCard>
  );
}