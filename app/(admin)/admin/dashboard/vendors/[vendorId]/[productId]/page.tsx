import ProductDetailsShell from "./_components/product-details-shell";

type Props = {
  params: { vendorId: string; productId: string };
};

export default function VendorInventoryProductPage({ params }: Props) {
  return <ProductDetailsShell vendorId={params.vendorId} productId={params.productId} />;
}