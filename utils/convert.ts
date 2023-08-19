export const convertValueAndUnit = (
  value: number,
  unit: string,
  isBoolean: boolean
) => {
  if (isBoolean) {
    return value === 0 ? "X" : "O";
  }
  return `${value}${unit}`;
};
