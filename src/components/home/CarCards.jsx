import { BiMap } from "react-icons/bi";

import { FiRepeat, FiRotateCcw } from "react-icons/fi";
import { carCards } from "../../data/dummyData";

const CarCards = () => {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {carCards.map(
        ({ id, percentage, name, image, amount, num_of_likes, cardBg }) => (
          <div
            key={id}
            className="p-4 rounded-lg card-shadow dark:shadow-none group"
            style={{ background: cardBg }}
          >
            <div className="flex-align-center gap-x-2">
              <FiRotateCcw />
              <h1>{percentage}% Recommended</h1>
            </div>
            <div className="mt-3 p-3">
              <img
                src={image}
                alt={name}
                className="w-full h-32 object-contain group-hover:scale-125 transition-a sm:cursor-pointer"
              />
            </div>
            <h1 className="font-semibold text-xl mt-2 capitalize">{name}</h1>
            <div className="mt-2 flex-center-between">
              <div className="flex-align-center gap-x-3">
                <FiRepeat />
                <p>{num_of_likes}</p>
                <BiMap />
              </div>
              <p>${amount}/h</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CarCards;
