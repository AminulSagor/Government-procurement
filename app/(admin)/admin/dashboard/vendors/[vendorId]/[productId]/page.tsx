import ProductDetailsShell from "./_components/product-details-shell";

type Props = {
  params: Promise<{
    vendorId: string;
    productId: string;
  }>;
};

export default async function VendorInventoryProductPage({ params }: Props) {
  const { vendorId, productId } = await params;

  return <ProductDetailsShell vendorId={vendorId} productId={productId} />;
}