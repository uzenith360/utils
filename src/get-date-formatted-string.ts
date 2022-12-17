export default (timestampOrdateOrDateString: number | string | Date): string => {
    const date: Date = new Date(timestampOrdateOrDateString);
    const mnth: number = date.getMonth() + 1;
    const dy: number = date.getDate();

    return String(dy).padStart(2, '0') + '/' + String(mnth).padStart(2, '0') + '/' + date.getFullYear();
}
