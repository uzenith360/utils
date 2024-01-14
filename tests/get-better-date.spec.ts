import 'mocha';
import { assert } from 'chai';
import getBetterDate from '../src/get-better-date';
import getFormattedTimeString from '../src/get-formatted-time-string';
import getDayText from '../src/get-day-text';
import getEndOfDayDate from '../src/get-end-of-day-date';

describe('Get better date', () => {
    it('should return the date within same day', () => {
        const date: Date = getEndOfDayDate();

        const expected = getFormattedTimeString(date);
        const actual = getBetterDate(date);
        assert.equal(actual, expected);
    });

    it('should return the date within past day', () => {
        const date: Date = new Date();

        date.setDate(date.getDate() - 1); // yesterday

        const expected = 'Yesterday';
        const actual = getBetterDate(date);
        assert.equal(actual, expected);
    });

    it('should return the date within same week', () => {
        const date: Date = new Date();

        date.setDate(date.getDate() - 3); // 3 days

        const expected = getDayText(date);
        const actual = getBetterDate(date);
        assert.equal(actual, expected);
    });

    it('should return the date in same year from a date object', () => { });

    it('should return the date in different year from a date object', () => { });
});