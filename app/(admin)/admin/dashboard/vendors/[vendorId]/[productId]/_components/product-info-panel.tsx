import ProductStatsCard from "./product-stats-card";
import ProductDescriptionCard from "./product-description-card";
import type { ProductDetails } from "../_types/product-details";

export default function ProductInfoPanel({ product }: { product: ProductDetails }) {
  return (
    <section className="space-y-5">
      {/* top meta */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
          <StatusDot status={product.status} />
          <span>আইবাস কোড: {product.ibasCode}</span>
        </div>

        <h1 className="text-2xl font-extrabold text-slate-900">{product.title}</h1>
        <div className="text-sm font-bold text-slate-500">{product.subTitle}</div>
      </div>

      <ProductStatsCard unitPrice={product.unitPrice} stock={product.stock} />
      <ProductDescriptionCard description={product.description} />
    </section>
  );
}

function StatusDot({ status }: { status: ProductDetails["status"] }) {
  const label = status === "in_stock" ? "স্টকে আছে" : "স্টক শেষ";
  const cls =
    status === "in_stock"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${cls}`}>
      <span
        className={`h-2 w-2 rounded-full ${
          status === "in_stock" ? "bg-green-600" : "bg-red-600"
        }`}
      />
      {label}
    </span>
  );
}