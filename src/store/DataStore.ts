import { configureStore } from "@reduxjs/toolkit";
import contenderVarSlice from "./DataSlides/ContenderVarSlide";
import eventpageSlide from "./DataSlides/EventPageStatesSlide";
import categorypageSlide from "./DataSlides/CategoryPageStatesSlide";
import contenderpageSlide from "./DataSlides/ContenderPageStatesSlide";

const store = configureStore({
  reducer: {
    contenderVariables: contenderVarSlice,
    eventpage: eventpageSlide,
    categorypage: categorypageSlide,
    contenderpage: contenderpageSlide,
  },
});

export default store;
