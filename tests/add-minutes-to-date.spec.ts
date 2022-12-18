import 'mocha';
import { assert } from 'chai';
import addMinutesToDate from '../src/add-minutes-to-date';

describe('Add minutes to date', () => {
    it('should add 10 minutes to a date', () => {
        const expected = new Date(2022, 11, 18, 17, 19, 35);
        const actual = addMinutesToDate(10, new Date(2022, 11, 18, 17, 9, 35));

        assert.equal(actual.toISOString(), expected.toISOString());
    });
});