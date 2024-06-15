import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const DetailsSection = () => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">{t("details.sectionTitle")}</h2>
        <FormDescription>
          {t("details.sectionDescription")}
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("details.restaurantName")}</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white dark:bg-gray-900 dark:border-gray-700" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-4">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("details.city")}</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white dark:bg-gray-900 dark:border-gray-700" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("details.country")}</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white dark:bg-gray-900 dark:border-gray-700" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>{t("details.deliveryPrice")}</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white dark:bg-gray-900 dark:border-gray-700" placeholder="1.50" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>{t("details.estimatedDeliveryTime")}</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white dark:bg-gray-900 dark:border-gray-700" placeholder="30" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DetailsSection;
