"use client";

import { BreadcrumbItem } from "@/app/(office)/office/types/quotation-verification-selection.types";
import Breadcrumb from "@/components/breadCrumb";
import BackButton from "@/components/buttons/back-button";
import SecondaryButton from "@/components/buttons/secondary-button";

export default function PageHeader({
  breadcrumb,
  title,
  rfqId,
  subtitle,
  topRightBtnText,
  onBack,
  onExport,
}: {
  breadcrumb: BreadcrumbItem[];
  title: string;
  rfqId: string;
  subtitle: string;
  topRightBtnText: string;
  onBack?: () => void;
  onExport?: () => void;
}) {
  return (
    <div className="mb-5">
      <Breadcrumb items={breadcrumb} />

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <BackButton />

          <div>
            <div className="text-2xl font-extrabold text-black">{title}</div>
            <div className="mt-1 text-sm text-light-gray">
              <span className="font-semibold text-primary-color">{rfqId}</span>{" "}
              {subtitle}
            </div>
          </div>
        </div>

        <SecondaryButton
          onClick={onExport}
          className="px-4 py-2 text-sm border border-primary-color/20"
        >
          {topRightBtnText}
        </SecondaryButton>
      </div>
    </div>
  );
}
