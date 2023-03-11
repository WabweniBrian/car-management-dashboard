/* eslint-disable react-hooks/exhaustive-deps */

import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data/links";
import { closeSidebar, uiStore } from "../../features/uiSlice";

const Sidebar = () => {
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("modal")) dispatch(closeSidebar());
  };

  return (
    <div
      className={`modal ${isSidebarOpen && "open"}`}
      onClick={handleCloseSidebar}
    >
      <div className={`dialog ${isSidebarOpen && "open"}`}>
        <div className="pt-3 pb-2 border-b flex-center-between dark:border-dark lg:hidden">
          <p className="uppercase">menu</p>
          <div
            className="icon-box lg:hidden"
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </div>
        </div>
        {/* Logo */}
        <Link to="/" className="p-2 hidden lg:block !opacity-100">
          <img
            src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
            alt="logo"
            className="w-28"
          />
        </Link>
        <div className="mt-5">
          {links.map(({ id, title, icon, url }) => (
            <NavLink
              to={url}
              key={id}
              end
              className="px-2 py-2 my-3 flex-align-center gap-x-3"
              onClick={() => dispatch(closeSidebar())}
            >
              {icon}
              <span>{title}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
