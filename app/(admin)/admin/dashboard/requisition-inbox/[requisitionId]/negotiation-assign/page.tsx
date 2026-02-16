"use client";

import { useMemo, useState } from "react";
import NegotiationAssignHeader from "./_components/NegotiationAssignHeader";
import LeftRequisitionPanel from "./_components/LeftRequisitionPanel";
import VendorAssignTable from "./_components/VendorAssignTable";
import SummaryCardsRow from "./_components/SummaryCardsRow";
import BottomActionBar from "./_components/BottomActionBar";
import ProductDetailsDialog from "./_components/ProductDetailsDialog";

import { demoItems, demoMeta, demoSummary, demoVendorRows } from "./_data/negotiation-assign.demo";
import type { RequisitionItem, VendorRow } from "./_types/negotiation-assign.types";

export default function NegotiationAssignPage() {
  const [rows, setRows] = useState<VendorRow[]>(demoVendorRows);

  // ✅ dialog state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RequisitionItem | null>(null);

  const onChangeBudget = (id: string, next: string) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, adminBudgetBn: next } : r)));
  };

  // ✅ open dialog from Eye click
  const onViewDetails = (item: RequisitionItem) => {
    setSelectedItem(item);
    setDetailsOpen(true);
  };

  const meta = demoMeta;
  const items = demoItems;
  const summary = useMemo(() => demoSummary, []);

  return (
    <div className="min-h-[calc(100vh-56px)] bg-[var(--color-off-white)]">
      <div className="mx-auto max-w-[1400px] px-6 py-5 space-y-4">
        <NegotiationAssignHeader
          titleBn={meta.officeNameBn}
          fiscalYearBn={meta.fiscalYearBn}
          requisitionNoBn={meta.requisitionNoBn}
          itemsCountBn={meta.itemsCountBn}
          totalVendorsBn={meta.totalVendorsBn}
        />

        <div className="grid grid-cols-12 gap-4">
          {/* LEFT */}
          <div className="col-span-4">
            <LeftRequisitionPanel items={items} onViewDetails={onViewDetails} />
          </div>

          {/* RIGHT */}
          <div className="col-span-8 space-y-4">
            <VendorAssignTable rows={rows} onChangeBudget={onChangeBudget} />
            <SummaryCardsRow cards={summary} />
          </div>
        </div>

        {/* Full width bottom bar */}
        <div className="pt-2">
          <BottomActionBar />
        </div>
      </div>

      {/* ✅ Dialog outside container, so it overlays perfectly */}
      <ProductDetailsDialog
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        item={{
          nameBn: selectedItem?.nameBn ?? "এ৪ পেপার (A4 Paper)",
          qtyBn: selectedItem?.qtyBn ?? "৫০",
          unitBn: selectedItem?.unitBn ?? "রিম",
          code: selectedItem?.code ?? "3255101",
          specTextBn:
            "৮০ জিএসএম, অল্প-এ ব্রাইট হোয়াইট ফিনিশ কাগজ। এটি সরকারি দপ্তরের দাপ্তরিক ব্যবহারের জন্য অত্যন্ত টেকসই এবং উন্নতমানের হতে হবে। প্রতিটি রিম যথাযথভাবে প্যাকেজ করা থাকতে হবে।",
          budget: {
            baseBn: selectedItem?.breakdown?.baseBn ?? "৳ ৮৩৬.৮৮",
            vatBn: selectedItem?.breakdown?.vatBn ?? "৳ ৪৭.৫০",
            aitBn: selectedItem?.breakdown?.aitBn ?? "৳ ১০.৫০",
            advanceVatBn: selectedItem?.breakdown?.advanceVatBn ?? "৳ ৮.৮২",
            finalUnitBn: selectedItem?.breakdown?.finalUnitBn ?? "৳ ৮৫০.০০",
            totalBudgetBn: selectedItem?.totalPriceBn ?? "৳ ১৭,৫০০.০০",
          },
        }}
      />
    </div>
  );
}
