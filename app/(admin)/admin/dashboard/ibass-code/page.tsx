"use client";

import { useMemo, useState } from "react";

import IbasHeader from "./_components/ibas-header";
import IbasTabs from "./_components/ibas-tabs";
import IbasFiltersBar from "./_components/ibas-filters-bar";
import ParentHeadsTable from "./_components/ibas-table-parent-heads";
import EconomicCodesTable from "./_components/ibas-table-economic-codes";
import IbasPagination from "./_components/ibas-pagination";

import NewCodeDialogController from "./_components/new-code-dialog/NewCodeDialogController";

import type {
  EconomicFiltersState,
  IBasTab,
  ParentFiltersState,
} from "./_types/ibas-codes.types";

import { demoEconomicCodes, demoParentHeads } from "./_data/ibas-codes.demo";

export default function IbasCodesPage() {
  const [tab, setTab] = useState<IBasTab>("parent");

  const [parentFilters, setParentFilters] = useState<ParentFiltersState>({
    q: "",
    status: "any",
  });

  const [economicFilters, setEconomicFilters] = useState<EconomicFiltersState>({
    q: "",
    type: "all",
    status: "any",
  });

  const parentRows = useMemo(() => {
    const q = parentFilters.q.trim().toLowerCase();

    return demoParentHeads.filter((r) => {
      const okQ =
        !q ||
        r.parentCode4.includes(q) ||
        r.expenseCategoryBn.toLowerCase().includes(q) ||
        r.expenseCategoryEnglish.toLowerCase().includes(q);

      const okStatus =
        parentFilters.status === "any" ? true : r.status === parentFilters.status;

      return okQ && okStatus;
    });
  }, [parentFilters]);

  const economicRows = useMemo(() => {
    const q = economicFilters.q.trim().toLowerCase();

    return demoEconomicCodes.filter((r) => {
      const okQ =
        !q ||
        r.economicCode7.includes(q) ||
        r.nameBn.toLowerCase().includes(q) ||
        r.nameEn.toLowerCase().includes(q) ||
        r.parentCode4.includes(q);

      const okType =
        economicFilters.type === "all" ? true : r.type === economicFilters.type;

      const okStatus =
        economicFilters.status === "any" ? true : r.status === economicFilters.status;

      return okQ && okType && okStatus;
    });
  }, [economicFilters]);

  const [openNewCode, setOpenNewCode] = useState(false);

  return (
    <div className="space-y-5 p-6">
      <IbasHeader onOpenNewCode={() => setOpenNewCode(true)} />

      <IbasTabs value={tab} onChange={setTab} />

      <IbasFiltersBar
        tab={tab}
        parentState={parentFilters}
        economicState={economicFilters}
        onChangeParent={setParentFilters}
        onChangeEconomic={setEconomicFilters}
      />

      {tab === "parent" ? (
        <ParentHeadsTable rows={parentRows} />
      ) : (
        <EconomicCodesTable rows={economicRows} />
      )}

      <IbasPagination
        leftText={
          tab === "parent"
            ? `Showing 1-${Math.min(4, parentRows.length)} of ${parentRows.length} categories`
            : `Showing 1-${Math.min(4, economicRows.length)} of ${economicRows.length} results`
        }
      />

      {/* Dialogs */}
      {openNewCode ? (
        <NewCodeDialogController
          open={openNewCode}
          onClose={() => setOpenNewCode(false)}
        />
      ) : null}
    </div>
  );
}
