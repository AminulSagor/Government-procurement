export type PanelKey = "office" | "vendor" | "admin";

export function detectPanel(pathname: string): PanelKey {
  const p = pathname.split("/").filter(Boolean)[1];
  if (p === "office" || p === "vendor" || p === "admin") return p;
  return "office"; // fallback
}

export function authPath(panel: PanelKey, route: "login" | "forgot-password" | 'otp-verify') {
  return `/auth/${panel}/${route}`;
}
