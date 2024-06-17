import { MenuItem as MenuItemType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="flex  cursor-pointer" onClick={addToCart}>
      <AspectRatio ratio={16 / 3} className="flex ">
        <img
          src={
            menuItem.imageUrl ||
            "https://res.cloudinary.com/dueuo2k5y/image/upload/v1718559813/yeqo42dez4bzkejpitfi.png"
          } 
          alt={menuItem.name}
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <div className="flex flex-col justify-center  md:mr-10">
        <CardHeader>
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
