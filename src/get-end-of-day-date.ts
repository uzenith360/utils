export default (daysAgo?: number, date: Date = new Date()): Date => {
  const _date: Date = new Date(date);

  _date.setDate(_date.getDate() - (daysAgo ?? 0));
  _date.setHours(23, 59, 59, 999);

  return _date;
};
