import 'mocha';
import { assert } from 'chai';
import addDaysToDate from '../src/add-days-to-date';

describe('Add days to date', () => {
    it('should add 14 days to a date', () => {
        const expected = new Date(2023, 0, 1, 17, 9, 35);
        const actual = addDaysToDate(14, new Date(2022, 11, 18, 17, 9, 35));

        assert.equal(actual.toISOString(), expected.toISOString());
    });
});