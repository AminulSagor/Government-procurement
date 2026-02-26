"use client";

import type { ProcurementProduct } from "@/app/(office)/office/types/procurement-product-type";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";


const bnMoney = (n: number) => `৳${n.toLocaleString("en-US")}`;

export default function ProductRow({
  product,
  onInc,
  onDec,
  onAdd,
  isSelected,
}: {
  product: ProcurementProduct;
  onInc: () => void;
  onDec: () => void;
  onAdd: () => void;
  isSelected: boolean;
}) {
  return (
    <tr className="bg-white">
      <td className="rounded-l-xl border border-primary-color/20 px-4 py-4 align-middle">
        <span className="inline-flex rounded-md bg-off-white px-3 py-2 text-sm text-light-gray">
          {product.code}
        </span>
      </td>

      <td className="border-y border-primary-color/20 px-4 py-4 align-middle">
        <div className="font-semibold text-black">{product.name}</div>
        {product.description ? (
          <div className="mt-1 text-sm text-light-gray">{product.description}</div>
        ) : null}
      </td>

      <td className="border-y border-primary-color/20 px-4 py-4 align-middle font-semibold">
        {bnMoney(product.unitPriceMin)} – {bnMoney(product.unitPriceMax)}
      </td>

      <td className="border-y border-primary-color/20 px-4 py-4 align-middle text-light-gray">
        {product.unit}
      </td>

      <td className="rounded-r-xl border border-primary-color/20 px-4 py-4 align-middle">
        <div className="flex items-center justify-end gap-3">
          {/* qty control */}
          <div className="flex h-11 items-center overflow-hidden rounded-lg border border-primary-color/30 bg-white">
            <button onClick={onDec} className="h-full w-11 text-lg text-light-gray">
              –
            </button>
            <div className="w-14 text-center font-semibold">{product.quantity}</div>
            <button onClick={onInc} className="h-full w-11 text-lg text-primary-color">
              +
            </button>
          </div>

          {/* action */}
          {isSelected ? (
            <SecondaryButton className="h-11 px-4 border-primary-color/30 text-primary-color">
              ✓ যোগ করা হয়েছে
            </SecondaryButton>
          ) : (
            <PrimaryButton onClick={onAdd} className="h-11 px-4">
              🛒 যোগ করুন
            </PrimaryButton>
          )}
        </div>
      </td>
    </tr>
  );
}
