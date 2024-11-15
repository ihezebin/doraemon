import dayjs from 'dayjs';

export var getTimePeriod = function getTimePeriod(hour) {
  if (hour >= 0 && hour < 6) {
    return '凌晨';
  } else if (hour >= 6 && hour < 12) {
    return '早上';
  } else if (hour === 12) {
    return '中午';
  } else if (hour >= 13 && hour < 18) {
    return '下午';
  } else {
    return '晚上';
  }
};
export var formatTime2Normal = function formatTime2Normal(time, justDay) {
  return dayjs(time).format(!justDay ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD');
};
export var formatTime2CN = function formatTime2CN(time, justDay) {
  return dayjs(time).format(!justDay ? 'YYYY年MM月DD日 HH时mm分ss秒' : 'YYYY年MM月DD日');
};
