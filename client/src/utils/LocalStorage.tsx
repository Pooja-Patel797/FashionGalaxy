export const getLocalStorage = (key: string): any => {
  const localData = localStorage.getItem(key);
  return localData ? JSON.parse(localData) : localData;
};

export const setLocalStorage = <T extends unknown>(
  key: string,
  value: T
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const deleteLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
