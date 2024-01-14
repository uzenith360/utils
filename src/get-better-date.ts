import getDayText from "./get-day-text";
import getEndOfDayDate from "./get-end-of-day-date";
import getFormattedTimeString from "./get-formatted-time-string";
import getShortTextDayMonthOptionalyear from "./get-short-text-day-month-optionalyear";

export default (dateTimeStringOrTimestampOrDate: string|number|Date): string => {
    const date: Date = new Date(dateTimeStringOrTimestampOrDate);
    
    if (date >= getEndOfDayDate(1)) {
        return getFormattedTimeString(date);
      } else if (date >= getEndOfDayDate(2)) {
        return 'Yesterday';
      } else if (date >= getEndOfDayDate(7)) {
        return getDayText(date);
      } else {
        return getShortTextDayMonthOptionalyear(date);
      }
}
