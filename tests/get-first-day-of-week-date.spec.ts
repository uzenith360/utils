import 'mocha';
import { assert } from 'chai';
import getFirstDayOfWeekDate from '../src/get-first-day-of-week-date';

describe('Get first day of week date', () => {
    it('should return the first day of week from a date object', () => {
        const expected = new Date(2022, 11, 11);
        const actual = getFirstDayOfWeekDate(new Date(2022, 11, 17, 22, 47));
        assert.equal(actual.toISOString(), expected.toISOString());
    });
});