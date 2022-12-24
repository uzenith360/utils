import 'mocha';
import { assert } from 'chai';
import capitalize from '../src/capitalize';

describe('Capitalize', () => {
    it('should return a capitalized string', () => {
        const expected = 'Zenith wogwugwu is 1% better.';
        const actual = capitalize('zenitH woGwugwU iS 1% BetTeR.');

        assert.equal(actual, expected);
    });
});