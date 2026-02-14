import { PendingActionsData, QuickLinkData } from "../_types/admin-dashboard.types";
import PendingActionsCard from "./pending-actions-card";

export default function RightPanel({
  pending,
  links,
}: {
  pending: PendingActionsData;
  links: QuickLinkData[];
}) {
  return (
    <div className="space-y-4">
      <PendingActionsCard data={pending} items={links} />
    </div>
  );
}
