import landingImage from "../assets/landing.png";
import appDownloadDark from "../assets/appDownloadDark.png";
import appDownloadLight from "../assets/appDownloadLight.png";
import SearchBar, { SearchForm } from "@/components/Search/SearchBar";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/config/theme-provider";

const HomePage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white dark:bg-gray-900 rounded-lg shadow-md py-8 px-3 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the OrderEats App for faster ordering and personalised
            recommendations
          </span>
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
