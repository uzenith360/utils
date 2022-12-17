export default (
    length: number = 5,
    charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321'
): string => {
    let str: string = '';

    for (let counter: number = 0, charsetLength: number = charset.length; counter < length; counter += 1) {
        str += charset.charAt(Math.floor(Math.random() * charsetLength));
    }

    return str;
}