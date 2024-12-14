import { createSelector } from "reselect";


const favouritesSelector = (state) => state.favourites;

export const selectFavourites = createSelector(
  [favouritesSelector],
  (favourites) => favourites.items
);

export const selectEditRequest = createSelector(
  [favouritesSelector],
  (favourites) => favourites.editRequest
);



const isModalOpenSelector = (state) => state.isModalOpen;

export const selectIsModalOpen = createSelector(
  [isModalOpenSelector],
  (isModalOpen) => isModalOpen.value
);



const requestSelector = (state) => state.request;

export const selectRequest = createSelector(
  [requestSelector],
  (request) => request.value
);



const searchSelector = (state) => state.search;

export const selectSearch = createSelector(
  [searchSelector],
  (search) => search.value
);



const sliderValueSelector = (state) => state.sliderValue;

export const selectSliderValue = createSelector(
  [sliderValueSelector],
  (sliderValue) => sliderValue.value
);



const staticRequestSelector = (state) => state.staticRequest;

export const selectStaticRequest = createSelector(
  [staticRequestSelector],
  (staticRequest) => staticRequest.value
);



const videosSelector = (state) => state.videos;

export const selectVideos = createSelector(
  [videosSelector],
  (videos) => videos.items
);

export const selectTotalResults = createSelector(
  [videosSelector],
  (videos) => videos.totalResults
);

export const selectIsLoading = createSelector(
  [videosSelector],
  (videos) => videos.isLoading
);

export const selectError = createSelector(
  [videosSelector],
  (videos) => videos.error
);



const viewModeSelector = (state) => state.viewMode;

export const selectViewMode = createSelector(
  [viewModeSelector],
  (viewMode) => viewMode.value
);

