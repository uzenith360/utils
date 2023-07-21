/**
 * This method helps to calculate the optimal length for a sequential string and a running serialNumber
 * 
 * @param serialNumber The running serial number
 * @param charsetLength The length of the character set that would be used to generate the sequential string 
 */
export default (
    serialNumber: number,
    charsetLength: number
): number => {
    const startLength = 1;
    const getLengthChangeLoss = (length: number): number => {
        let secondaryIndexDifference: number = 0;

        for (
            let stringSequenceLength = length - 1;
            stringSequenceLength > 0;
            stringSequenceLength -= 1
        ) {
            secondaryIndexDifference += (charsetLength ** stringSequenceLength);
        }

        return secondaryIndexDifference;
    }

    for (let outputLength = startLength; outputLength <= charsetLength; outputLength += 1) {
        if (serialNumber < ((charsetLength ** outputLength) + getLengthChangeLoss(outputLength))) {
            return outputLength;
        }
    }

    throw new Error('Out of range for charset length');
}