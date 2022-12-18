export default (timestampOrdateOrDateString: number | string | Date): string =>
    [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ][new Date(timestampOrdateOrDateString).getDay()];
