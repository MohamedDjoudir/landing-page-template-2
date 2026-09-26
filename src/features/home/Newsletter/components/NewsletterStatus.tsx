import { useTranslations } from "next-intl";

interface NewsletterStatusProps {
  isSuccess: boolean;
  isError: boolean;
}

export function NewsletterStatus({ isSuccess, isError }: NewsletterStatusProps) {
  const t = useTranslations("Newsletter.form");

  if (!isSuccess && !isError) return null;

  return (
    <p
      role={isError ? "alert" : "status"}
      className={
        isError ? "text-sm text-[var(--errorColor)]" : "text-sm text-purple-400"
      }
    >
      {isError ? t("error") : t("success")}
    </p>
  );
}
