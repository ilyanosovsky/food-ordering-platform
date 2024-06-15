import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const MobileNavLinks = () => {
  const { t } = useTranslation();
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to="/order-status"
        className="flex bg-white dark:bg-gray-900 items-center font-bold hover:text-orange-500"
      >
        {t("nav.orderStatus")}
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white dark:bg-gray-900 items-center font-bold hover:text-orange-500"
      >
        {t("nav.myRestaurant")}
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white dark:bg-gray-900 items-center font-bold hover:text-orange-500"
      >
        {t("nav.userProfile")}
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        {t("nav.logOut")}
      </Button>
    </>
  );
};

export default MobileNavLinks;
