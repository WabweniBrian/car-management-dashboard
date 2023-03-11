export const stats = [
  {
    id: 1,
    title: "Energy",
    percentage: 45,
    icon: "/images/icons/spike.png",
    iconBg: "#9f61f633",
    chartBg: "#A061F6",
  },
  {
    id: 2,
    title: "Range",
    percentage: 50,
    icon: "/images/icons/double-arrow.png",
    iconBg: "#ff63703c",
    chartBg: "#FF6370",
  },
  {
    id: 3,
    title: "Break Fluid",
    percentage: 9,
    icon: "/images/icons/drop.png",
    iconBg: "#4ec57a33",
    chartBg: "#4EC579",
  },
  {
    id: 4,
    title: "Tire Wear",
    percentage: 25,
    icon: "/images/icons/wheel.png",
    iconBg: "#f4cd0a41",
    chartBg: "#F4CC0A",
  },
];

export const carCards = [
  {
    id: 1,
    percentage: 64,
    name: "Mini Cooper",
    image: "/images/cars/car-4.png",
    amount: 32,
    num_of_likes: "132k",
    cardBg: "#9f61f633",
  },
  {
    id: 2,
    percentage: 74,
    name: "Porsche 911 Carrera",
    image: "/images/cars/car-2.png",
    amount: 28,
    num_of_likes: "130k",
    cardBg: "#ff63703c",
  },
  {
    id: 3,
    percentage: 64,
    name: "Porsche 911 Carrera",
    image: "/images/cars/car-1.png",
    amount: 32,
    num_of_likes: "132k",
    cardBg: "#f4cd0a41",
  },
];

export const barChartData = [
  {
    name: "Miles",
    data: [44, 55, 57, 56, 61, 58],
  },
];

