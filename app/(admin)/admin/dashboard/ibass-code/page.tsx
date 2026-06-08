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

import ParentCodeDetailsDialog from "./_components/new-code-dialog/_components/ParentCodeDetailsDialog";
import EconomicCodeDetailsDialog from "./_components/new-code-dialog/_components/EconomicCodeDetailsDialog";
import ParentCodeFormDialog from "./_components/new-code-dialog/_components/ParentCodeFormDialog";
import EconomicCodeFormDialog from "./_components/new-code-dialog/_components/EconomicCodeFormDialog";

import type {
  EconomicCode,
  ParentCategory,
} from "./_components/new-code-dialog/_types/new-code.types";

import type {
  EconomicCodeItem,
  EconomicFiltersState,
  EconomicType,
  IBasTab,
  ParentFiltersState,
  ParentHeadItem,
} from "./_types/ibas-codes.types";

import type { OperationalCodeType } from "@/types/admin/code.types";

import {
  getOperationalCodesWithMeta,
  getParentCodesWithMeta,
  updateCodeStatus,
  updateOperationalCode,
  updateParentCode,
} from "@/service/admin/code.service";
import { getApiErrorMessage } from "@/utils/api-error.message";

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

  const [editParent, setEditParent] = useState<ParentCategory | null>(null);
  const [editEconomic, setEditEconomic] = useState<EconomicCode | null>(null);

  const limit = 8;

  const [parentPage, setParentPage] = useState(1);
  const [parentTotal, setParentTotal] = useState(0);
  const [parentTotalPages, setParentTotalPages] = useState(1);

  const [economicPage, setEconomicPage] = useState(1);
  const [economicTotal, setEconomicTotal] = useState(0);
  const [economicTotalPages, setEconomicTotalPages] = useState(1);

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

  function mapEconomicTypeToOperationalType(
    type: EconomicType,
  ): OperationalCodeType | undefined {
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

  function mapFormTypeToOperationalType(
    type: EconomicCode["econType"],
  ): OperationalCodeType {
    if (type === "PRODUCT") return "product";
    if (type === "SERVICE") return "service";
    return "salary";
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

  function handleEditParent(row: ParentHeadItem) {
    setEditParent({
      parentCode4: row.parentCode4,
      expenseCategoryBangla: row.expenseCategoryBn,
      expenseCategoryEnglish: row.expenseCategoryEnglish,
      description: row.details,
      isActive: row.status === "active",
    });
  }

  function handleEditEconomic(row: EconomicCodeItem) {
    setEditEconomic({
      economicCode7: row.economicCode7,
      codeNameBangla: row.nameBn,
      codeNameEnglish: row.nameEn,
      parentCode4: row.parentCode4,
      econType: mapEconomicTypeToFormType(row.type),
      description: row.details,
      isActive: row.status === "active",
    });
  }

  async function loadParentCodes() {
    try {
      setIsParentLoading(true);

      const response = await getParentCodesWithMeta({
        page: parentPage,
        limit,
        search: parentFilters.q,
        status:
          parentFilters.status === "any"
            ? undefined
            : parentFilters.status === "active",
      });

      setParentTotal(response.total);
      setParentTotalPages(response.totalPages || 1);

      const mappedRows: ParentHeadItem[] = response.data.map((item) => ({
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

      const response = await getOperationalCodesWithMeta({
        page: economicPage,
        limit,
        search: economicFilters.q,
        status:
          economicFilters.status === "any"
            ? undefined
            : economicFilters.status === "active",
        operationalTypeFilter: mapEconomicTypeToOperationalType(
          economicFilters.type,
        ),
      });

      setEconomicTotal(response.total);
      setEconomicTotalPages(response.totalPages || 1);

      const mappedRows: EconomicCodeItem[] = response.data.map((item) => ({
        id: item.code,
        economicCode7: item.code,
        nameBn: item.codeNameBangla,
        nameEn: item.codeNameEnglish,
        parentCode4: item.parentCode,
        parentTitleBn: item.expenseCategoryBangla,
        parentTitleEn: item.expenseCategoryEnglish,
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

  async function handleUpdateParent(values: ParentCategory) {
    try {
      await updateParentCode(values.parentCode4, {
        expenseCategoryBangla: values.expenseCategoryBangla.trim(),
        expenseCategoryEnglish: values.expenseCategoryEnglish.trim(),
        details: values.description?.trim() ?? "",
      });

      toast.success("Parent code updated successfully");
      setEditParent(null);
      void loadParentCodes();
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Failed to update parent code"));
    }
  }

  async function handleUpdateEconomic(values: EconomicCode) {
    try {
      await updateOperationalCode(values.economicCode7, {
        codeNameBangla: values.codeNameBangla.trim(),
        codeNameEnglish: values.codeNameEnglish.trim(),
        operationalCodeType: mapFormTypeToOperationalType(values.econType),
        details: values.description?.trim() ?? "",
      });

      toast.success("Operational code updated successfully");
      setEditEconomic(null);
      void loadOperationalCodes();
    } catch (error) {
      toast.error(
        getApiErrorMessage(error, "Failed to update operational code"),
      );
    }
  }

  useEffect(() => {
    if (tab === "parent") {
      void loadParentCodes();
    }
  }, [tab, parentFilters.q, parentFilters.status, parentPage]);

  useEffect(() => {
    if (tab === "economic") {
      void loadOperationalCodes();
    }
  }, [
    tab,
    economicFilters.q,
    economicFilters.status,
    economicFilters.type,
    economicPage,
  ]);
  return (
    <div className="space-y-7">
      <IbasHeader onOpenNewCode={() => setOpenNewCode(true)} />

      <IbasTabs value={tab} onChange={setTab} />

      <IbasFiltersBar
        tab={tab}
        parentState={parentFilters}
        economicState={economicFilters}
        onChangeParent={(value) => {
          setParentPage(1);
          setParentFilters(value);
        }}
        onChangeEconomic={(value) => {
          setEconomicPage(1);
          setEconomicFilters(value);
        }}
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
            onEdit={handleEditParent}
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
          onEdit={handleEditEconomic}
        />
      )}

      <IbasPagination
        page={tab === "parent" ? parentPage : economicPage}
        totalPages={tab === "parent" ? parentTotalPages : economicTotalPages}
        onPageChange={(nextPage) => {
          if (tab === "parent") {
            setParentPage(nextPage);
          } else {
            setEconomicPage(nextPage);
          }
        }}
        leftText={
          tab === "parent"
            ? `Showing ${parentTotal === 0 ? 0 : (parentPage - 1) * limit + 1
            }-${Math.min(parentPage * limit, parentTotal)} of ${parentTotal} categories`
            : `Showing ${economicTotal === 0 ? 0 : (economicPage - 1) * limit + 1
            }-${Math.min(economicPage * limit, economicTotal)} of ${economicTotal} results`
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
        onEdit={() => {
          if (viewParent) {
            setEditParent(viewParent);
            setViewParent(null);
          }
        }}
      />

      <EconomicCodeDetailsDialog
        open={!!viewEconomic}
        onClose={() => {
          setViewEconomic(null);
          setViewEconomicParent(null);
        }}
        data={viewEconomic}
        parent={viewEconomicParent}
        onEdit={() => {
          if (viewEconomic) {
            setEditEconomic(viewEconomic);
            setViewEconomic(null);
            setViewEconomicParent(null);
          }
        }}
      />

      {editParent ? (
        <ParentCodeFormDialog
          key={editParent.parentCode4}
          open
          mode="edit"
          initial={editParent}
          onClose={() => setEditParent(null)}
          onSubmit={handleUpdateParent}
        />
      ) : null}

      {editEconomic ? (
        <EconomicCodeFormDialog
          key={editEconomic.economicCode7}
          open
          mode="edit"
          initial={editEconomic}
          parentOptions={[]}
          onSearchParent={() => { }}
          onClose={() => setEditEconomic(null)}
          onSubmit={handleUpdateEconomic}
        />
      ) : null}
    </div>
  );
}