"use client";

import { useEffect, useRef } from "react";
import NotificationHeader from "./notification-header";
import NotificationItem from "./notification-item";
import NotificationFooter from "./notification-footer";
import { notificationList } from "../../_data/notification-data";


export default function NotificationPopup({
  open,
  onClose,
  anchorRef,
}: {
  open: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const onDown = (e: MouseEvent) => {
      const panel = panelRef.current;
      const anchor = anchorRef.current;
      const t = e.target as Node;

      if (!panel || !anchor) return;
      if (!panel.contains(t) && !anchor.contains(t)) onClose();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open, onClose, anchorRef]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      className="absolute right-0 top-[44px] z-50 w-[520px] rounded-2xl bg-white border border-[#E6EDF5] shadow-[0_20px_60px_rgba(15,23,42,0.18)] overflow-hidden"
    >
      <NotificationHeader />

      {/* top divider */}
      <div className="h-px bg-[#E7EEF5]" />

      {/* list */}
      <div className="pb-1">
        {notificationList.map((n) => (
          <NotificationItem key={n.id} item={n} />
        ))}
      </div>

      <NotificationFooter />
    </div>
  );
}
