import type { ApiResponse } from "@/types";
import { API_BASE_URL } from "./base-url";

export interface SubscribeNewsletterPayload {
  email: string;
}

export const newsletterApi = {
  async subscribe(
    payload: SubscribeNewsletterPayload
  ): Promise<ApiResponse> {
    if (!API_BASE_URL) {
      return { success: false, error: "NEXT_PUBLIC_API_BASE_URL is not set" };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => ({}))) as Partial<
        ApiResponse
      >;

      if (!response.ok) {
        return {
          success: false,
          error: body.error ?? body.message ?? `Request failed (${response.status})`,
        };
      }

      return { success: true, message: body.message };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Network error",
      };
    }
  },
};
