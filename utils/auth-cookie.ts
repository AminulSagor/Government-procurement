const ACCESS_TOKEN_KEY = "access_token";
const USER_ROLE_KEY = "user_role";

type SetAuthCookieParams = {
    accessToken: string;
    role: string;
    remember?: boolean;
};

export function setAuthCookies({
    accessToken,
    role,
    remember = false,
}: SetAuthCookieParams) {
    if (typeof document === "undefined") return;

    const maxAge = remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24;

    document.cookie = `${ACCESS_TOKEN_KEY}=${encodeURIComponent(
        accessToken
    )}; path=/; max-age=${maxAge}; samesite=lax`;

    document.cookie = `${USER_ROLE_KEY}=${encodeURIComponent(
        role
    )}; path=/; max-age=${maxAge}; samesite=lax`;
}

export function getAccessTokenFromCookie(): string {
    if (typeof document === "undefined") return "";

    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((item) =>
        item.startsWith(`${ACCESS_TOKEN_KEY}=`)
    );

    return tokenCookie
        ? decodeURIComponent(tokenCookie.split("=")[1] || "")
        : "";
}

export function clearAuthCookies() {
    if (typeof document === "undefined") return;

    document.cookie = `${ACCESS_TOKEN_KEY}=; path=/; max-age=0; samesite=lax`;
    document.cookie = `${USER_ROLE_KEY}=; path=/; max-age=0; samesite=lax`;
}