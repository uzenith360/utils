import 'mocha';
import { assert } from 'chai';
import getDateDayDiff from '../src/get-date-day-diff';

describe('Get date day diff', () => {
    it('should return the different in days between two date objects', () => {
        const expected = 5;
        const actual = getDateDayDiff(new Date(2022, 11, 18, 22, 47), new Date(2022, 11, 23, 22, 47));
        assert.equal(actual, expected);
    });
});