export const barChartOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style: {
        colors: "#9aaeb5",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
  },
  yaxis: {
    title: {
      text: "Miles",
    },
    labels: {
      show: true,
      style: {
        colors: "#9aaeb5",
        fontSize: "14px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
};

export const lineChartData = [
  {
    name: "Performance",
    data: [50, 64, 48, 66, 49, 68],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.3,
      color: "#A061F6",
    },
  },
  colors: ["#A061F6", "#A061F6"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#A061F6",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: true,
  },
  grid: {
    show: false,
    column: {
      opacity: 0.5,
    },
  },
};

export const trackingHistoryChartData = [
  {
    name: "Km/hr",
    data: [44, 55, 57, 56, 61, 58],
  },
];

export const trackingHistoryChartOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 20,
    },
  },
  colors: ["#FF6370", "#FF6370"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style: {
        colors: "#9aaeb5",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
  },
  yaxis: {
    title: {
      text: "Km/hr",
    },
    labels: {
      show: true,
      style: {
        colors: "#9aaeb5",
        fontSize: "14px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
};

export const cars = [
  {
    id: 1,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 400,
    type: "Manual",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-1.png",
  },
  {
    id: 2,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 432,
    type: "Automatic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-2.png",
  },
  {
    id: 3,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 245,
    type: "Automatic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-3.png",
  },
  {
    id: 4,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 370,
    type: "Manual",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-4.png",
  },
  {
    id: 5,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 320,
    type: "Automatic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-5.png",
  },
  {
    id: 6,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 420,
    type: "Manual",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-6.png",
  },
  {
    id: 7,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 380,
    type: "Automatic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-7.png",
  },
  {
    id: 8,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 300,
    type: "Automatic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-8.png",
  },
  {
    id: 9,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 450,
    type: "Manual",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-9.png",
  },
  {
    id: 10,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 250,
    type: "Automatic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-10.png",
  },
  {
    id: 11,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 432,
    type: "Manual",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-11.png",
  },
  {
    id: 12,
    name: "Porsche 718 Cayman S",
    model: "Tesla Model S",
    amount: 360,
    type: "Automatic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quia minima vel excepturi labore earum amet veniam? Iure rem laboriosam facere laborum distinctio at quos corporis temporibus non qui!",
    image: "/images/cars/car-12.png",
  },
];

export const userMessages = [
  {
    id: 1,
    name: "Wabz Braize",
    online: true,
    unread_messages: 2,
    last_message: null,
    avatar: "/images/avatar.png",
  },
  {
    id: 2,
    name: "John Doe",
    online: false,
    unread_messages: 0,
    last_message: "Wow really cool 🔥🔥",
    avatar: "/images/avatar-1.png",
  },
  {
    id: 3,
    name: "Raven Kent",
    online: false,
    unread_messages: 0,
    last_message: "Hello! everyone",
    avatar: "/images/avatar-2.png",
  },
  {
    id: 4,
    name: "Ethan Hunt",
    online: false,
    unread_messages: 0,
    last_message: "nice 👍👍",
    avatar: "/images/avatar-3.png",
  },
  {
    id: 5,
    name: "catherine Pierce",
    online: true,
    unread_messages: 2,
    last_message: "Awesome 🔥",
    avatar: "/images/avatar-4.png",
  },
  {
    id: 6,
    name: "John Smith",
    online: true,
    unread_messages: 0,
    last_message: "publish now",
    avatar: "/images/avatar-5.png",
  },
];

export const availableSensors = [
  {
    id: 1,
    name: "Asset - Fuel Consumed (Ltr)",
    completed: true,
  },
  {
    id: 2,
    name: "Asset - Odometer (km)",
    completed: false,
  },
  {
    id: 3,
    name: "Asset - Runtime (km)",
    completed: false,
  },
  {
    id: 4,
    name: "Asset - Speed (hr)",
    completed: false,
  },
  {
    id: 5,
    name: "Engine Temperature (deg oC)",
    completed: false,
  },
];

export const stations = [
  {
    id: 1,
    name: "A1",
    status: "ready",
  },
  {
    id: 2,
    name: "A1",
    status: "ready",
  },
  {
    id: 1,
    name: "A2",
    status: "ready",
  },
  {
    id: 3,
    name: "A3",
    status: "ready",
  },
  {
    id: 4,
    name: "A4",
    status: "booked",
  },
  {
    id: 5,
    name: "A5",
    status: "ready",
  },
  {
    id: 6,
    name: "A6",
    status: "ready",
  },
  {
    id: 7,
    name: "A7",
    status: "ready",
  },
  {
    id: 8,
    name: "A8",
    status: "ready",
  },
  {
    id: 9,
    name: "A9",
    status: "ready",
  },
  {
    id: 10,
    name: "A10",
    status: "booked",
  },
  {
    id: 11,
    name: "B1",
    status: "booked",
  },
  {
    id: 12,
    name: "B2",
    status: "ready",
  },
  {
    id: 13,
    name: "B3",
    status: "ready",
  },
  {
    id: 14,
    name: "B4",
    status: "ready",
  },
  {
    id: 15,
    name: "B5",
    status: "ready",
  },
  {
    id: 16,
    name: "B6",
    status: "ready",
  },
  {
    id: 17,
    name: "B7",
    status: "booked",
  },
  {
    id: 18,
    name: "B8",
    status: "ready",
  },
  {
    id: 19,
    name: "B9",
    status: "current",
  },
  {
    id: 20,
    name: "B10",
    status: "ready",
  },
];

export const services = [
  {
    id: 1,
    name: "Brake fluid change",
    amount: 32,
    status_color: "bg-secondaryGreen",
  },
  {
    id: 1,
    name: "Diagnostics",
    amount: 16,
    status_color: "bg-secondaryRed",
  },
  {
    id: 1,
    name: "External washing",
    amount: 10,
    status_color: "bg-primary",
  },
];

export const features = [
  {
    id: 1,
    name: "Oil Level",
    part: "Engine",
    comment: "Don't Replace",
    percentage: "w-[80%]",
    bgColor: "bg-primary",
    image: "/images/oil-level.png",
  },
  {
    id: 2,
    name: "Brake Pads",
    part: "Wheels",
    comment: "Don't Replace",
    percentage: "w-[40%]",
    bgColor: "bg-secondaryGreen",
    image: "/images/break-pads.png",
  },
  {
    id: 3,
    name: "Steering",
    part: "Engine",
    comment: "Don't Replace",
    percentage: "w-[20%]",
    bgColor: "bg-secondaryYellow",
    image: "/images/steering.png",
  },
  {
    id: 4,
    name: "Oil Level",
    part: "Engine",
    comment: "Don't Replace",
    percentage: "w-[70%]",
    bgColor: "bg-secondaryRed",
    image: "/images/oil-level-2.png",
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: "Explosion of Betelgeuse Star",
    Location: "Space Center USA",
    StartTime: "2021-01-10T04:00:00.000Z",
    EndTime: "2021-01-10T05:30:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Thule Air Crash Report",
    Location: "Newyork City",
    StartTime: "2021-01-11T06:30:00.000Z",
    EndTime: "2021-01-11T08:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 3,
    Subject: "Blue Moon Eclipse",
    Location: "Space Center USA",
    StartTime: "2021-01-12T04:00:00.000Z",
    EndTime: "2021-01-12T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Meteor Showers in 2021",
    Location: "Space Center USA",
    StartTime: "2021-01-13T07:30:00.000Z",
    EndTime: "2021-01-13T09:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Milky Way as Melting pot",
    Location: "Space Center USA",
    StartTime: "2021-01-14T06:30:00.000Z",
    EndTime: "2021-01-14T08:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 6,
    Subject: "Mysteries of Bermuda Triangle",
    Location: "Bermuda",
    StartTime: "2021-01-14T04:00:00.000Z",
    EndTime: "2021-01-14T05:30:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 7,
    Subject: "Glaciers and Snowflakes",
    Location: "Himalayas",
    StartTime: "2021-01-15T05:30:00.000Z",
    EndTime: "2021-01-15T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 8,
    Subject: "Life on Mars",
    Location: "Space Center USA",
    StartTime: "2021-01-16T03:30:00.000Z",
    EndTime: "2021-01-16T04:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 9,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-18T05:30:00.000Z",
    EndTime: "2021-01-18T07:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 10,
    Subject: "Wildlife Galleries",
    Location: "Africa",
    StartTime: "2021-01-20T05:30:00.000Z",
    EndTime: "2021-01-20T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 11,
    Subject: "Best Photography 2021",
    Location: "London",
    StartTime: "2021-01-21T04:00:00.000Z",
    EndTime: "2021-01-21T05:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 12,
    Subject: "Smarter Puppies",
    Location: "Sweden",
    StartTime: "2021-01-08T04:30:00.000Z",
    EndTime: "2021-01-08T06:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 13,
    Subject: "Myths of Andromeda Galaxy",
    Location: "Space Center USA",
    StartTime: "2021-01-06T05:00:00.000Z",
    EndTime: "2021-01-06T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 14,
    Subject: "Aliens vs Humans",
    Location: "Research Center of USA",
    StartTime: "2021-01-05T04:30:00.000Z",
    EndTime: "2021-01-05T06:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 15,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-19T04:00:00.000Z",
    EndTime: "2021-01-19T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 16,
    Subject: "Sky Gazers",
    Location: "Alaska",
    StartTime: "2021-01-22T05:30:00.000Z",
    EndTime: "2021-01-22T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 17,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-11T00:00:00.000Z",
    EndTime: "2021-01-11T02:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 18,
    Subject: "Space Galaxies and Planets",
    Location: "Space Center USA",
    StartTime: "2021-01-11T11:30:00.000Z",
    EndTime: "2021-01-11T13:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 19,
    Subject: "Lifecycle of Bumblebee",
    Location: "San Fransisco",
    StartTime: "2021-01-14T00:30:00.000Z",
    EndTime: "2021-01-14T02:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 20,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-14T10:30:00.000Z",
    EndTime: "2021-01-14T12:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 21,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-10T08:30:00.000Z",
    EndTime: "2021-01-10T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 22,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-12T09:00:00.000Z",
    EndTime: "2021-01-12T10:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 23,
    Subject: "Sky Gazers",
    Location: "Greenland",
    StartTime: "2021-01-15T09:00:00.000Z",
    EndTime: "2021-01-15T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 24,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-16T07:00:00.000Z",
    EndTime: "2021-01-16T09:00:00.000Z",
    CategoryColor: "#7fa900",
  },
];
