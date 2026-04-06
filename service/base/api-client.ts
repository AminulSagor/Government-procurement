type ApiRequestOptions = RequestInit & {
    token?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function apiClient<T>(
    endpoint: string,
    options: ApiRequestOptions = {}
): Promise<T> {
    const { token, headers, ...rest } = options;

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...rest,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(headers || {}),
        },
        cache: "no-store",
    });

    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    const payload = isJson ? await response.json() : await response.text();

    if (!response.ok) {
        if (typeof payload === "object" && payload && "message" in payload) {
            throw new Error(String(payload.message));
        }

        throw new Error("Request failed");
    }

    return payload as T;
}