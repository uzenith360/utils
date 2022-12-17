/**
 * Sets date back to start of the day
 * use case is in date range queries
 */
export default (daysAgo?: number, date: Date = new Date()): Date => {
  const _date: Date = new Date(date);

    _date.setDate(_date.getDate() - (daysAgo ?? 0));
    _date.setHours(0, 0, 0, 0);

    return _date;
  };
