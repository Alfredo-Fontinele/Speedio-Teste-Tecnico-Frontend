export const formatRemiderDate = (reminder_date: string) => {
  const [date, hour] = reminder_date.replace("T", " ").split(" "); // ['2023-12-31', '22:59']

  const dateFormated = date.split("-").reverse().join("/");

  return `${dateFormated} | ${hour}`;
};
