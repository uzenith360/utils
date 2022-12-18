export default (timestampOrdateOrDateString: number | string | Date): string => {
    const date: Date = new Date(timestampOrdateOrDateString);
    const dy: number = date.getDate();
    const mnth: string = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ][date.getMonth()];

    return `${dy} ${mnth}${date.getFullYear() !== new Date().getFullYear() ? ' ' + date.getFullYear() : ''}`;
}
