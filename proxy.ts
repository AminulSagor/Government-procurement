import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/auth/admin/login",
  "/auth/office/login",
  "/auth/vendor/login",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("access_token")?.value;
  const role = request.cookies.get("user_role")?.value;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/auth/admin/login", request.url));
    }

    if (pathname.startsWith("/office")) {
      return NextResponse.redirect(new URL("/auth/office/login", request.url));
    }

    if (pathname.startsWith("/vendor")) {
      return NextResponse.redirect(new URL("/auth/vendor/login", request.url));
    }
  }

  if (token && role) {
    if (pathname.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/auth/admin/login", request.url));
    }

    if (pathname.startsWith("/office") && role !== "office") {
      return NextResponse.redirect(new URL("/auth/office/login", request.url));
    }

    if (pathname.startsWith("/vendor") && role !== "vendor") {
      return NextResponse.redirect(new URL("/auth/vendor/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/office/:path*", "/vendor/:path*"],
};
