import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const LoadingButton = () => {
  const { t } = useTranslation();
  return (
    <Button disabled className="flex w-full">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {t("button.loading")}
    </Button>
  );
};

export default LoadingButton;
