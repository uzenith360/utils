import 'mocha';
import { assert } from 'chai';
import getAAnForWord from '../src/get-a-an-for-word';

describe('Get a an for word', () => {
    it('should return "a" for a consonant word', () => {
        const expected = 'a';
        const actual = getAAnForWord('Hospital');
        assert.equal(actual, expected);
    });

    it('should return "an" for a vowel word', () => {
        const expected = 'an';
        const actual = getAAnForWord('Aeroplance');
        assert.equal(actual, expected);
    });
});