import { getCachedValue, setCacheValue } from "@/utils/cache";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useGranularEffect } from "./useGranularEffect";

const useCachedState = <T,>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);

  useGranularEffect(
    () => {
      setValue(getCachedValue<T>(key) || defaultValue);
    },
    [key],
    [defaultValue]
  );

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

  const stateValue = useMemo(
    () => [value, handleSetValue] as const,
    [handleSetValue, value]
  );

  return stateValue;
};

export default useCachedState;
