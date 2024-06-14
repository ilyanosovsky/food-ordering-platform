import { Loader } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader className="text-orange-500 h-6 w-6 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
