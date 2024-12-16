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
