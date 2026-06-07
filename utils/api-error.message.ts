import axios from "axios";

type ApiErrorResponse = {
  message?: string | string[];
  error?: string;
  statusCode?: number;
};

export const getApiErrorMessage = (
  error: unknown,
  fallback = "Something went wrong",
): string => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiErrorResponse | undefined;

    if (Array.isArray(data?.message)) {
      return data.message.join(", ");
    }

    if (typeof data?.message === "string") {
      return data.message;
    }

    if (typeof data?.error === "string") {
      return data.error;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};
