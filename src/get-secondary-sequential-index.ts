import getSequentialStringOptimalLength from "./get-sequential-string-optimal-length";

/**
 * This method helps to calculate the actual index used to generate the sequential string
 * 
 * @param serialNumber The running serial number
 * @param charsetLength The length of the character set that would be used to generate the sequential string 
 */


export default (serialNumber: number, charsetLength: number): { length: number, index: number } => {
    const length: number = getSequentialStringOptimalLength(serialNumber, charsetLength);
    let secondaryIndexDifference: number = 0;

    for (
        let stringSequenceLength = length - 1;
        stringSequenceLength > 0;
        stringSequenceLength -= 1
    ) {
        secondaryIndexDifference += (charsetLength ** stringSequenceLength);
    }

    return { index: serialNumber - secondaryIndexDifference, length };
}
