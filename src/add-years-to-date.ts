export default (years: number, date: Date = new Date()): Date => {
    const newDate: Date = new Date(date);

    return new Date(newDate.setFullYear(newDate.getFullYear() + years));
}