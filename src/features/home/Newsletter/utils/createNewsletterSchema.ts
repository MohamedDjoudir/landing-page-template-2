import { z } from "zod";
import type { NewsletterSchemaMessages } from "../types";

export function createNewsletterSchema(messages: NewsletterSchemaMessages) {
  return z.object({
    email: z.string().min(1, messages.required).email(messages.invalid),
  });
}
