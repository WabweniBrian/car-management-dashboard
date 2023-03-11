import {
  BiBookBookmark,
  BiCalendar,
  BiCar,
  BiCog,
  BiMessageDots,
  BiShoppingBag,
  BiTagAlt,
} from "react-icons/bi";
import { FiGrid, FiShoppingCart } from "react-icons/fi";

export const links = [
  {
    id: 1,
    title: "Dashboad",
    icon: <FiGrid />,
    url: "/",
  },
  {
    id: 2,
    title: "Assets",
    icon: <BiCar />,
    url: "/assets",
  },
  {
    id: 3,
    title: "Booking",
    icon: <BiBookBookmark />,
    url: "/booking",
  },
  {
    id: 4,
    title: "Sell Cars",
    icon: <BiShoppingBag />,
    url: "/sell",
  },
  {
    id: 5,
    title: "Buy Cars",
    icon: <FiShoppingCart />,
    url: "/buy",
  },
  {
    id: 6,
    title: "Services",
    icon: <BiTagAlt />,
    url: "/services",
  },
  {
    id: 7,
    title: "Calendar",
    icon: <BiCalendar />,
    url: "/calendar",
  },
  {
    id: 8,
    title: "Messages",
    icon: <BiMessageDots />,
    url: "/messages",
  },
  {
    id: 9,
    title: "Settings",
    icon: <BiCog />,
    url: "/settings",
  },
];
