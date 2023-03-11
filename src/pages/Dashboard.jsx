import { useDispatch } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import {
  CarCards,
  CarStatistics,
  MilesStatistics,
  Stats,
} from "../components/home";
import { lineChartData, lineChartOptions } from "../data/dummyData";
import { closeDropdown, closeNotifications } from "../features/uiSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleCloseDropdown = () => {
    dispatch(closeDropdown());
    dispatch(closeNotifications());
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-16-auto">
      <div onClick={handleCloseDropdown}>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <div
          className="min-h-screen px-4 pt-20 pb-6 lg:px-6"
          onClick={handleCloseDropdown}
        >
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="mt-5">
            <Stats />
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card">
                <MilesStatistics />
              </div>
              <div className="card">
                <CarStatistics
                  chartOptions={lineChartOptions}
                  chartData={lineChartData}
                />
              </div>
            </div>
            <CarCards />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
