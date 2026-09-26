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
    <>
      <form
        onSubmit={onSubmit}
        noValidate
        className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
      >
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="email"
            autoComplete="email"
            aria-label={t("email.label")}
            aria-invalid={errors.email ? true : undefined}
            placeholder={t("email.placeholder")}
            className="ps-10 bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white h-12 rounded-lg"
            {...register("email")}
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="h-12 px-6 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          {t("submit")}
        </Button>
      </form>
      <NewsletterStatus
        message={errors.email?.message}
        isSuccess={isSuccess}
        isError={isError}
      />
    </>
  );
}
