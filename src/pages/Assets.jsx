import { useDispatch } from "react-redux";
import {
  Activity,
  AvailableSensors,
  CarDetails,
  Notes,
  Reminder,
} from "../components/car-assets";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { closeDropdown, closeNotifications } from "../features/uiSlice";

const Assets = () => {
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
          <h1 className="text-xl font-semibold">Assets</h1>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <CarDetails />
            </div>
            <div className="md:col-span-2">
              <Activity />
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Notes />
                </div>
                <div>
                  <AvailableSensors />
                </div>
              </div>
            </div>
          </div>
          <Reminder />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Assets;
