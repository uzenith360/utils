export default (hours: number, date: Date = new Date()): Date => {
    const newDate: Date = new Date(date);

    return new Date(newDate.setHours(newDate.getHours() + hours));
}