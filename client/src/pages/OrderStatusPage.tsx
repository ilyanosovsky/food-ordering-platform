import { useGetMyOrders } from "@/api/OrderApi";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import OrderStatusDetail from "@/components/Order/OrderStatusDetail";
import OrderStatusHeader from "@/components/Order/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  const reversedOrders = [...orders].reverse();

  return (
    <div className="space-y-10">
      {reversedOrders.map((order) => (
        <div
          key={order._id}
          className="space-y-10 bg-gray-50 dark:bg-gray-900 p-10 rounded-lg"
        >
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
