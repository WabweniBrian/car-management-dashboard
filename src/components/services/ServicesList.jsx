import { services } from "../../data/dummyData";

const ServicesList = () => {
  return (
    <div>
      {services.map(({ id, name, amount, status_color }) => (
        <div className="card flex-center-between mb-3" key={id}>
          <div className="flex-align-center gap-x-2">
            <div
              className={`flex-shrink-0 w-4 h-4 ${status_color}  rounded-full`}
            />
            <p className="capitalize">{name}</p>
          </div>
          <span className="px-2 py-[2px] bg-primary/20 text-primary rounded">
            ${amount}
          </span>
        </div>
      ))}
      <button className="btn w-full mt-3 bg-primary/20">add service</button>
    </div>
  );
};

export default ServicesList;
