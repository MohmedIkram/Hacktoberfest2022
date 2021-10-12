import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import PlanetData from "../data/planets";

const planetSlice = createSlice({
  name: "planets",
  initialState: {
    data: PlanetData,
    hamburger: false,
    overview: {},
    curState: "",
  },
  reducers: {
    showMenuItems: (state, action) => {
      state.hamburger = !state.hamburger;
    },
    changeOverview: (state, action) => {
      const { planet, type } = action.payload;
      state.curState = type;
      if (type === "structure") {
        state.overview = planet.structure;
      } else if (type === "geology") {
        state.overview = planet.geology;
      } else {
        state.overview = planet.overview;
      }
    },
  },
});

export const planetAction = planetSlice.actions;

export default planetSlice;
