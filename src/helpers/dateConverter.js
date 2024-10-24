export const convertIsoDate = (dateStr) => {
  let date;
  if (dateStr) {
    date = new Date(dateStr);
  }
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long", // full month name
    day: "numeric", // numeric day
    year: "numeric", // 4-digit year
  }).format(date);

  return formattedDate; // Outputs: "October 17, 2024"
};
