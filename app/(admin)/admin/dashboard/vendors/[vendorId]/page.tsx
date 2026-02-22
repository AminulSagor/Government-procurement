import VendorDetailsShell from "./_components/vendor-details-shell";

type Props = {
  params: { vendorId: string };
};

export default function VendorDetailsPage({ params }: Props) {
  return <VendorDetailsShell vendorId={params.vendorId} />;
}