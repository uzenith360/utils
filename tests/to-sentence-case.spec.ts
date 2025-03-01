import { expect } from 'chai';
import sentenceCase from '../src/to-sentence-case';

describe('Sentence case', () => {
    it('should capitalize the first letter of each sentence', () => {
        const input = 'hello world. this is a test.';
        const expected = 'Hello world. This is a test.';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle sentences with exclamation marks', () => {
        const input = 'wow! this is amazing!';
        const expected = 'Wow! This is amazing!';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle sentences with question marks', () => {
        const input = 'what is your name? my name is John.';
        const expected = 'What is your name? My name is John.';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle sentences with newlines', () => {
        const input = 'hello world.\nthis is a new line.\nanother sentence.';
        const expected = 'Hello world.\nThis is a new line.\nAnother sentence.';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle empty strings', () => {
        const input = '';
        const expected = '';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle strings with no sentence boundaries', () => {
        const input = 'this is a single sentence';
        const expected = 'This is a single sentence';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle strings with multiple spaces', () => {
        const input = 'hello   world.   this is a test.';
        const expected = 'Hello   world.   This is a test.';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle strings with mixed punctuation', () => {
        const input = 'hello! what is your name? my name is John.';
        const expected = 'Hello! What is your name? My name is John.';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle strings with leading/trailing spaces', () => {
        const input = '   hello world.   ';
        const expected = '   Hello world.   ';
        expect(sentenceCase(input)).to.equal(expected);
    });

    it('should handle strings with no alphabetic characters', () => {
        const input = '123. 456! 789?';
        const expected = '123. 456! 789?';
        expect(sentenceCase(input)).to.equal(expected);
    });
});