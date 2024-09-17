export const getLocalItem = (
  key: string
):any=> {
  const val = localStorage.getItem(key)
  if (val === null) return null
  try {
    return JSON.parse(val)
  } catch (e) {
    return val
  }
}

export const setLocalItem = (key: string, item?: any)=> {
  if (item === undefined || item === null) {
    return localStorage.removeItem(key)
  }
  return localStorage.setItem(key, JSON.stringify(item))
}
