import 'mocha';
import { assert } from 'chai';

import normalizePhoneNumber from '../src/normalize-phone-number';

describe('Normalize phone number', () => {
    it('should normalize short phone number in default country code', () => {
        const expected = '+2348139498596';
        const actual = normalizePhoneNumber('08139498596');
        assert.equal(actual, expected);
    });

    it('should normalize short phone number with country code param', () => {
        const expected = '+438139498596';
        const actual = normalizePhoneNumber('08139498596', '43');
        assert.equal(actual, expected);
    });

    it('should normalize phone number and country code format', () => {
        const expected = '+2348139498596';
        const actual = normalizePhoneNumber('2348139498596', '234');
        assert.equal(actual, expected);
    });

    it('should leave long phone number unchanged', () => {
        const expected = '+2348139498596';
        const actual = normalizePhoneNumber('+2348139498596', '234');
        assert.equal(actual, expected);
    });

    it('should remove spaces', () => {
        const expected = '+2348139498596';
        const actual = normalizePhoneNumber(' +234 813 949 8596 ');
        assert.equal(actual, expected);
    });

    it('should normalize nigerian number without country code', () => {
        const expected = '+2348139498596';
        const actual = normalizePhoneNumber('813 949 8596', '234');
        assert.equal(actual, expected);
    });

    it('should normalize US number without country code', () => {
        const expected = '+12124567890';
        const actual = normalizePhoneNumber('212-456-7890', '1');
        assert.equal(actual, expected);
    });

    it('should normalize US number with country code and +', () => {
        const expected = '+12124567890';
        const actual = normalizePhoneNumber('+1-212-456-7890', '1');
        assert.equal(actual, expected);
    });

    it('should normalize US phone number', () => {
        const expected = '+16595995773'/*'+1 (659) 599-5773'*/;
        const actual = normalizePhoneNumber('1 (659) 599-5773', '1');
        assert.equal(actual, expected);
    });

    it('should leave full US phone number unchanged', () => {
        const expected = '+16595995773'/*'+1 (659) 599-5773'*/;
        const actual = normalizePhoneNumber('+1 (659) 599-5773', '1');
        assert.equal(actual, expected);
    });
});