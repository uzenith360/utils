import 'mocha';
import { assert } from 'chai';

import splitCompoundString from '../src/split-compound-string';

describe('Split compound string', () => {
    it('should return the first word and the remaining words', () => {
        const expected = ['zenith', 'wogwugwu ugochukwu'];
        const actual = splitCompoundString('zenith wogwugwu ugochukwu');
        assert.sameMembers(actual, expected);
    });

    it('should remove excess spacing', () => {
        const expected = ['zenith', 'wogwugwu ugochukwu'];
        const actual = splitCompoundString(' zenith   wogwugwu  ugochukwu ');
        assert.sameMembers(actual, expected);
    });
});