import 'mocha';
import { assert } from 'chai';
import generateSequentialString from '../src/generate-sequential-string';

describe('Generate sequential string', () => {
    it('should return a sequential string', () => {
        let serialNumber = 0;
        const next = () => generateSequentialString(serialNumber++, 6, 'ABC123');

        assert.equal(next(), 'AAAAAA');
        assert.equal(next(), 'AAAAAB');
        assert.equal(next(), 'AAAAAC');
        assert.equal(next(), 'AAAAA1');
        assert.equal(next(), 'AAAAA2');
        assert.equal(next(), 'AAAAA3');
        assert.equal(next(), 'AAAABA');
        assert.equal(next(), 'AAAABB');
        assert.equal(next(), 'AAAABC');
        assert.equal(next(), 'AAAAB1');
    });
});