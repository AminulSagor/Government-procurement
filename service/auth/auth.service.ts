import { serviceClient } from "@/service/base/axios.client";
import { LoginRequest, LoginResponse } from "@/types/auth/auth.types";

export const loginUser = async (
  payload: LoginRequest,
): Promise<LoginResponse> => {
  const response = await serviceClient.post<LoginResponse>("/login", payload);
  return response.data;
};
