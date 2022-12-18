import 'mocha';
import { assert } from 'chai';

import getPaginationParameters from '../src/get-pagination-parameters';

describe('Get pagination parameters', () => {
    it('should calculate the number records to skip on the first page', () => {
        const expected = 0;
        const actual = getPaginationParameters(1, 10).toSkip;
        assert.equal(actual, expected);
    });

    it('should calculate the number records to skip on other pages', () => {
        const expected = 30;
        const actual = getPaginationParameters(4, 10).toSkip;
        assert.equal(actual, expected);
    });
});