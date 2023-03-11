import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FiMoreVertical, FiPhone, FiVideo } from "react-icons/fi";
import { useDispatch } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import {
  AllMessages,
  MessageChats,
  MessageInput,
  Pinned,
} from "../components/messages";
import { closeDropdown, closeNotifications } from "../features/uiSlice";

const Messages = () => {
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
          <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="md:col-span-1">
              <div className="input-with-icon">
                <BiSearchAlt />
                <input
                  type="text"
                  placeholder="Search.."
                  className="dark:!bg-dark-light"
                />
              </div>
              <div className="h-[80vh] overflow-auto mt-4">
                <Pinned />
                <AllMessages />
              </div>
            </div>
            <div className="md:col-span-2 border rounded-lg dark:border-dark">
              <div className="p-4 flex-center-between border-b dark:border-b-dark">
                <div className="flex-align-center gap-x-2">
                  <div className="avatar">
                    <img
                      src="/images/avatar.png"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold">Wabz Braize</h1>
                    <p className="text-sm">Active Now</p>
                  </div>
                </div>
                <div className="flex-align-center gap-x-2">
                  <div className="icon-box bg-slate-100 dark:bg-dark-light">
                    <FiVideo />
                  </div>
                  <div className="icon-box bg-slate-100 dark:bg-dark-light">
                    <FiPhone />
                  </div>
                  <div className="icon-box bg-slate-100 dark:bg-dark-light">
                    <FiMoreVertical />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <MessageChats />
                <MessageInput />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Messages;
