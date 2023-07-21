import 'mocha';
import { assert } from 'chai';
import generateSequentialString from '../src/generate-sequential-string';
import getSecondarySequentialIndex from '../src/get-secondary-sequential-index';

describe('Get secondary sequential index', () => {
    it('should return the actual index used to generate the sequential string', () => {
        assert.deepStrictEqual(getSecondarySequentialIndex(24, 'ABC'.length), {index: 12, length: 3});

        for (let i = 0, ct = 0, lim = 2000; i <= lim; i++, ct++) {
            const charset = 'ABCDEF';
            const charsetLength = charset.length;

            const {length, index: secondarySequentialIndex} = getSecondarySequentialIndex(i, charsetLength);

            global?.console?.log(
                i,
                secondarySequentialIndex,
                ' ==> ',
                generateSequentialString(secondarySequentialIndex, length, charset),
            );

            assert.doesNotThrow(()=> generateSequentialString(secondarySequentialIndex, length, charset));
        }
    });
});