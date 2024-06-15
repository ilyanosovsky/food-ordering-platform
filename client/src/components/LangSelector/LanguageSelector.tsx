import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "he", name: "עברית" },
    { code: "ru", name: "Русский" },
  ];

  const changeLanguage = (lng: string) => {
    console.log(`Changing language to: ${lng}`);
    i18n
      .changeLanguage(lng)
      .then(() => {
        console.log("Language changed successfully");
        setIsOpen(false);
      })
      .catch((err) => console.error("Error changing language:", err));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <Globe className="h-[1.2rem] w-[1.2rem] hover:text-orange-500" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent align="end">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => changeLanguage(language.code)}
            >
              {language.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default LanguageSelector;
