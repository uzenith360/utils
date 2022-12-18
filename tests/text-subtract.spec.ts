import 'mocha';
import { assert } from 'chai';

import textSubtract from '../src/text-subtract';

describe('Text subtract', () => {
    it('should subtract from the beginining of a string', () => {
        const expected = 'falling down';
        const actual = textSubtract('Felix falling down', 6, 0);

        assert.equal(actual, expected);
    });

    it('should subtract from the end of a string', () => {
        const expected = 'Felix falling';
        const actual = textSubtract('Felix falling down', 5, 13);
        
        assert.equal(actual, expected);
    });

    it('should subtract from the middle of a string', () => {
        const expected = 'Felix  down';
        const actual = textSubtract('Felix falling down', 7, 6, false);
        
        assert.equal(actual, expected);
    });

    it('should remove excess spaces', () => {
        const expected = 'Felix down';
        const actual = textSubtract('Felix falling down', 7, 6, true);
        
        assert.equal(actual, expected);
    });
});