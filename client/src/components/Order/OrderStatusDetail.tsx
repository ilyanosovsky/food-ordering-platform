import { Order } from "@/types";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">{t("order.deliveringTo")}:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{t("order.yourOrder")}</span>
        <ul>
          {order.cartItems.map((item, index) => (
            <li key={item.menuItemId || index}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="dark:bg-white"/>
      <div className="flex flex-col">
        <span className="font-bold">{t("order.total")}</span>
        <span>${(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
