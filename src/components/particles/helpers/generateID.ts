export const generateID = (stringParam: string = ``) => {
  const intFirst = (Math.random() * 46656) | 0;
  const intSecond = (Math.random() * 46656) | 0;
  const strFirst = (`000` + intFirst.toString(36)).slice(-3);
  const strSecond = (`000` + intSecond.toString(36)).slice(-3);

  return `${stringParam}-${strFirst}-${strSecond}`;
};

export default generateID;
