// app/(vendor)/vendor/dashboard/return-items-management/_components/ReturnItemsManagementShell.tsx
import type { ReturnItemsManagementPageData } from "../_types/return-items-management.types";
import PageCrumbs from "./PageCrumbs";
import PageHeader from "./PageHeader";
import AlertBanner from "./AlertBanner";
import ReturnRequestManageCard from "./ReturnRequestManageCard";
import ResolvedReturnRow from "./ResolvedReturnRow";

export default function ReturnItemsManagementShell({ data }: { data: ReturnItemsManagementPageData }) {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-[var(--color-off-white)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <PageCrumbs crumbsBn={data.crumbsBn} backHref={data.backHref} />
        <PageHeader titleBn={data.titleBn} subtitleEn={data.subtitleEn} />
        <AlertBanner text={data.alert.textBn} />

        <ReturnRequestManageCard item={data.activeCard} form={data.actionRequired} />

        {data.resolved.map((r) => (
          <ResolvedReturnRow key={r.title} title={r.title} statusText={r.statusText} dateText={r.dateText} />
        ))}
      </div>
    </main>
  );
}