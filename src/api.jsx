import axios from "axios";
import { defaultMaxResults, errors } from "./utils/utils.jsx";

const token = localStorage.getItem("authToken");

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function registration(order) {
  try {
    const { data } = await apiClient.post("/users/register", order);
    return data;
  } catch (error) {
    console.error(
      `${errors.registration}:`,
      error.response?.data || error.message
    );
    throw new Error(error.response?.data.message || errors.registration);
  }
}

export async function login(emailPassword) {
  try {
    const { data } = await apiClient.post("/auth/login", emailPassword);
    return data;
  } catch (error) {
    console.error(`${errors.login}:`, error.response?.data || error.message);
    throw new Error(error.response?.data.message || errors.login);
  }
}

export async function fetchVideos({ query, maxResults, order }) {
  try {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const BASE_URL = import.meta.env.VITE_YOUTUBE_URL;
    const { data } = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        type: "video",
        q: query,
        maxResults: maxResults || defaultMaxResults,
        order: order || null,
        key: API_KEY,
      },
    });

    const videoIds = data.items.map((item) => item.id.videoId).join(",");

    const videoDetails = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,statistics",
        id: videoIds,
        key: API_KEY,
      },
    });

    return {
      videos: videoDetails.data.items.map((item) => ({
        id: item.id,
        title: item.snippet.title,
        thumbnailMedium: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
        viewCount: item.statistics.viewCount,
        publishedAt: item.snippet.publishedAt,
      })),
      totalResults: data.pageInfo.totalResults,
    };
  } catch (error) {
    console.error(`${errors.fetchVideos}:`, error.message);
    throw new Error(errors.fetchVideos);
  }
}
