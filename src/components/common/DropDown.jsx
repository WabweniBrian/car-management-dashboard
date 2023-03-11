import React from "react";
import { BiCar, BiLogOut, BiUser, BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { uiStore } from "../../features/uiSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { isDropdownOpen } = useSelector(uiStore);
  return (
    <>
      {isDropdownOpen && (
        <motion.div
          className="dropdown absolute right-0 top-full mt-1 p-2 !rounded-xl w-52 card card-shadow dark:shadow-none"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          <div className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark">
            <BiUserCircle className="text-muted" />
            <span className="text-muted">My Profile</span>
          </div>
          <div className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark">
            <BiUser className="text-muted" />
            <span className="text-muted">Manage Account</span>
          </div>
          <div className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark">
            <BiCar className="text-muted" />
            <span className="text-muted">My Cars</span>
          </div>
          <Link
            to="/login"
            className="!opacity-100 p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
          >
            <BiLogOut className="text-muted" />
            <span className="text-muted">Sign out</span>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
