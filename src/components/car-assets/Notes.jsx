import { FiInfo, FiMessageCircle, FiTool } from "react-icons/fi";

const Notes = () => {
  return (
    <div className="card">
      <div className="flex gap-3">
        <div className="icon-box !w-12 !h-12 shadow-lg card-bordered">
          <FiMessageCircle />
        </div>
        <div>
          <h1 className="font-semibold">Monday, 6th April 2022</h1>
          <p className="text-sm">Book for General Service</p>
          <span className="text-sm px-3 py-[3px] rounded bg-secondaryGreen text-white uppercase">
            completed
          </span>
        </div>
      </div>

      <div className="flex gap-3 mt-3">
        <div className="icon-box !w-12 !h-12 shadow-lg card-bordered">
          <FiInfo className="text-secondaryRed" />
        </div>
        <div>
          <h1 className="font-semibold">Thur, 6th October 2022</h1>
          <p className="text-sm">Vehicle LV 001 has been marked for recall</p>
          <span className="text-sm px-3 py-[3px] rounded bg-slate-100 dark:bg-dark-light">
            completed
          </span>
        </div>
      </div>

      <div className="flex gap-3 mt-3">
        <div className="icon-box !w-12 !h-12 shadow-lg card-bordered">
          <FiTool />
        </div>
        <div>
          <h1 className="font-semibold">Monday, 6th August 2021</h1>
          <p className="text-sm">Maintenance Completed, Collect</p>
          <span className="text-sm px-3 py-[3px] rounded bg-slate-100 dark:bg-dark-light">
            completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notes;
