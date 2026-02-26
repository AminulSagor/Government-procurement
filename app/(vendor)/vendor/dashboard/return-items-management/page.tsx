// app/(vendor)/vendor/dashboard/return-items-management/page.tsx

import ReturnItemsManagementShell from "./_components/ReturnItemsManagementShell";
import { buildDemoReturnItemsManagement } from "./_data/return-items-management.demo";


export default function Page({
  searchParams,
}: {
  searchParams?: { ret?: string };
}) {
  const retId = searchParams?.ret ?? "RET-2025-08-020"; // fallback demo
  const data = buildDemoReturnItemsManagement(retId);

  return <ReturnItemsManagementShell data={data} />;
}