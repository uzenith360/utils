/**
 * Get the difference in days between two dates
 */
export default (date: Date, anotherDate:Date): number => {
    const oneDay: number = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const firstDate: number = new Date(date).setHours(0, 0, 0, 0);
    const secondDate: number = new Date(anotherDate).setHours(0, 0, 0, 0);
    
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}
