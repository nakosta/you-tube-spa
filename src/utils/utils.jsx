import moment from "moment/min/moment-with-locales";

export const formatViews = (views) => {
  if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1)}M просмотров`;
  } else if (views >= 1_000) {
    return `${(views / 1_000).toFixed(1)}K просмотров`;
  }
  return `${views} просмотров`;
};

export const timeSince = (date) => moment(date).locale("ru").fromNow();

export const defaultMaxResults = 12;

export const errors = {
  registration: "Ошибка при регистрации",
  login: "Ошибка входа",
  fetchVideos: "Ошибка при получении видео",
  loadLocalStorage: "Не удалось загрузить favourites из localStorage:",
  saveLocalStorage: "Не удалось сохранить favourites в localStorage:",
};
