"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import IbasHeader from "./_components/ibas-header";
import IbasTabs from "./_components/ibas-tabs";
import IbasFiltersBar from "./_components/ibas-filters-bar";
import ParentHeadsTable from "./_components/ibas-table-parent-heads";
import EconomicCodesTable from "./_components/ibas-table-economic-codes";
import IbasPagination from "./_components/ibas-pagination";
import NewCodeDialogController from "./_components/new-code-dialog/NewCodeDialogController";

import type {
  EconomicCodeItem,
  EconomicFiltersState,
  EconomicType,
  IBasTab,
  ParentFiltersState,
  ParentHeadItem,
} from "./_types/ibas-codes.types";

import {
  getOperationalCodes,
  getParentCodes,
  updateCodeStatus,
} from "@/service/admin/code.service";
import { getApiErrorMessage } from "@/utils/api-error.message";
import { EconomicCode, ParentCategory } from "./_components/new-code-dialog/_types/new-code.types";
import ParentCodeDetailsDialog from "./_components/new-code-dialog/_components/ParentCodeDetailsDialog";
import EconomicCodeDetailsDialog from "./_components/new-code-dialog/_components/EconomicCodeDetailsDialog";

export default function IbasCodesPage() {
  const [tab, setTab] = useState<IBasTab>("parent");
  const [openNewCode, setOpenNewCode] = useState(false);

  const [parentRows, setParentRows] = useState<ParentHeadItem[]>([]);
  const [isParentLoading, setIsParentLoading] = useState(false);

  const [economicRows, setEconomicRows] = useState<EconomicCodeItem[]>([]);
  const [isEconomicLoading, setIsEconomicLoading] = useState(false);

  const [viewParent, setViewParent] = useState<ParentCategory | null>(null);
  const [viewEconomic, setViewEconomic] = useState<EconomicCode | null>(null);
  const [viewEconomicParent, setViewEconomicParent] =
    useState<ParentCategory | null>(null);

  const [parentFilters, setParentFilters] = useState<ParentFiltersState>({
    q: "",
    status: "any",
  });

  const [economicFilters, setEconomicFilters] = useState<EconomicFiltersState>({
    q: "",
    type: "all",
    status: "any",
  });

  function mapOperationalTypeToEconomicType(
    type: "product" | "service" | "salary",
  ): Exclude<EconomicType, "all"> {
    if (type === "product") return "procurement_product";
    if (type === "service") return "procurement_service";
    return "salary_allowance";
  }

  function mapEconomicTypeToOperationalType(type: EconomicType) {
    if (type === "procurement_product") return "product";
    if (type === "procurement_service") return "service";
    if (type === "salary_allowance") return "salary";
    return undefined;
  }


  function mapEconomicTypeToFormType(type: EconomicType) {
    if (type === "procurement_product") return "PRODUCT";
    if (type === "procurement_service") return "SERVICE";
    return "NON_PROCUREMENT";
  }

  function handleViewParent(row: ParentHeadItem) {
    setViewParent({
      parentCode4: row.parentCode4,
      expenseCategoryBangla: row.expenseCategoryBn,
      expenseCategoryEnglish: row.expenseCategoryEnglish,
      description: row.details,
      isActive: row.status === "active",
    });
  }

  function handleViewEconomic(row: EconomicCodeItem) {
    setViewEconomic({
      economicCode7: row.economicCode7,
      codeNameBangla: row.nameBn,
      codeNameEnglish: row.nameEn,
      parentCode4: row.parentCode4,
      econType: mapEconomicTypeToFormType(row.type),
      description: row.details,
      isActive: row.status === "active",
    });

    setViewEconomicParent({
      parentCode4: row.parentCode4,
      expenseCategoryBangla: row.parentTitleBn,
      expenseCategoryEnglish: row.parentTitleEn ?? "",
    });
  }

  async function loadParentCodes() {
    try {
      setIsParentLoading(true);

      const parentCodes = await getParentCodes({
        page: 1,
        limit: 8,
        search: parentFilters.q,
        status:
          parentFilters.status === "any"
            ? undefined
            : parentFilters.status === "active",
      });

      const mappedRows: ParentHeadItem[] = parentCodes.map((item) => ({
        id: item.code,
        parentCode4: item.code,
        expenseCategoryBn: item.expenseCategoryBangla,
        expenseCategoryEnglish: item.expenseCategoryEnglish,
        totalMappedEconomicCodes: item.operationalCount,
        status: item.status ? "active" : "inactive",
        details: item.details,
      }));

      setParentRows(mappedRows);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Failed to load parent codes"));
    } finally {
      setIsParentLoading(false);
    }
  }

  async function loadOperationalCodes() {
    try {
      setIsEconomicLoading(true);

      const operationalCodes = await getOperationalCodes({
        page: 1,
        limit: 8,
        search: economicFilters.q,
        status:
          economicFilters.status === "any"
            ? undefined
            : economicFilters.status === "active",
        operationalTypeFilter: mapEconomicTypeToOperationalType(
          economicFilters.type,
        ),
      });

      const mappedRows: EconomicCodeItem[] = operationalCodes.map((item) => ({
        id: item.code,
        economicCode7: item.code,
        nameBn: item.codeNameBangla,
        nameEn: item.codeNameEnglish,
        parentCode4: item.parentCode,
        parentTitleBn: item.expenseCategoryBangla,
        type: mapOperationalTypeToEconomicType(item.operationalCodeType),
        status: item.status ? "active" : "inactive",
        details: item.details,
      }));

      setEconomicRows(mappedRows);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Failed to load operational codes"));
    } finally {
      setIsEconomicLoading(false);
    }
  }

  async function handleParentStatusChange(code: string, status: boolean) {
    try {
      await updateCodeStatus(code, status);

      toast.success("Status updated successfully");
      void loadParentCodes();
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Failed to update status"));
    }
  }

  async function handleOperationalStatusChange(code: string, status: boolean) {
    try {
      await updateCodeStatus(code, status);

      toast.success("Status updated successfully");
      void loadOperationalCodes();
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Failed to update status"));
    }
  }

  useEffect(() => {
    if (tab === "parent") {
      void loadParentCodes();
    }
  }, [tab, parentFilters.q, parentFilters.status]);

  useEffect(() => {
    if (tab === "economic") {
      void loadOperationalCodes();
    }
  }, [tab, economicFilters.q, economicFilters.status, economicFilters.type]);

  return (
    <div className="space-y-7">
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
        isParentLoading ? (
          <div className="rounded-xl border border-border bg-white p-10 text-center text-sm text-[var(--color-medium-gray)]">
            Loading parent codes...
          </div>
        ) : (
          <ParentHeadsTable
            rows={parentRows}
            onStatusChange={handleParentStatusChange}
            onView={handleViewParent}
          />
        )
      ) : isEconomicLoading ? (
        <div className="rounded-xl border border-border bg-white p-10 text-center text-sm text-[var(--color-medium-gray)]">
          Loading operational codes...
        </div>
      ) : (
        <EconomicCodesTable
          rows={economicRows}
          onStatusChange={handleOperationalStatusChange}
          onView={handleViewEconomic}
        />
      )}

      <IbasPagination
        leftText={
          tab === "parent"
            ? `Showing 1-${Math.min(8, parentRows.length)} of ${parentRows.length} categories`
            : `Showing 1-${Math.min(8, economicRows.length)} of ${economicRows.length} results`
        }
      />

      {openNewCode ? (
        <NewCodeDialogController
          open={openNewCode}
          onClose={() => {
            setOpenNewCode(false);

            if (tab === "parent") {
              void loadParentCodes();
            }

            if (tab === "economic") {
              void loadOperationalCodes();
            }
          }}
        />
      ) : null}

      <ParentCodeDetailsDialog
        open={!!viewParent}
        onClose={() => setViewParent(null)}
        data={viewParent}
        onEdit={() => { }}
      />

      <EconomicCodeDetailsDialog
        open={!!viewEconomic}
        onClose={() => {
          setViewEconomic(null);
          setViewEconomicParent(null);
        }}
        data={viewEconomic}
        parent={viewEconomicParent}
        onEdit={() => { }}
      />
    </div>
  );
}