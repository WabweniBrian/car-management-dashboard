import React from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { Featured, Offers, TrackingHistory } from "../components/sell";
import { closeDropdown, closeNotifications } from "../features/uiSlice";

const SellCars = () => {
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
          <h1 className="text-xl font-semibold">Sell Cars</h1>
          <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-full">
                <Featured />
              </div>
              <div>
                <TrackingHistory />
              </div>
            </div>

            <Offers />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SellCars;
