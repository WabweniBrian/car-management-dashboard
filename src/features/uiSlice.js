import { createSlice } from "@reduxjs/toolkit";

const mode = JSON.parse(localStorage.getItem("Motiv-theme-mode")) || false;

const initialState = {
  isDropdownOpen: false,
  isNotificationsOpen: false,
  isSidebarOpen: false,
  darkMode: mode,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openDropdown: (state) => {
      state.isDropdownOpen = true;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
    openNotifications: (state) => {
      state.isNotificationsOpen = true;
    },
    closeNotifications: (state) => {
      state.isNotificationsOpen = false;
    },
    toggleNotifications: (state) => {
      state.isNotificationsOpen = !state.isNotificationsOpen;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export default uiSlice.reducer;

export const uiStore = (state) => state.ui;

export const {
  openDropdown,
  closeDropdown,
  toggleDropdown,
  openNotifications,
  closeNotifications,
  toggleNotifications,
  openSidebar,
  closeSidebar,
  toggleSidebar,
  toggleDarkMode,
} = uiSlice.actions;
