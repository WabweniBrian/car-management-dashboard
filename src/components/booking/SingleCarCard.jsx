import { FiHeart, FiRepeat, FiUser } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, dataStore } from "../../features/dataSlice";

const SingleCarCard = ({
  id,
  name,
  model,
  amount,
  type,
  image,
  description,
}) => {
  const { favorites } = useSelector(dataStore);
  const dispatch = useDispatch();

  let ids = [...new Set(favorites.map((fav) => fav.id))];
  let heartIcon = ids.includes(id) ? true : false;

  return (
    <div className="card group">
      <div className="flex-center-between">
        <h1 className="font-semibold">{name}</h1>
        <div
          className="sm:cursor-pointer"
          onClick={() =>
            dispatch(
              addToFavorites({
                id,
                name,
                model,
                amount,
                type,
                image,
                description,
              })
            )
          }
        >
          {heartIcon ? <FaHeart className="text-red-500" /> : <FiHeart />}
        </div>
      </div>
      <p>{model}</p>
      <img
        src={image}
        alt={name}
        className="w-40 h-40 mx-auto group-hover:scale-125 transition-a sm:cursor-pointer object-contain"
      />
      <div className="mt-2 flex-center-between">
        <div className="flex-align-center gap-x-3">
          <div className="flex-align-center gap-x-2">
            <FiUser className="text-primary" />
            <p>4</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <FiRepeat className="text-primary" />
            <p>{type}</p>
          </div>
        </div>
        <h1>
          <span className="text-xl font-semibold">${amount}</span>
          <span className="text-muted text-sm">/d</span>
        </h1>
      </div>
    </div>
  );
};

export default SingleCarCard;
