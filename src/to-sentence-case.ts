export default (input: string): string => {
    let result = '';
    let capitalizeNext = true; // Flag to indicate if the next character should be capitalized

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (capitalizeNext && /[a-zA-Z]/.test(char)) {
            // Capitalize the first letter of a sentence
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            // Preserve the character as-is
            result += char;
        }

        // Check for sentence boundaries (., !, ?) to capitalize the next character
        if (/[.!?]/.test(char)) {
            capitalizeNext = true;
        }

        // Handle newlines as sentence boundaries
        if (char === '\n') {
            capitalizeNext = true;
        }
    }

    return result;
};
