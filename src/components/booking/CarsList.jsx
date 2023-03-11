import { cars } from "../../data/dummyData";
import SingleCarCard from "./SingleCarCard";

const CarsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {cars.map((car) => (
        <SingleCarCard {...car} key={car.id} />
      ))}
    </div>
  );
};

export default CarsList;
