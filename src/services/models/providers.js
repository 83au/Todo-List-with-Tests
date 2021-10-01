export const getStoredState = key => {
  return JSON.parse(localStorage.getItem(key))
}

export const setStoredState = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}