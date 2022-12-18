import 'mocha';
import { assert } from 'chai';
import getStartOfDayDate from '../src/get-start-of-day-date';

describe('Get start of day date', () => {
    it('should return the start of day from a date object', () => {
        const expected = new Date(2022, 11, 10, 0, 0, 0, 0);
        const actual = getStartOfDayDate(7, new Date(2022, 11, 17, 22, 47));
        assert.equal(actual.toISOString(), expected.toISOString());
    });
});