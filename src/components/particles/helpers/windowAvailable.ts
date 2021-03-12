export const windowAvailable = (): Boolean => {
  const isAvailable = typeof window !== 'undefined';
  return isAvailable;
};

export default windowAvailable;
