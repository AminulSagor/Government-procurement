import { clearAuthCookies, getUserRole } from "@/utils/cookie.utils";

export const logoutUser = () => {
  const role = getUserRole();
  clearAuthCookies();

  if (typeof window !== "undefined") {
    const redirectPath =
      role === "admin"
        ? "/auth/admin/login"
        : role === "office"
          ? "/auth/office/login"
          : "/auth/vendor/login";

    window.location.href = redirectPath;
  }
};
