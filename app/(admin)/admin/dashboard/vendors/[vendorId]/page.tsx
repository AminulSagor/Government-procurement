import VendorDetailsShell from "./_components/vendor-details-shell";

type Props = {
  params: Promise<{ vendorId: string }>;
};

export default async function VendorDetailsPage({ params }: Props) {
  const { vendorId } = await params;

  return <VendorDetailsShell vendorId={vendorId} />;
}