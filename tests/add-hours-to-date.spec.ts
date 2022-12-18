import 'mocha';
import { assert } from 'chai';
import addHoursToDate from '../src/add-hours-to-date';

describe('Add hours to date', () => {
    it('should add 8 hours to a date', () => {
        const expected = new Date(2022, 11, 19, 1, 9, 35);
        const actual = addHoursToDate(8, new Date(2022, 11, 18, 17, 9, 35));

        assert.equal(actual.toISOString(), expected.toISOString());
    });
});