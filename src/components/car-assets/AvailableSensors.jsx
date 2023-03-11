import { BiCaretDown, BiLineChart } from "react-icons/bi";
import { availableSensors } from "../../data/dummyData";

const AvailableSensors = () => {
  return (
    <div className="card">
      <div className="flex-center-between  pb-3 border-b dark:border-b-dark">
        <h1 className="text-xl font-semibold">Available Sensors</h1>
        <div className="flex-align-center gap-x-2">
          <p>Assets</p>
          <BiCaretDown />
        </div>
      </div>
      <div className="mt-4">
        {availableSensors.map(({ id, name, completed }) => (
          <div key={id} className="flex-center-between gap-2 mb-3">
            <div className="input-check">
              <input type="checkbox" name="" id={id} />
              <label
                htmlFor={id}
                className={`${completed && "!text-secondaryRed"}`}
              >
                {name}
              </label>
            </div>
            <BiLineChart
              className={`text-3xl ${completed && "text-secondaryRed"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableSensors;
