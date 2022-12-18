import 'mocha';
import { assert } from 'chai';
import getFirstDayOfYearDate from '../src/get-first-day-of-year-date';

describe('Get first day of year date', () => {
    it('should return the first day of year from a date object', () => {
        const expected = new Date(2022, 0, 1);
        const actual = getFirstDayOfYearDate(new Date(2022, 3, 12, 22, 47));
        assert.equal(actual.toISOString(), expected.toISOString());
    });
});