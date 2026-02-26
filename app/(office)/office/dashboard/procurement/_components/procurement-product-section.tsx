"use client";

import { ProductFilterValues } from "@/app/(office)/office/dashboard/procurement/_components/product-filter-dialog";
import ProductRow from "@/app/(office)/office/dashboard/procurement/_components/product-row";
import ProductToolbar from "@/app/(office)/office/dashboard/procurement/_components/product-toolbar";
import SelectedCart from "@/app/(office)/office/dashboard/procurement/_components/selected-cart";
import {
  ProcurementCategory,
  ProcurementProduct,
} from "@/app/(office)/office/types/procurement-product-type";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import Card from "@/components/cards/card";
import { useMemo, useState } from "react";

type SortKey = "relevance" | "priceAsc" | "priceDesc";

export default function ProcurementProductSection({
  category,
}: {
  category: ProcurementCategory;
}) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<SortKey>("relevance");
  const [items, setItems] = useState<ProcurementProduct[]>(
    () => category.products ?? [],
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    let list = items.filter((p) => {
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        p.code.toLowerCase().includes(query)
      );
    });

    if (sort === "priceAsc")
      list = [...list].sort((a, b) => a.unitPriceMin - b.unitPriceMin);
    if (sort === "priceDesc")
      list = [...list].sort((a, b) => b.unitPriceMax - a.unitPriceMax);

    return list;
  }, [items, q, sort]);

  const selected = useMemo(
    () => items.filter((p) => (p.quantity ?? 0) > 0),
    [items],
  );

  const setQty = (id: string, nextQty: number) => {
    setItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(0, nextQty) } : p,
      ),
    );
  };

  const addToCart = (id: string) => {
    setItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity > 0 ? p.quantity : 1 } : p,
      ),
    );
  };

  const removeFromCart = (id: string) => setQty(id, 0);
  const handleFilter = (v: ProductFilterValues) => {
    console.log(v);
  };

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_400px] items-start">
      {/* LEFT */}
      <div className="space-y-4">
        <Card>
          <ProductToolbar
            q={q}
            onChangeQ={setQ}
            sort={sort}
            onChangeSort={setSort}
            onApplyFilters={handleFilter}
          />
        </Card>

        <div className="overflow-x-auto">
          <table className="min-w-225 w-full border-separate border-spacing-y-4">
            {/* HEADER */}
            <thead>
              <tr className="bg-medium-gray/10 text-sm text-light-gray">
                <th className="px-5 py-3 text-left w-35">আইটেম কোড</th>
                <th className="px-5 py-3 text-left min-w-87.5">
                  পণ্যের নাম ও বিবরণ
                </th>
                <th className="px-5 py-3 text-left min-w-45">
                  ইউনিট মূল্য সীমা
                </th>
                <th className="px-5 py-3 text-left min-w-22.5">একক</th>
                <th className="px-5 py-3 text-right min-w-92">
                  পরিমাণ ও অ্যাকশন
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {filtered.map((p) => (
                <ProductRow
                  key={p.id}
                  product={p}
                  onInc={() => setQty(p.id, p.quantity + 1)}
                  onDec={() => setQty(p.id, p.quantity - 1)}
                  onAdd={() => addToCart(p.id)}
                  isSelected={p.quantity > 0}
                />
              ))}
            </tbody>
          </table>

          {/* pagination */}
          <div className="p-4">
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-light-gray">
              <SecondaryButton className="px-3 py-1">{"<"}</SecondaryButton>
              <PrimaryButton className="px-3 py-1 text-sm">1</PrimaryButton>
              <SecondaryButton className="px-3 py-1">2</SecondaryButton>
              <SecondaryButton className="px-3 py-1">3</SecondaryButton>
              <span className="px-2">…</span>
              <SecondaryButton className="px-3 py-1">8</SecondaryButton>
              <SecondaryButton className="px-3 py-1">{">"}</SecondaryButton>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <SelectedCart selected={selected} onRemove={removeFromCart} />
    </div>
  );
}
