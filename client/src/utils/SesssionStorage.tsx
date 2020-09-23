export const setSession = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key: string) => {
  const value = localStorage.getItem(key);
  if (value != null) return JSON.parse(value);
  else return false;
};

export const deleteSession = (key: string) => {
  localStorage.removeItem(key);
  console.log("deleted sesiion for user");
};
