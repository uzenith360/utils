/**
 * Note: Uses Sunday as the first day of the week
 */
export default (date: Date = new Date()): Date => {
    const today: Date = new Date(new Date(date).setHours(0, 0, 0, 0)); // get current date
    const first: number = today.getDate() - today.getDay(); // First day is the day of the month - the day of the week

    return new Date(today.setDate(first));
}