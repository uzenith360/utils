import 'mocha';
import { assert } from 'chai';
import getDateTimeAgo from '../src/get-date-time-ago';

describe('Get date time ago', () => {
    it('should return the seconds difference between two date objects', () => {
        const expected = '2 secs';
        const actual = getDateTimeAgo(new Date(2022, 11, 17, 22, 47, 23), new Date(2022, 11, 17, 22, 47, 25));
        assert.equal(actual, expected);
    });

    it('should return the minutes difference between two date objects', () => {
        const expected = '3 mins';
        const actual = getDateTimeAgo(new Date(2022, 11, 17, 22, 47), new Date(2022, 11, 17, 22, 50));
        assert.equal(actual, expected);
    });

    it('should return the hours difference between two date objects', () => {
        const expected = '1 hr';
        const actual = getDateTimeAgo(new Date(2022, 11, 17, 22, 47), new Date(2022, 11, 17, 23, 47));
        assert.equal(actual, expected);
    });

    it('should return the days difference between two date objects', () => {
        const expected = '3 dys';
        const actual = getDateTimeAgo(new Date(2022, 11, 17), new Date(2022, 11, 20));
        assert.equal(actual, expected);
    });

    it('should return the weeks difference between two date objects', () => {
        const expected = '1 wk';
        const actual = getDateTimeAgo(new Date(2022, 11, 17), new Date(2022, 11, 24));
        assert.equal(actual, expected);
    });

    it('should return the months difference between two date objects', () => {
        const expected = '3 mnths';
        const actual = getDateTimeAgo(new Date(2022, 11, 17), new Date(2023, 2, 17));
        assert.equal(actual, expected);
    });

    it('should return the years difference between two date objects', () => {
        const expected = '5 yrs';
        const actual = getDateTimeAgo(new Date(2022, 11, 17), new Date(2027, 11, 16));
        assert.equal(actual, expected);
    });

    it('should return the minutes and hours difference between two date objects', () => {
        const expected = '2 hrs 3 mins';
        const actual = getDateTimeAgo(new Date(2022, 11, 17, 20, 47), new Date(2022, 11, 17, 22, 50));
        assert.equal(actual, expected);
    });

    it('should return the days and minutes difference between two date objects', () => {
        const expected = '5 dys 3 mins';
        const actual = getDateTimeAgo(new Date(2022, 11, 17, 22, 47), new Date(2022, 11, 22, 22, 50));
        assert.equal(actual, expected);
    });

    it('should return the months, days and hours difference between two date objects', () => {
        const expected = '1 mnth 5 dys 1 hr';
        const actual = getDateTimeAgo(new Date(2022, 10, 12, 22), new Date(2022, 11, 17, 23));
        assert.equal(actual, expected);
    });
});