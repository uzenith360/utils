/**
 * Gets the respective vowel/consonant a/an for a word
 * Use case is in making sure a dynamic sentence has a correct grammer
 */
export default (word: string): 'a' | 'an' => {
    return ['a', 'e', 'i', 'o', 'u'].includes(word.charAt(0).toLowerCase()) ? 'an' : 'a';
}
