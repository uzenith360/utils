import 'mocha';
import { assert } from 'chai';
import addMonthsToDate from '../src/add-months-to-date';

describe('Add months to date', () => {
    it('should add 6 months to a date', () => {
        const expected = new Date(2023, 5, 18, 17, 9, 35);
        const actual = addMonthsToDate(6, new Date(2022, 11, 18, 17, 9, 35));

        assert.equal(actual.toISOString(), expected.toISOString());
    });
});