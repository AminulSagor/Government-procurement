"use client";

import { useState } from "react";

import AgentProfileTopbar from "./_components/agent-profile-topbar";
import AgentProfileHero from "./_components/agent-profile-hero";
import HandledOrdersSection from "./_components/handled-orders-section";
import ContactInfoCard from "./_components/cards/contact-info-card";
import IdentityInfoCard from "./_components/cards/identity-info-card";
import PerformanceSummaryCard from "./_components/cards/performance-summary-card";
import AgentDocumentsDialog from "./_components/agent-documents-dialog";

import {
  demoAgentProfile,
  demoHandledOrders,
  demoPerformanceSummary,
} from "./_data/agent-profile.demo";

export default function AgentDetailsPage() {
  const [docOpen, setDocOpen] = useState(false);

  return (
    <div className="px-6 py-6">
      <AgentProfileTopbar backLabelBn="পেছনে যান" />

      <div className="mt-4">
        <AgentProfileHero data={demoAgentProfile} />
      </div>

      <div className="mt-5">
        <HandledOrdersSection rows={demoHandledOrders} />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ContactInfoCard data={demoAgentProfile.contact} />

        <IdentityInfoCard
          data={demoAgentProfile.identity}
          onViewDocs={() => setDocOpen(true)}
        />

        <PerformanceSummaryCard data={demoPerformanceSummary} />
      </div>

      {/* ✅ docs modal */}
      <AgentDocumentsDialog
        open={docOpen}
        onClose={() => setDocOpen(false)}
      />
    </div>
  );
}
