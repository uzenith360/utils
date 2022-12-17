export default (minutes: number, date: Date = new Date()): Date => {
    const newDate: Date = new Date(date);

    return new Date(newDate.setMinutes(newDate.getMinutes() + minutes));
}