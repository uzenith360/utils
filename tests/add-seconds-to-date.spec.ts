import 'mocha';
import { assert } from 'chai';
import addSecondsToDate from '../src/add-seconds-to-date';

describe('Add seconds to date', () => {
    it('should add 20 seconds to a date', () => {
        const expected = new Date(2022, 11, 18, 17, 9, 55);
        const actual = addSecondsToDate(20, new Date(2022, 11, 18, 17, 9, 35));

        assert.equal(actual.toISOString(), expected.toISOString());
    });
});