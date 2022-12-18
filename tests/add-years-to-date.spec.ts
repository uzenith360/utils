import 'mocha';
import { assert } from 'chai';
import addYearsToDate from '../src/add-years-to-date';

describe('Add years to date', () => {
    it('should add 2 years to a date', () => {
        const expected = new Date(2024, 11, 18, 17, 9, 35);
        const actual = addYearsToDate(2, new Date(2022, 11, 18, 17, 9, 35));

        assert.equal(actual.toISOString(), expected.toISOString());
    });
});