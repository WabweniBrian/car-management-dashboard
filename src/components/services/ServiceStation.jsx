import { stations } from "../../data/dummyData";

const ServiceStation = () => {
  const getColor = (status) => {
    if (status === "ready") return { color: "inherit", background: "#fff" };
    else if (status === "booked")
      return { color: "#fff", background: "#FF6370" };
    else return { color: "#fff", background: "#A061F6" };
  };
  return (
    <div className="mt-2">
      <div className="flex-align-center gap-2 sm:cursor-pointer flex-wrap">
        {stations.map(({ id, name, status }) => (
          <div
            className={`w-12 h-14 flex-center-center drop-shadow-md rounded ${
              status === "ready" && "dark:!bg-card-dark"
            }`}
            key={id}
            style={{ ...getColor(status) }}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="flex-align-center flex-wrap gap-4 mt-5">
        <div className="flex-align-center gap-x-2">
          <div className="w-4 h-4 bg-white dark:bg-card-dark rounded-full border dark:border-dark-light"></div>
          <p>Ready</p>
        </div>
        <div className="flex-align-center gap-x-2">
          <div className="w-4 h-4 bg-secondaryRed  rounded-full"></div>
          <p>Booked</p>
        </div>
        <div className="flex-align-center gap-x-2">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
          <p>Current station</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceStation;
