import 'mocha';
import { assert } from 'chai';
import discountedPrice from '../src/discounted-price';

describe('Discounted price', () => {
    it('should return a discounted price from a discount amount', () => {
        const expected = 1800;
        const actual = discountedPrice(2000, 200);

        assert.equal(actual, expected);
    });

    it('should return a discounted price from a discount percentage', () => {
        const expected = 1800;
        const actual = discountedPrice(2000, undefined, 10);

        assert.equal(actual, expected);
    });

    it('should return a discounted price from both a discount amount and a discount percentage', () => {
        const expected = 1600;
        const actual = discountedPrice(2000, 200, 10);

        assert.equal(actual, expected);
    });
});