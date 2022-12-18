import 'mocha';
import { assert } from 'chai';

import getMonthDiff from '../src/get-month-diff';

describe('Get month diff', () => {
    it('should return the difference in months between two dates', () => {
        const expected = 3;
        const actual = getMonthDiff(new Date(2022, 3, 12), new Date(2022, 6, 21));
        assert.equal(actual, expected);
    });
});