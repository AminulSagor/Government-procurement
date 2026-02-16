"use client";

import React from "react";

export default function InventoryLayout({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 py-6">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
          <div>{sidebar}</div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
