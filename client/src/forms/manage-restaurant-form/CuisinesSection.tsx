import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";
import { useTranslation } from "react-i18next";

const CuisinesSection = () => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">{t("cuisines.cuisines")}</h2>
        <FormDescription>{t("cuisines.select")}</FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckbox cuisine={cuisineItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CuisinesSection;
