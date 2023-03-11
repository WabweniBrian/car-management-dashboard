import { stats } from "../../data/dummyData";
import GaugeChart from "./GaugeChart";
const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(({ id, title, percentage, icon, iconBg, chartBg }) => (
        <div className="card text-center" key={id}>
          <div className="icon-box mx-auto" style={{ backgroundColor: iconBg }}>
            <img src={icon} alt="" width={15} />
          </div>
          <h1 className="mt-2 font-semibold">{title}</h1>
          <div className="mt-8">
            <GaugeChart percentage={percentage} chartBg={chartBg} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
