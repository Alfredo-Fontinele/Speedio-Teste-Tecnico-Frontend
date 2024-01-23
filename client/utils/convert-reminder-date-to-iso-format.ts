export const convertReminderDateToISOFormat = (reminder_date?: string) => {
  if (!reminder_date) return;
  const regex = /^(\d{2})\/(\d{2})\/(\d{4}) \| (\d{2}):(\d{2})$/;
  const match = RegExp(regex).exec(reminder_date);
  if (!match) {
    console.error("Formato de entrada inválido");
    return null;
  }
  const [, dia, mes, ano, hora, minuto] = match;
  const dataISO = `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  return dataISO;
};
