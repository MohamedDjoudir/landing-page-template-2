import { useTranslations } from "next-intl";

interface NewsletterStatusProps {
  message?: string;
  isSuccess: boolean;
  isError: boolean;
}

export function NewsletterStatus({
  message,
  isSuccess,
  isError,
}: NewsletterStatusProps) {
  const t = useTranslations("Newsletter.form");
  const text = message ?? (isError ? t("error") : isSuccess ? t("success") : null);

  if (!text) return null;

  const isFailure = Boolean(message) || isError;

  return (
    <p
      role={isFailure ? "alert" : "status"}
      className={
        isFailure
          ? "mt-4 text-center text-sm text-[var(--errorColor)]"
          : "mt-4 text-center text-sm text-purple-400"
      }
    >
      {text}
    </p>
  );
}
