import 'mocha';
import { assert } from 'chai';
import getDayText from '../src/get-day-text';

describe('Get day text', () => {
    it('should return the day text from a date object', () => {
        const expected = 'Saturday';
        const actual = getDayText(new Date(2022, 11, 17, 22, 47));
        assert.equal(actual, expected);
    });
});