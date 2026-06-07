import { service_URL } from "@/service/base/env";
import { getToken, getUserRole, clearAuthCookies } from "@/utils/cookie.utils";
import axios from "axios";

export const serviceClient = axios.create({
  baseURL: service_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Request interceptor
serviceClient.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
serviceClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const requestUrl = error.config?.url || "";

    const isLoginRequest = requestUrl.includes("/login");
    const isAuthPage =
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/auth");

    if (status === 401 && !isLoginRequest && !isAuthPage) {
      const role = getUserRole();

      clearAuthCookies();

      if (typeof window !== "undefined") {
        const pathname = window.location.pathname;

        if (role) {
          window.location.href = `/auth/${role}/login`;
        } else if (pathname.startsWith("/admin")) {
          window.location.href = "/auth/admin/login";
        } else if (pathname.startsWith("/office")) {
          window.location.href = "/auth/office/login";
        } else if (pathname.startsWith("/vendor")) {
          window.location.href = "/auth/vendor/login";
        } else {
          window.location.href = "/auth/admin/login";
        }
      }
    }

    return Promise.reject(error);
  },
);
