import 'mocha';
import { assert } from 'chai';
import getFirstDayOfQuarterDate from '../src/get-first-day-of-quarter-date';

describe('Get first day of quarter date', () => {
    it('should return the first day of quarter from a date object', () => {
        const expected = new Date(2022, 9, 1);
        const actual = getFirstDayOfQuarterDate(new Date(2022, 11, 17, 22, 47));
        assert.equal(actual.toISOString(), expected.toISOString());
    });
});