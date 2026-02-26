// app/(vendor)/vendor/dashboard/return-requests/[requestId]/page.tsx
import ReturnRequestDetailsShell from "./_components/ReturnRequestDetailsShell";
import { demoReturnRequestDetails } from "./_data/return-request-details.demo";

export default function Page({
  params,
}: {
  params: { requestId: string };
}) {
  // demo: ignore params, just show same UI
  const data = demoReturnRequestDetails;

  return <ReturnRequestDetailsShell data={data} />;
}