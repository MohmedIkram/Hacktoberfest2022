import { configureStore } from "@reduxjs/toolkit";
import planetSlice from "./planetSlice";

const store = configureStore({
    reducer: {
        planet: planetSlice.reducer,
    }
});

export default store;