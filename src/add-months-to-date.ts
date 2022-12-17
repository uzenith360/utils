export default (months: number, date: Date = new Date()): Date => {
    const newDate: Date = new Date(date);

    return new Date(newDate.setMonth(newDate.getMonth() + months));
}