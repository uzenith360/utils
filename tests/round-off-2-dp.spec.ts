import 'mocha';
import { assert } from 'chai';
import roundOff2Dp from '../src/round-off-2-dp';

describe('Round off 2 dp', () => {
    it('should return a number rounded off to 2 d.p', () => {
        const expected = 23010.35;
        const actual = roundOff2Dp(23010.34567);

        assert.equal(actual, expected);
    });
});