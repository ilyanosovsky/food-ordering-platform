import landingImage from "../assets/landing.png";
import appDownloadDark from "../assets/appDownloadDark.png";
import appDownloadLight from "../assets/appDownloadLight.png";
import SearchBar, { SearchForm } from "@/components/Search/SearchBar";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/config/theme-provider";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white dark:bg-gray-900 rounded-lg shadow-md py-8 px-3 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        {t("home.title")}
        </h1>
        <span className="text-xl">{t("home.subtitle")}</span>
        <SearchBar
          placeHolder={t("home.searchPlaceholder")}
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            {t("home.orderFaster")}
          </span>
          <span>{t("home.downloadApp")}</span>
          <img
            src={theme === "dark" ? appDownloadDark : appDownloadLight}
            alt="App Download"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
