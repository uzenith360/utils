import 'mocha';
import { assert } from 'chai';

import trimAndLowerCase from '../src/trim-and-lowercase';

describe('Trim and lowercase', () => {
    it('should return a trimmed string', () => {
        const expected = 'hello';
        const actual = trimAndLowerCase(' HELLO ');
        assert.equal(actual, expected);
    });

    it('should returned an lowercased string', () => {
        const expected = 'hello';
        const actual = trimAndLowerCase('HELLO');
        assert.equal(actual, expected);
    });
});