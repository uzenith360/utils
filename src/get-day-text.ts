export default (timestampOrdateOrDateString: number | string | Date): string => {
    return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ][new Date(timestampOrdateOrDateString).getDay()];
}
