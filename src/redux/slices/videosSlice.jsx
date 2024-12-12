import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVideos } from "../../api";

export const fetchVideosThunk = createAsyncThunk(
  "videos/fetchVideos",
  async (objectRequest, { rejectWithValue }) => {
    try {
      const { videos, totalResults } = await fetchVideos(objectRequest);
      return { videos, totalResults };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    items: [],
    totalResults: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVideosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.videos;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchVideosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Ошибка загрузки видео.";
      });
  },
});

export default videosSlice.reducer;
