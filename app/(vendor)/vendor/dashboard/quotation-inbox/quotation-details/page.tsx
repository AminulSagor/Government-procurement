import QuotationFormHeader from "../_components/quotation-form-header";
import RfqSidePanel from "../_components/rfq-side-panel";


export default function QuotationDetailsPage() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
      <RfqSidePanel />

      <div className="space-y-4">
        <QuotationFormHeader />
        {/* next components here */}
      </div>
    </div>
  );
}
