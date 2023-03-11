import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CarsList, Filters } from "../components/booking";
import CarListFullWidth from "../components/booking/CarListFullWidth";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { closeDropdown, closeNotifications } from "../features/uiSlice";

const Booking = () => {
  const [layout, setLayout] = useState("grid");
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
          <h1 className="text-xl font-semibold">Booking</h1>
          <div className="mt-5">
            <Filters layout={layout} setLayout={setLayout} />
            {layout === "grid" ? <CarsList /> : <CarListFullWidth />}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Booking;
