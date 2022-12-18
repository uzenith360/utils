import 'mocha';
import { assert } from 'chai';
import getEndOfDayDate from '../src/get-end-of-day-date';

describe('Get end of day date', () => {
    it('should return the end of day from a date object', () => {
        const expected = new Date(2022, 11, 10, 23, 59, 59, 999);
        const actual = getEndOfDayDate(7, new Date(2022, 11, 17, 22, 47));
        assert.equal(actual.toISOString(), expected.toISOString());
    });
});