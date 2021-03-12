import { isString } from 'to-text';

const fallback = `0,0,0`;

export const hexToRGB = (hex: string) => {
  if (!hex) return fallback;
  if (!isString(hex)) return fallback;
  return hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => `#` + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))
    .join(`,`);
};

export default hexToRGB;
