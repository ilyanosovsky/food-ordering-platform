import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslation } from "react-i18next";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
  const { t } = useTranslation();

  const SORT_OPTIONS = [
    {
      label: t("sort.bestMatch"),
      value: "bestMatch",
    },
    {
      label: t("sort.deliveryPrice"),
      value: "deliveryPrice",
    },
    {
      label: t("sort.estimatedDeliveryTime"),
      value: "estimatedDeliveryTime",
    },
  ];

  const selectedSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
    SORT_OPTIONS[0].label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className="w-full">
        {t("sort.sortBy")}: {selectedSortLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option, index) => (
          <DropdownMenuItem
            key={index}
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
