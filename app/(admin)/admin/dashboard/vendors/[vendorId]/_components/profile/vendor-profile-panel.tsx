import type { VendorDetails } from "../../_types/vendor-details";
import ProfileSummaryCard from "./profile-summary-card";
import LegalDocumentAuditCard from "./legal-document-audit-card";
import TaggingCard from "./tagging-card";
import InventoryCtaCard from "./inventory-cta-card";

type Props = {
  vendor: VendorDetails;
};

export default function VendorProfilePanel({ vendor }: Props) {
  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
      {/* LEFT */}
      <div className="space-y-5">
        <ProfileSummaryCard vendor={vendor} />
      </div>

      {/* RIGHT */}
      <div className="space-y-5">
        <LegalDocumentAuditCard vendor={vendor} />
        <TaggingCard vendor={vendor} />
        <InventoryCtaCard vendor={vendor} />
      </div>
    </section>
  );
}