import 'mocha';
import { assert } from 'chai';
import isString from '../src/is-string';

describe('Is string', () => {
    it('should return false for a number (double)', () => {
        const expected = false;
        const actual = isString(23010.34);

        assert.equal(actual, expected);
    });

    it('should return false for a function', () => {
        const expected = false;
        const actual = isString(function(){});

        assert.equal(actual, expected);
    });

    it('should return false for a undefined', () => {
        const expected = false;
        const actual = isString(undefined);

        assert.equal(actual, expected);
    });

    it('should return false for a regex', () => {
        const expected = false;
        const actual = isString(/[a-z]/);

        assert.equal(actual, expected);
    });

    it('should return false for a boolean', () => {
        const expected = false;
        const actual = isString(true);

        assert.equal(actual, expected);
    });

    it('should return false for a null', () => {
        const expected = false;
        const actual = isString(null);

        assert.equal(actual, expected);
    });

    it('should return false for an object', () => {
        const expected = false;
        const actual = isString({});

        assert.equal(actual, expected);
    });

    it('should return true for a string', () => {
        const expected = true;
        const actual = isString("How to do the work");

        assert.equal(actual, expected);
    });
});