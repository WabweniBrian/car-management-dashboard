import Chart from "react-apexcharts";
import {
  trackingHistoryChartData,
  trackingHistoryChartOptions,
} from "../../data/dummyData";

const TrackingHistory = () => {
  return (
    <div className="card">
      <h1 className="text-lg font-semibold">Tracking History</h1>
      <div className="mt-5">
        <Chart
          options={trackingHistoryChartOptions}
          series={trackingHistoryChartData}
          type="bar"
          width="100%"
          height="250"
        />
      </div>
    </div>
  );
};

export default TrackingHistory;
