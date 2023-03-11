import { cars } from "../../data/dummyData";
import SingleCarFullWidth from "./SingleCarFullWidth";

const CarListFullWidth = () => {
  return (
    <div>
      {cars.map((car) => (
        <SingleCarFullWidth {...car} key={car.id} />
      ))}
    </div>
  );
};

export default CarListFullWidth;
