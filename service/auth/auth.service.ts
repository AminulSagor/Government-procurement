import { apiClient } from "@/service/base/api-client";
import type { LoginRequest, LoginResponse } from "@/types/auth/auth.types";

export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
    return apiClient<LoginResponse>("/login", {
        method: "POST",
        body: JSON.stringify(data),
    });
}