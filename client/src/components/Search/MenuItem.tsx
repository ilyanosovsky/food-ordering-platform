import { MenuItem as MenuItemType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="flex cursor-pointer" onClick={addToCart}>
      <AspectRatio ratio={16 / 3} className="flex-none w-1/3">
        <img
          src={
            menuItem.imageUrl ||
            "https://res.cloudinary.com/dueuo2k5y/image/upload/v1718688597/food/uwwbqhkqpgz1wqg9mdmz.png"
          } 
          alt={menuItem.name}
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
      <div className="flex flex-col justify-center w-[200px]  md:mr-10">
        <CardHeader >
          <CardTitle>{menuItem.name}</CardTitle>
        </CardHeader>
        <CardContent className="font-bold">
          ${(menuItem.price / 100).toFixed(2)}
        </CardContent>
      </div>
    </Card>
  );
};

export default MenuItem;
