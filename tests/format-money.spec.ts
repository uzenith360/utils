import 'mocha';
import { assert } from 'chai';
import formatMoney from '../src/format-money';

describe('Format money', () => {
    it('should return a formatted money string', () => {
        const expected = '#23,010.34';
        const actual = formatMoney(23010.34, '#', 2, 2);

        assert.equal(actual, expected);
    });
});