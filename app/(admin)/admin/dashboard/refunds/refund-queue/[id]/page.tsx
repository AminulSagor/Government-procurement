import RefundQueueDetailsClient from "@/app/(admin)/admin/dashboard/refunds/_components/refund-queue-details-client";

type Props = { params: Promise<{ id: string }> };

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <RefundQueueDetailsClient id={id} />;
}
