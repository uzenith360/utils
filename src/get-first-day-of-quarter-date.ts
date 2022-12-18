export default (date: Date = new Date()): Date => {
    const quarter: number = Math.floor((new Date().getMonth() + 3) / 3);

    return new Date(date.getFullYear(), (quarter - 1) * 3, 1, 0, 0, 0, 0);
}
