// app/(vendor)/vendor/dashboard/return-items-management/page.tsx

import ReturnItemsManagementShell from "./_components/ReturnItemsManagementShell";
import { buildDemoReturnItemsManagement } from "./_data/return-items-management.demo";

type Props = {
  searchParams?: Promise<{
    ret?: string | string[];
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  const retValue = params?.ret;
  const retId = Array.isArray(retValue)
    ? retValue[0]
    : retValue ?? "RET-2025-08-020";

  const data = buildDemoReturnItemsManagement(retId);

  return <ReturnItemsManagementShell data={data} />;
}