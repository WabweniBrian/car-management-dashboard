import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";

const Featured = () => {
  const { darkMode } = useSelector(uiStore);
  return (
    <div className="card h-full">
      <h1 className="font-semibold text-xl">2022 Mercedes Benz</h1>
      <div className="mt-4">
        <img
          src={darkMode ? "/images/car-dark.png" : "/images/car-light.png"}
          alt=""
          className="w-80 mx-auto"
        />
      </div>
    </div>
  );
};

export default Featured;
