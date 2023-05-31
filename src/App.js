import { useEffect, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Loader from "./components/common/Loader";

import {
  Dashboard,
  Assets,
  Booking,
  SellCars,
  BuyCars,
  Services,
  Calendar,
  Messages,
  Settings,
  Login,
  Register,
  PageNotFound,
} from "./pages";
function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <>
      {showLoader && <Loader />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/sell" element={<SellCars />} />
        <Route path="/buy" element={<BuyCars />} />
        <Route path="/services" element={<Services />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <BackToTopButton showButton={showButton} />
    </>
  );
}

export default App;
