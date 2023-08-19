import { getCachedValue, setCacheValue } from "@/utils/cache";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from "react";

const useCachedState = <T,>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    setValue(getCachedValue<T>(key) || defaultValue);
  }, [defaultValue, key]);

  const handleSetValue: Dispatch<SetStateAction<T>> = useCallback(
    (newValue: T | SetStateAction<T>) => {
      if (typeof newValue === "function") {
        setValue((prevState) => {
          const result = (newValue as Function)(prevState);
          setCacheValue(key, result);
          return result;
        });
      } else {
        setValue(newValue);
        setCacheValue(key, newValue);
      }
    },
    [key]
  );

  return [value, handleSetValue] as const;
};

export default useCachedState;
