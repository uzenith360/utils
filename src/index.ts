import addDaysToDate from "./add-days-to-date";
import addHoursToDate from "./add-hours-to-date";
import addMinutesToDate from "./add-minutes-to-date";
import addMonthsToDate from "./add-months-to-date";
import addSecondsToDate from "./add-seconds-to-date";
import addYearsToDate from "./add-years-to-date";
import capitalize from "./capitalize";
import discountedPrice from "./discounted-price";
import formatMoney from './format-money';
import generateRandomString from "./generate-random-string";
import generateSequentialString from "./generate-sequential-string";
import getAAnForWord from "./get-a-an-for-word";
import getDateTimeAgo from "./get-date-time-ago";
import getDateDiff from "./get-date-diff";
import getDateFullText from "./get-date-full-text";
import getDateShortText from "./get-date-short-text";
import getDateFormattedString from "./get-date-formatted-string";
import getDayMonthOptionalyearShortText from "./get-day-month-optionalyear-short-text";
import getDayText from "./get-day-text";
import getEndOfDayDate from "./get-end-of-day-date";
import getMonthDiff from "./get-month-diff";
import getPaginationParameters from "./get-pagination-parameters";
import getStartOfDayDate from "./get-start-of-day-date";
import getTimeFormattedString from "./get-time-formatted-string";
import isString from "./is-string";
import normalizePhoneNumber from "./normalize-phone-number";
import roundOff2Dp from "./round-off-2-dp";
import splitCompoundString from "./split-compound-string";
import textSubtract from "./text-subtract";
import toTitleCase from "./to-title-case";
import trimAndLowercase from "./trim-and-lowercase";
import trimAndUppercase from "./trim-and-uppercase";

export function helloWorld() {
    const message = 'Hello World from my example modern npm package!';
    return message;
}

export function goodBye() {
    const message = 'Goodbye from my example modern npm package!';
    return message;
}

export default {
    helloWorld,
    goodBye,

    addDaysToDate,
    addHoursToDate,
    addMinutesToDate,
    addMonthsToDate,
    addSecondsToDate,
    addYearsToDate,
    capitalize,
    discountedPrice,
    formatMoney,
    generateRandomString,
    generateSequentialString,
    getAAnForWord,
    getDateDiff,
    getDateTimeAgo,
    getDateFullText,
    getDateShortText,
    getDateFormattedString,
    getDayMonthOptionalyearShortText,
    getDayText,
    getEndOfDayDate,
    getMonthDiff,
    getPaginationParameters,
    getStartOfDayDate,
    getTimeFormattedString,
    isString,
    normalizePhoneNumber,
    roundOff2Dp,
    splitCompoundString,
    textSubtract,
    toTitleCase,
    trimAndLowercase,
    trimAndUppercase,
};