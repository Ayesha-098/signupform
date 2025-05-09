import { useState } from "react";

export const useLocalStorage = (key, startValue) => {
  const saved = localStorage.getItem(key);
  const [value, setValue] = useState(saved ? JSON.parse(saved) : startValue);

  const save = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, save];
};

export default useLocalStorage;
