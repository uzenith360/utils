/**
 * Add (or subtract) days from date
 */
export default (days: number, date: Date = new Date()): Date => {
    const newDate: Date = new Date(date);

    return new Date(newDate.setDate(newDate.getDate() + days));
}