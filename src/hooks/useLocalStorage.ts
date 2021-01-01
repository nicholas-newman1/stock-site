import { useState, useEffect } from 'react';

/* get the saved value from local storage and return it, otherwise return the 
inital value */
function getSavedValue(key: string, initialValue: any) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key: string, initialValue: any) {
  /* passing a function into useState so that it doesnt run the getSavedValue
  function every time the component renders. It will only run once, the first
  time the component loads */
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    //eslint-disable-next-line
  }, [value]);

  return [value, setValue];
}
