import 'mocha';
import { assert } from 'chai';

import toTitleCase from '../src/to-title-case';

describe('Title case', () => {
    it('should return a trimmed string', () => {
        const expected = 'Hello World';
        const actual = toTitleCase('  hello   world ');
        assert.equal(actual, expected);
    });

    it('should returned an titlecased string', () => {
        const expected = 'Hello World';
        const actual = toTitleCase('HELLO wORld');
        assert.equal(actual, expected);
    });
});