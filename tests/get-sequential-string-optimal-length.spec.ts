import 'mocha';
import { assert } from 'chai';
import getSequentialStringOptimalLength from '../src/get-sequential-string-optimal-length';

describe('Get sequential string optimal length', () => {
    it('should return the optimal length for a sequential string', () => {
        const next = (serialNumber: number, charset: string) => getSequentialStringOptimalLength(serialNumber, charset.length);

        assert.equal(next(0, 'AB'), 1);
        assert.equal(next(1, 'AB'), 1);
        assert.notEqual(next(2, 'AB'), 1);

        assert.throws(() => { next(6, 'AB') });

        assert.equal(next(2, 'AB'), 2);
        assert.equal(next(3, 'AB'), 2);

        assert.equal(next(4, 'ABC'), 2);
        assert.equal(next(5, 'ABC'), 2);
        assert.equal(next(6, 'ABC'), 2);
        assert.equal(next(7, 'ABC'), 2);
        assert.equal(next(8, 'ABC'), 2);
        assert.notEqual(next(12, 'ABC'), 2);

        assert.equal(next(9, 'ABC'), 2);

        assert.equal(next(26, 'ABC'), 3);
    });
});