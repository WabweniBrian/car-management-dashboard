/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { BiBell, BiChevronDown, BiMenu } from "react-icons/bi";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeNotifications,
  openSidebar,
  toggleDarkMode,
  toggleDropdown,
  toggleNotifications,
} from "../../features/uiSlice";
import Dropdown from "./DropDown";
import Notifications from "./Notifications";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { uiStore } from "../../features/uiSlice";
import { useEffect } from "react";

const Navbar = () => {
  const rootDoc = document.querySelector(":root");
  const { darkMode } = useSelector(uiStore);
  const dispatch = useDispatch();

  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch(closeDropdown());
    }
    if (!e.target.classList.contains("notification-btn")) {
      dispatch(closeNotifications());
    }
  };

  // Store darkmode value to localStorage;
  useEffect(() => {
    if (darkMode) rootDoc.classList.add("dark");
    else rootDoc.classList.remove("dark");
    localStorage.setItem("Motiv-theme-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      className="fixed z-10 px-3 py-2 bg-white navbar lg:px-6 dark:bg-card-dark"
      style={{ width: "calc(100vw - 250px)" }}
      onClick={handleClose}
    >
      <div className="flex-center-between">
        <div className="gap-1 flex-align-center md:gap-3">
          <Link to="/" className="p-2 lg:hidden flex-shrink-0 !opacity-100">
            <img src="/mobile-logo.png" alt="logo" className="w-8" />
          </Link>
          <div
            className="icon-box lg:hidden"
            onClick={() => dispatch(openSidebar())}
          >
            <BiMenu className="text-lg" />
          </div>
          <SearchBar />
        </div>

        <div className="flex-align-center gap-x-3 md:gap-x-1">
          {/* ---------------------------------Theme toggle------------------------------ */}
          <div
            className="icon-box bg-slate-100 dark:bg-[#2b2b35]"
            onClick={() => dispatch(toggleDarkMode())}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </div>
          <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-700"></div>
          {/*---------------------- Notifications toggle------------------------------------------------ */}
          <div
            className="icon-box !opacity-100 relative notification-btn"
            onClick={() => dispatch(toggleNotifications())}
          >
            <div className="relative">
              <BiBell className="notification-btn text-muted" />
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary notification-btn"></div>
            </div>
            <Notifications />
          </div>
          {/*------------------------------- Profile Dropdown toggle-------------------------------------------- */}
          <div className="relative flex-shrink-0 space-x-1 flex-align-center md:pl-4">
            <div
              className="absolute top-0 left-0 w-full h-full dropdown-btn sm:cursor-pointer"
              onClick={() => dispatch(toggleDropdown())}
            ></div>
            <motion.img
              src="/images/avatar.png"
              alt=""
              className="w-8 h-8 rounded-full dropdown-btn"
              whileTap={{ scale: 0.5 }}
            />
            <BiChevronDown className="dropdown-btn" />
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
