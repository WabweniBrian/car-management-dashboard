import React from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import {
  Features,
  Order,
  ServiceRequired,
  ServiceSchedule,
  ServicesList,
  ServiceStation,
} from "../components/services";
import { closeDropdown, closeNotifications } from "../features/uiSlice";

const Services = () => {
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
          <h1 className="text-xl font-semibold">Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <ServiceStation />
              <div className="grid grid-cols-1  md:grid-cols-3 mt-5 gap-3">
                <div className="md:col-span-1">
                  <Order />
                </div>
                <div className="md:col-span-2">
                  <ServicesList />
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <ServiceRequired />
              <ServiceSchedule />
            </div>
          </div>
          <Features />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
