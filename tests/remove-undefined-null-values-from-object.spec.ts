import 'mocha';
import { assert } from 'chai';
import removeUndefinedNullValuesFromObject from '../src/remove-undefined-null-values-from-object';

describe('Remove Undefined Null Values From Object', () => {
    it('should remove undefined and null values from object', () => {
        const expected = { a: 1, c: 0, e: false };
        const actual = removeUndefinedNullValuesFromObject({ a: 1, b: undefined, d: null, c: 0, e: false });

        assert.deepStrictEqual(actual, expected);
    });
});
