export const persistLocalStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, value as string);
  };
  
  export const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };
  