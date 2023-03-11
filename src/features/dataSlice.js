import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const itemInFavorites = state.favorites.find(
        (f) => f.id === action.payload.id
      );
      if (itemInFavorites) {
        state.favorites = state.favorites.filter(
          (f) => f.id !== action.payload.id
        );
      } else {
        state.favorites = [...state.favorites, action.payload];
      }
    },
  },
});

export default dataSlice.reducer;

export const dataStore = (state) => state.data;

export const { addToFavorites } = dataSlice.actions;
