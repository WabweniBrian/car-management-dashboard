import { FaListUl } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

const Filters = ({ layout, setLayout }) => {
  return (
    <div className="flex-center-between py-5 flex-col sm:flex-row gap-4">
      <div className="flex-align-center gap-3  w-full sm:w-fit">
        <select
          name=""
          id=""
          className="py-2 px-4 flex-1 border-none outline-none bg-white rounded-full dark:bg-card-dark drop-shadow-md"
        >
          <option value="new">New</option>
          <option value="second-hand">Second hand</option>
          <option value="old-model">Old Model</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 flex-1 border-none outline-none bg-white rounded-full dark:bg-card-dark drop-shadow-md"
        >
          <option value="Tesla">Tesla</option>
          <option value="Toyota">Toyota</option>
          <option value="Porsche">Porsche</option>
          <option value="Mercedes Benz">Mercedes Benz</option>
        </select>
      </div>
      <div className="flex-align-center gap-2 w-full sm:w-fit">
        <div
          className={`icon-box bg-white dark:bg-card-dark drop-shadow-md ${
            layout === "grid" && "!bg-primary text-white"
          }`}
          onClick={() => setLayout("grid")}
        >
          <FiGrid />
        </div>
        <div
          className={`icon-box bg-white dark:bg-card-dark drop-shadow-md ${
            layout === "list" && "!bg-primary text-white"
          }`}
          onClick={() => setLayout("list")}
        >
          <FaListUl />
        </div>
      </div>
    </div>
  );
};

export default Filters;
