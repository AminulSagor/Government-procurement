import ReturnRequestDetailsShell from "./_components/ReturnRequestDetailsShell";
import { demoReturnRequestDetails } from "./_data/return-request-details.demo";

export default async function Page({
  params,
}: {
  params: Promise<{ reqId: string }>;
}) {
  const { reqId } = await params;

  const data = demoReturnRequestDetails;

  return <ReturnRequestDetailsShell data={data} />;
}