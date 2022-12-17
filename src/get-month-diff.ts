/**
 * Get difference in months between two dates 
 */
export default (dateFrom: Date, dateTo: Date): number =>
    dateTo.getMonth()
    - dateFrom.getMonth()
    + (
        12 * (
            dateTo.getFullYear() - dateFrom.getFullYear()
        )
    );
