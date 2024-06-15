import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { ModeToggle } from "../Theme/mode-toggle";
import LanguageSelector from "../LangSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-500">
            {t("nav.orderStatus")}
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-orange-500 "
          onClick={async () => await loginWithRedirect()}
        >
          {t("nav.logIn")}
        </Button>
      )}
      <LanguageSelector />
      <ModeToggle />
    </span>
  );
};

export default MainNav;
