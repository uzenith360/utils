export default (timestampOrdateOrDateString: number | string | Date): string => {
    const date = new Date(timestampOrdateOrDateString);
    const dy = date.getDate();
    const mnth = [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER'
    ][date.getMonth()];

    return `${mnth} ${dy}, ${date.getFullYear()}`;
}
