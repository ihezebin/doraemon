import dayjs from 'dayjs'

export const getTimePeriod = (hour: number): string => {
  if (hour >= 0 && hour < 6) {
    return '凌晨'
  } else if (hour >= 6 && hour < 12) {
    return '早上'
  } else if (hour === 12) {
    return '中午'
  } else if (hour >= 13 && hour < 18) {
    return '下午'
  } else {
    return '晚上'
  }
}

export const formatTime2Normal = (time: number | string, justDay?: boolean): string => {
  return dayjs(time).format(!justDay ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')
}
export const formatTime2CN = (time: number | string, justDay?: boolean): string => {
  return dayjs(time).format(!justDay ? 'YYYY年MM月DD日 HH时mm分ss秒' : 'YYYY年MM月DD日')
}
