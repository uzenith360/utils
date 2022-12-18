import 'mocha';
import { assert } from 'chai';
import getShortTextDayMonthOptionalyear from '../src/get-short-text-day-month-optionalyear';

describe('Get short text day month optionalyear', () => {
    it('should return the short text in same year from a date object', () => {
        const expected = '17 Dec';
        const actual = getShortTextDayMonthOptionalyear(new Date(2022, 11, 17, 22, 47));
        assert.equal(actual, expected);
    });

    it('should return the short text in different year from a date object', () => {
        const expected = '17 Dec 2021';
        const actual = getShortTextDayMonthOptionalyear(new Date(2021, 11, 17, 22, 47));
        assert.equal(actual, expected);
    });
});