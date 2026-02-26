"use client";

import React from "react";
import type { ReturnRequestItem } from "../../_types/return-request.types";
import PendingPanel from "./panels/pending-panel";
import WaitingPanel from "./panels/waiting-panel";
import AcceptedPanel from "./panels/accepted-panel";
import DeniedPanel from "./panels/denied-panel";

export default function StatusPanel({ active }: { active: ReturnRequestItem }) {
  switch (active.status) {
    case "pending":
      return <PendingPanel active={active} />;
    case "waiting":
      return <WaitingPanel active={active} />;
    case "accepted":
      return <AcceptedPanel active={active} />;
    case "denied":
      return <DeniedPanel active={active} />;
    default:
      return <PendingPanel active={active} />;
  }
}
