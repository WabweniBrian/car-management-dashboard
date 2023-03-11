import Chart from "react-apexcharts";
import { barChartData, barChartOptions } from "../../data/dummyData";
const MilesStatistics = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Mile Statistics</h1>
      <div className="mt-5">
        <Chart
          options={barChartOptions}
          series={barChartData}
          type="bar"
          width="100%"
          height="250"
        />
      </div>
    </div>
  );
};

export default MilesStatistics;
