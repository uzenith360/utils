/**
 * This method helps to generate serial strings from a base 10 number (serial number)
 * e.g 1 - 22222, 2 - 22223, 2 - 22224 ..., using the charset provided
 * This is useful when you want constant lenght, serial string sequences for IDs without collisions
 * 
 * @param serialNumber The running serial number
 * @param outputLength The length of generated string sequence
 * @param charset The character set used to generate the string sequence
 */
export default (
    serialNumber: number,
    outputLength: number = 32,
    charset: string = '2346789ABCDEFHKLMNPQRTVWXY',
): string => {
    const charsetLength: number = charset.length;
    const output: string[] = [];

    for (
        let outputPosition: number = 1, runningRemindand: number = serialNumber, outputPositionWeight: number;
        outputPosition <= outputLength;
        outputPosition += 1
    ) {
        outputPositionWeight = runningRemindand % charsetLength;
        runningRemindand = Math.floor(runningRemindand / charsetLength);

        output.unshift(charset.charAt(outputPositionWeight));
    }

    return output.join('');
}