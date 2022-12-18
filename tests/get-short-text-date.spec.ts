import 'mocha';
import { assert } from 'chai';
import getShortTextDate from '../src/get-short-text-date';

describe('Get short text date', () => {
    it('should return the short text date from a date object', () => {
        const expected = '17 DEC 2022';
        const actual = getShortTextDate(new Date(2022, 11, 17, 22, 47));
        assert.equal(actual, expected);
    });
});