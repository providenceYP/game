import { randomNumber } from 'utils/random';

export const generateColor = () =>
  // eslint-disable-next-line no-bitwise
  `#${(((1 << 24) * Math.random()) | 0).toString(16)}`.padEnd(7, 'f');

export const generateRGBA = (min = 0, max = 255, alpha = 1) =>
  `rgba(
  ${randomNumber(min, max, true)},
  ${randomNumber(min, max, true)},
  ${randomNumber(min, max, true)}, ${alpha})`;

export const changeAlpha = (rgbaColor: string, alpha = 1) => {
  const [r, g, b] = rgbaColor.match(/\d+/g);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
