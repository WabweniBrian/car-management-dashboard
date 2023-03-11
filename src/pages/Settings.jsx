import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import {
  Email,
  Notifications,
  Password,
  Profile,
} from "../components/settings";
import { closeDropdown, closeNotifications } from "../features/uiSlice";

const Settings = () => {
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
          <h1 className="text-xl font-semibold">Settings</h1>
          <div className="mt-5">
            {/* Settings Tabs */}
            <TabWrapper>
              <TabList>
                <Tab>Profile</Tab>
                <Tab>Password</Tab>
                <Tab>Email</Tab>
                <Tab>Notifications</Tab>
              </TabList>
              <TabPanel>
                <Profile />
              </TabPanel>
              <TabPanel>
                <Password />
              </TabPanel>
              <TabPanel>
                <Email />
              </TabPanel>
              <TabPanel>
                <Notifications />
              </TabPanel>
            </TabWrapper>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Settings;
