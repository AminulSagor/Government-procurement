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

//Response interceptor
serviceClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const role = getUserRole();

      clearAuthCookies();

      if (typeof window !== "undefined") {
        if (role) {
          window.location.href = `/auth/${role}/login`;
        } else {
          window.location.href = `/auth/office/login`; // fallback
        }
      }
    }

    return Promise.reject(error);
  },
);
