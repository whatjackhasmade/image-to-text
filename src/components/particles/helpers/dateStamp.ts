export const dateStamp = (): string => {
  const dateObject = new Date();

  const dateOptions: {
    day: '2-digit';
    month: '2-digit';
    year: '2-digit';
    hour12: false;
    hour: '2-digit';
    minute: '2-digit';
    second: '2-digit';
  } = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  return dateObject.toLocaleDateString('en-GB', dateOptions);
};

export default dateStamp;
