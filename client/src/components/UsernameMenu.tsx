// import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  // Function to extract initials from the user's name or email
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    if (nameParts.length > 1) {
      return nameParts[0][0] + nameParts[1][0];
    }
    return name.substring(0, 2);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <Avatar>
          <AvatarImage src={user?.picture || ""} alt={user?.name || "User"} />
          <AvatarFallback>
            {user ? getInitials(user.name || user.email || "") : "?"}
          </AvatarFallback>
        </Avatar>
        {/* <CircleUserRound className="text-orange-500" /> */}
        {/* {user?.email} */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            to="/manage-restaurant"
            className="font-bold hover:text-orange-500"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-orange-500"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
