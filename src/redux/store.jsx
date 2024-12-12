import { configureStore } from "@reduxjs/toolkit";
import requestReducer from "./slices/requestSlice";
import videosReducer from "./slices/videosSlice";
import viewModeReducer from "./slices/viewModeSlice";
import searchReducer from "./slices/searchSlice";
import favouritesReducer from "./slices/favouritesSlice";
import isModalOpenReducer from "./slices/isModalOpenSlice";
import sliderValueReducer from "./slices/sliderValueSlice";
import staticRequestReducer from "./slices/staticRequestSlice";

const store = configureStore({
  reducer: {
    request: requestReducer,
    videos: videosReducer,
    viewMode: viewModeReducer,
    search: searchReducer,
    favourites: favouritesReducer,
    isModalOpen: isModalOpenReducer,
    sliderValue: sliderValueReducer,
    staticRequest: staticRequestReducer,
  },
});

export default store;
