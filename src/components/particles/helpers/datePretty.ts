export const datePretty = (dateString: string) => {
  if (!dateString) return null;

  const dateObject = new Date(dateString);

  const dateOptions: {
    day: 'numeric' | '2-digit';
    month: 'numeric' | '2-digit';
    year: 'numeric' | '2-digit';
    hour12: boolean;
    hour: 'numeric' | '2-digit';
    minute: 'numeric' | '2-digit';
    second: 'numeric' | '2-digit';
  } = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  };

  return dateObject.toLocaleDateString('en-GB', dateOptions);
};

export default datePretty;
