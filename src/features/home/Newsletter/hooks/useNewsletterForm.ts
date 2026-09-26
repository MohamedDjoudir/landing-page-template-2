"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useSubscribeNewsletter } from "@/services/newsletter";
import type { NewsletterFormValues } from "../types";
import { createNewsletterSchema } from "../utils";

export function useNewsletterForm() {
  const t = useTranslations("Newsletter.form");
  const subscribe = useSubscribeNewsletter();

  const schema = useMemo(
    () =>
      createNewsletterSchema({
        required: t("email.required"),
        invalid: t("email.invalid"),
      }),
    [t]
  );

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = form.handleSubmit((values) =>
    subscribe.mutate(values, { onSuccess: () => form.reset() })
  );

  return {
    register: form.register,
    errors: form.formState.errors,
    onSubmit,
    isPending: subscribe.isPending,
    isSuccess: subscribe.isSuccess,
    isError: subscribe.isError,
  };
}
