"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button, Input } from "@/components/ui";
import { useNewsletterForm } from "../hooks";
import { NewsletterStatus } from "./NewsletterStatus";

export function NewsletterForm() {
  const t = useTranslations("Newsletter.form");
  const { register, errors, onSubmit, isPending, isSuccess, isError } =
    useNewsletterForm();

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4 max-w-xl mx-auto">
      <Input
        type="email"
        autoComplete="email"
        label={t("email.label")}
        placeholder={t("email.placeholder")}
        required
        icon={<Mail className="h-5 w-5" />}
        error={errors.email?.message}
        className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white h-12 rounded-lg"
        {...register("email")}
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isPending}
          className="h-12 px-6 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          {t("submit")}
        </Button>
      </div>
      <NewsletterStatus isSuccess={isSuccess} isError={isError} />
    </form>
  );
}
