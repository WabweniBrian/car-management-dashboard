import { lineChartData, lineChartOptions } from "../../data/dummyData";
import CarStatistics from "../home/CarStatistics";

const Activity = () => {
  return (
    <div className="card">
      <CarStatistics
        chartOptions={lineChartOptions}
        chartData={lineChartData}
      />
    </div>
  );
};

export default Activity;
