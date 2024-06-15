import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";
import { ModeToggle } from "../Theme/mode-toggle";
import LanguageSelector from "../LangSelector/LanguageSelector";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    if (nameParts.length > 1) {
      return nameParts[0][0] + nameParts[1][0];
    }
    return name.substring(0, 2);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex justify-around items-center font-bold gap-2">
              <Avatar>
                <AvatarImage
                  src={user?.picture || ""}
                  alt={user?.name || "User"}
                />
                <AvatarFallback>
                  {user ? getInitials(user.name || user.email || "") : "?"}
                </AvatarFallback>
              </Avatar>
              <span className="flex gap-5">
                <LanguageSelector />
                <ModeToggle />
              </span>
            </span>
          ) : (
            <span className="flex justify-around items-center gap-4">
              <span className="hover:text-orange-500">
                Welcome to OrderEats!
              </span>
              <span className="flex">
                <LanguageSelector />
                <ModeToggle />
              </span>
            </span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold bg-orange-500"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
