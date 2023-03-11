import React from "react";
import { useDispatch } from "react-redux";
import { ScheduleCalendar, Upcoming } from "../components/calendar";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { closeDropdown, closeNotifications } from "../features/uiSlice";

const Calendar = () => {
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
          <h1 className="text-xl font-semibold">Calendar</h1>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <ScheduleCalendar />
              <Upcoming />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold">Scheduler</h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
