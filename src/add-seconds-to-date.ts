export default (seconds: number, date: Date = new Date()): Date => {
    const newDate: Date = new Date(date);

    return new Date(newDate.setSeconds(newDate.getSeconds() + seconds));
}