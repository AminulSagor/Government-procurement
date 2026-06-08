import { serviceClient } from "@/service/base/axios.client";
import type {
  CodeCreateResponse,
  GetOperationalCodesParams,
  GetParentCodesParams,
  OperationalCodeCreatePayload,
  OperationalCodeListItem,
  OperationalCodesResponse,
  ParentCodeCreatePayload,
  ParentCodeListItem,
  ParentCodesResponse,
  UpdateOperationalCodePayload,
  UpdateParentCodePayload,
} from "@/types/admin/code.types";

export const createParentCode = async (
  payload: ParentCodeCreatePayload,
): Promise<CodeCreateResponse> => {
  const response = await serviceClient.post<CodeCreateResponse>(
    "/codes/create",
    payload,
  );

  return response.data;
};

export const createOperationalCode = async (
  payload: OperationalCodeCreatePayload,
): Promise<CodeCreateResponse> => {
  const response = await serviceClient.post<CodeCreateResponse>(
    "/codes/create",
    payload,
  );

  return response.data;
};

export const getParentCodes = async (
  params?: GetParentCodesParams,
): Promise<ParentCodeListItem[]> => {
  const response = await serviceClient.get<ParentCodesResponse>("/codes", {
    params: {
      type: "parent",
      page: params?.page ?? 1,
      limit: params?.limit ?? 100,
      status:
        typeof params?.status === "boolean" ? String(params.status) : undefined,
      search: params?.search?.trim() || undefined,
      FilterCode: params?.filterCode || undefined,
    },
  });

  return response.data.data.data;
};

export const updateCodeStatus = async (code: string, status: boolean) => {
  const response = await serviceClient.patch(`/codes/${code}/status`, {
    status,
  });

  return response.data;
};

export const getOperationalCodes = async (
  params?: GetOperationalCodesParams,
): Promise<OperationalCodeListItem[]> => {
  const response = await serviceClient.get<OperationalCodesResponse>("/codes", {
    params: {
      type: "operational",
      page: params?.page ?? 1,
      limit: params?.limit ?? 100,
      status:
        typeof params?.status === "boolean" ? String(params.status) : undefined,
      search: params?.search?.trim() || undefined,
      operationalTypeFilter:
        params?.operationalTypeFilter && params.operationalTypeFilter !== "all"
          ? params.operationalTypeFilter
          : undefined,
      FilterCode: params?.filterCode || undefined,
    },
  });

  return response.data.data.data;
};

export const updateParentCode = async (
  code: string,
  payload: UpdateParentCodePayload,
) => {
  const response = await serviceClient.patch(`/codes/${code}`, payload);
  return response.data;
};

export const updateOperationalCode = async (
  code: string,
  payload: UpdateOperationalCodePayload,
) => {
  const response = await serviceClient.patch(`/codes/${code}`, payload);
  return response.data;
};

export const getParentCodesWithMeta = async (params?: GetParentCodesParams) => {
  const response = await serviceClient.get<ParentCodesResponse>("/codes", {
    params: {
      type: "parent",
      page: params?.page ?? 1,
      limit: params?.limit ?? 100,
      status:
        typeof params?.status === "boolean" ? String(params.status) : undefined,
      search: params?.search?.trim() || undefined,
      FilterCode: params?.filterCode || undefined,
    },
  });

  return response.data.data;
};

export const getOperationalCodesWithMeta = async (
  params?: GetOperationalCodesParams,
) => {
  const response = await serviceClient.get<OperationalCodesResponse>("/codes", {
    params: {
      type: "operational",
      page: params?.page ?? 1,
      limit: params?.limit ?? 100,
      status:
        typeof params?.status === "boolean" ? String(params.status) : undefined,
      search: params?.search?.trim() || undefined,
      operationalTypeFilter:
        params?.operationalTypeFilter && params.operationalTypeFilter !== "all"
          ? params.operationalTypeFilter
          : undefined,
      FilterCode: params?.filterCode || undefined,
    },
  });

  return response.data.data;
};
