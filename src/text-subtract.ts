/**
 * Removes a substring from any position in a string, and assembles the rest of the remainder correctly
 */
export default (
    text: string,
    /*subText: string*/subtractLength: number,
    startIndex: number = 0,
    removeExtraSpace: boolean = true
): string => {
    const stringArray: string[] = text.split('');
    let deleteCount: number = /*subText.length*/subtractLength;

    if (removeExtraSpace) {
        if (stringArray[startIndex + deleteCount] === ' ') {
            deleteCount += 1;
        } else if (stringArray[startIndex - 1] === ' ') {
            startIndex -= 1;
            deleteCount += 1;
        }
    }

    // substract from the string, also remove the extra space
    stringArray.splice(startIndex, deleteCount);

    return stringArray.join('');
}