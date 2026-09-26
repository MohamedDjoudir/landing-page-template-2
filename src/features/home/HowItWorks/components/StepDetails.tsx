import { CheckCircle, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { KEY_FEATURE_NUMBERS } from "../constants";

interface StepDetailsProps {
  title: string;
  description: string;
}

export function StepDetails({ title, description }: StepDetailsProps) {
  const t = useTranslations("HowItWorks.step");

  return (
    <div className="flex-1">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>

      <ul className="mt-5 space-y-2">
        {KEY_FEATURE_NUMBERS.map((number) => (
          <li key={number} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" />
            <span className="text-sm text-gray-300">
              {t("keyFeature", { number })}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
        >
          {t("learnMore")}{" "}
          <ChevronRight className="ms-1 h-4 w-4 rtl:rotate-180" />
        </a>
      </div>
    </div>
  );
}
