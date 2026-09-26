import { useMutation } from "@tanstack/react-query";
import { newsletterApi, type SubscribeNewsletterPayload } from "@/lib/api";
import { newsletterKeys } from "../../keys";

export function useSubscribeNewsletter() {
  return useMutation({
    mutationKey: newsletterKeys.subscribe(),
    mutationFn: async (payload: SubscribeNewsletterPayload) => {
      const response = await newsletterApi.subscribe(payload);
      if (!response.success) {
        throw new Error(response.error ?? "Newsletter subscription failed");
      }
      return response;
    },
  });
}
