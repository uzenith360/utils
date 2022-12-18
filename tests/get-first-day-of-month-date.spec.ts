import 'mocha';
import { assert } from 'chai';
import getFirstDayOfMonthDate from '../src/get-first-day-of-month-date';

describe('Get first day of month date', () => {
    it('should return the first day of month from a date object', () => {
        const expected = new Date(2022, 11, 1);
        const actual = getFirstDayOfMonthDate(new Date(2022, 11, 17, 22, 47));
        assert.equal(actual.toISOString(), expected.toISOString());
    });
});