export default (date: Date = new Date()): Date => {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}
