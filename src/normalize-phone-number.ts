export default (phoneNumber: string, countryCode: string = '234'): string => {
    let phone: string = String(phoneNumber).trim()/*.replace(/\D/g, '')*/;

    if (phone.charAt(0) === '+') {
        return phone;
    } else if (phone.charAt(0) === '(') {
        return `+${countryCode} ${phone}`;
    } else if (phone.length < 12) {
        return `+${countryCode}${phone.substring(1)}`;
    }

    return `+${phone}`;
}