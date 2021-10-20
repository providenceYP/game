export const randomNumber = (
  min: number,
  max: number,
  isInteger = false,
): number => {
  const num = min + Math.random() * (max - min);

  return isInteger ? Math.ceil(num) : num;
};
