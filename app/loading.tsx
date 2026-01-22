import { Spiral } from "ldrs/react";
import "ldrs/react/Spiral.css";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Spiral size="36" speed="0.9" color="#f1ece9" />
    </div>
  );
};
export default Loading;
