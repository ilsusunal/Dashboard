import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const localVal = localStorage.getItem(key);
    try {
      if (localVal === null) {
        return defaultValue;
      } else {
        return JSON.parse(localVal);
      }
    } catch (error) {
      console.log("STORAGE ERROR:", error);
      return defaultValue;
    }
  });
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}
