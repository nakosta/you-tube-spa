import axios from "axios";
import { defaultMaxResults } from "./utils/utils.jsx";

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
    console.error("Registration error:", error.response?.data || error.message);
    throw new Error(error.response?.data.message || "Registration failed");
  }
}

export async function login(emailPassword) {
  try {
    const { data } = await apiClient.post("/auth/login", emailPassword);
    return data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error(error.response?.data.message || "Login failed");
  }
}

export async function fetchVideos({query, maxResults, order}) {
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

    console.log(data);

    const videoIds = data.items.map((item) => item.id.videoId).join(",");

    const videoDetails = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,statistics",
        id: videoIds,
        key: API_KEY,
      },
    });

    console.log(videoDetails.data.items);
    
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
    console.error("Fetch videos error:", error.message);
    throw new Error("Failed to fetch videos.");
  }
}


// "id": 723,
// "username": "nakosta666",
// "email": "nakosta666@mail.ru",
// "password": "Qwerty12345$",
// "gender": "male",
// "age": 27

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ha29zdGE2NjZAbWFpbC5ydSIsImlkIjo3MjMsImlhdCI6MTcxNzEzMTA4MX0.kly-kubaJsGpD6-rfWob5SMZiBGUx9IjCdqVa5bi1Mc"

// API-ключ из Google - AIzaSyBONMMGfs_icZgSJxpor51OoB6DElEwZ4w

// 2 API-ключ из Google - AIzaSyAc4i5q8QZCHW1PODzyff05F03H_xS9UzQ

// API-ключ из Google Кости - AIzaSyBRbw7E44FNOaUi4VGBizBk6MnmpS8F4Bo
