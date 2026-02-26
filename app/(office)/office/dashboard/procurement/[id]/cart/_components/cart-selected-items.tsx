"use client";

import { useMemo, useState } from "react";
import { Trash2 } from "lucide-react";
import { demoCartItems } from "@/app/(office)/office/dummy-data/cart-data";
import { CartItem } from "@/app/(office)/office/types/cart";
import Card from "@/components/cards/card";
import CartItemCard from "@/app/(office)/office/dashboard/procurement/[id]/cart/_components/cart-item-card";

export default function CartSelectedItems() {
  const [items, setItems] = useState<CartItem[]>(demoCartItems);

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((x) => x.id !== id));

  const hasItems = useMemo(() => items.length > 0, [items.length]);

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-black">
          নির্বাচিত পণ্য তালিকা (Selected Items)
        </h2>

        <button
          type="button"
          className="text-sm text-red flex items-center gap-2"
          onClick={() => setItems([])}
          disabled={!hasItems}
        >
          <Trash2 className="w-4 h-4" />
          সব মুছুন
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {items.map((it) => (
          <CartItemCard
            key={it.id}
            item={it}
            onRemove={() => removeItem(it.id)}
          />
        ))}

        {items.length === 0 && (
          <div className="py-10 text-center text-medium-gray">
            কোনো আইটেম নির্বাচিত নেই
          </div>
        )}
      </div>
    </Card>
  );
}
