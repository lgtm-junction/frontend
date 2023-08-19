export const getCachedValue = <T>(key: string): T | null => {
  if (localStorage === undefined) return null;
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const setCacheValue = <T>(key: string, value: T): void => {
  if (localStorage === undefined) return;
  localStorage.setItem(key, JSON.stringify(value));
};
