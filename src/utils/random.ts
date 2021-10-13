export const randomNumber = (
  min: number,
  max: number,
  isInteger = false,
): number => {
  const num = min + Math.random() * (max - min);

  return isInteger ? Math.ceil(num) : num;
};

export function randomChoice<T>(
  arr: T[],
  check?: (element: T, index: number) => boolean,
): T {
  const index = Math.floor(arr.length * Math.random());
  const element = arr[index];

  if (!check || check(element, index)) {
    return element;
  }

  return randomChoice(arr, check);
}
