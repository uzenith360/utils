import 'mocha';
import { assert } from 'chai';
import getFormattedDateString from '../src/get-formatted-date-string';

describe('Get formatted date string', () => {
    it('should return a formatted date from a date object', () => {
        const expected = '12/04/2022';
        const actual = getFormattedDateString(new Date(2022, 3, 12, 22, 47));
        assert.equal(actual, expected);
    });
});