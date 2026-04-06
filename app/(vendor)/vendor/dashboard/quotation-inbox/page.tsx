import QuotationFilters from "./_components/quotation-filters";
import QuotationGrid from "./_components/quotation-grid";


export default function QuotationInboxPage() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
        {/* Left Filter */}
        <QuotationFilters />

        {/* Right Content */}
        <QuotationGrid />
      </div>
    </div>
  );
}
