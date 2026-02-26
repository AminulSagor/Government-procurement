"use client";

import React, { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import ShipmentListSidebar from "../_components/shipment-list-sidebar";
import { mockReturnRequests } from "../_data/return-requests.demo";
import type { ReturnRequestItem } from "../_types/return-request.types";
import ReturnRequestShell from "./_components/return-request-shell";
import StatusPanel from "./_components/status-panel";

export default function ReturnRequestDetailsPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const items = mockReturnRequests;
  const active: ReturnRequestItem | undefined = useMemo(
    () => items.find((x) => x.id === params.id) ?? items[0],
    [items, params.id]
  );

  if (!active) return null;

  return (
    <ReturnRequestShell active={active}>
      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <ShipmentListSidebar
            items={items}
            activeId={active.id}
            onChangeActive={(id) =>
              router.push(`/admin/dashboard/return-request/${id}`)
            }
          />
        </div>

        <div className="col-span-12 md:col-span-8">
          <StatusPanel active={active} />
        </div>
      </div>
    </ReturnRequestShell>
  );
}