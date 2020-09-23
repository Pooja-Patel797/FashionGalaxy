export const getLocalStorage = (key: string) => {
  const localData = localStorage.getItem(key);
  return localData ? JSON.parse(localData) : [];
};

export const setLocalStorage = (key: any, value: any) => {
  localStorage.setItem("cart", JSON.stringify(value));
};
