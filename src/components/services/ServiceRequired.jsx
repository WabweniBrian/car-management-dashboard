import { GiPerson, GiTruck, GiWomanElfFace } from "react-icons/gi";

const ServiceRequired = () => {
  return (
    <div className="card">
      <h1 className="text-xl font-semibold">Service Required</h1>
      <div className="mt-2">
        <div className="flex-align-center gap-2">
          <div className="icon-box !bg-secondaryGreen/20 text-secondaryGreen relative before:absolute before:h-full before:w-[3px] before:bg-secondaryGreen before:left-4 before:top-full before:mt-2">
            <GiPerson />
          </div>
          <div>
            <h1 className="font-semibold">Center Care</h1>
            <div className="flex-align-center gap-3">
              <p className="text-sm">Price: $48</p>
              <div className="w-[1px] h-5 bg-slate-300 dark:bg-dark-light"></div>
              <p className="text-sm">Processing: 1 hour</p>
            </div>
          </div>
        </div>

        <div className="flex-align-center gap-2 mt-10">
          <div className="icon-box !bg-primary/20 text-primary  relative before:absolute before:h-full before:w-[3px] before:bg-primary before:left-4 before:top-full before:mt-2">
            <GiWomanElfFace />
          </div>
          <div>
            <h1 className="font-semibold">Diagnostics</h1>
            <div className="flex-align-center gap-3">
              <p className="text-sm">Price: $78</p>
              <div className="w-[1px] h-5 bg-slate-300 dark:bg-dark-light"></div>
              <p className="text-sm">Processing: 2 hour</p>
            </div>
          </div>
        </div>

        <div className="flex-align-center gap-2 mt-10">
          <div className="icon-box !bg-secondaryRed/20 text-secondaryRed">
            <GiTruck />
          </div>
          <div>
            <h1 className="font-semibold">Inner Cleaning</h1>
            <div className="flex-align-center gap-3">
              <p className="text-sm">Price: $26</p>
              <div className="w-[1px] h-5 bg-slate-300 dark:bg-dark-light"></div>
              <p className="text-sm">Processing: 1 hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequired;
