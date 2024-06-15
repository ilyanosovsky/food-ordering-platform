import { Loader } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader className="text-orange-500 h-24 w-24 animate-spin pt-10" />
    </div>
  );
};

export default LoadingSpinner;
