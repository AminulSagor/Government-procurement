"use client";
import { useState } from "react";
import QuotationExtraFields from "../_components/quotation-extra-fields";
import QuotationFormHeader from "../_components/quotation-form-header";
import QuotationItemsTable from "../_components/quotation-items-table";
import QuotationTotalsStrip from "../_components/quotation-totals-strip";
import RfqCostSummary from "../_components/rfq-cost-summary";
import ProductSearchBar from "./_components/product-search-bar";
import ProductSearchResults from "./_components/product-search-results";
import QuotationItemDetailedTable from "./_components/quotation-item-detailed-table";
import QuotationLogisticsSubmit from "./_components/quotation-logistics-submit";
import RfqSidePanel from "./_components/rfq-side-panel";
import AttentionBanner from "./_components/attention-banner";

export default function QuotationDetailsPage() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
      {/* LEFT */}
      <RfqSidePanel
        deadlineMs={new Date("2026-02-20T10:00:00Z").getTime()}
        subtotal={850000}
        vatPct={5}
        shipping={0}
      />

      {/* RIGHT */}
      <div className="space-y-4 relative">
        <AttentionBanner />
        <ProductSearchBar
          value={query}
          onChange={(v) => {
            setQuery(v);
            setShowResults(v.length > 1);
          }}
        />
        {showResults && (
          <div className="absolute z-50  w-full">
            <ProductSearchResults
              onSelect={(item) => {
                console.log("selected:", item);
                setShowResults(false);
                setQuery(item.name);
                // 👉 এখান থেকে item table-এ যোগ করবে
              }}
            />
          </div>
        )}
        <QuotationItemDetailedTable />
        <QuotationLogisticsSubmit />

        {/* <QuotationTotalsStrip />
        <QuotationExtraFields />
        <RfqCostSummary subtotal={850000} vatPct={0} shipping={0} /> */}
      </div>
    </div>
  );
}
