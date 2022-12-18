export default (timestampOrdateOrDateString: number | string | Date): string => {
    const date: Date = new Date(timestampOrdateOrDateString);
    const dy: number = date.getDate();
    const mnth: string = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ][date.getMonth()];

    return `${dy} ${mnth} ${date.getFullYear()}`;
}
