export const getLocalStorage = (key: string) => {
  const localData = localStorage.getItem(key);
  return localData ? JSON.parse(localData) : localData;
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const deleteLocalStorage=(key:string)=>{
  localStorage.removeItem(key);
}
