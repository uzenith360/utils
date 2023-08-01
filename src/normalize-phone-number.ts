export default (phoneNumber: string, countryCode: string = '234'): string => {
    const phone: string = String(phoneNumber).replace(/[^\+0-9]/g, '')/*.trim()*//*.replace(/\D/g, '')*/;

    if (phone.charAt(0) === '+') {
        return phone;
    } /*else if (phone.charAt(0) === '(') {
        return `+${countryCode} ${phone}`;
    }*/ else if (phone.length === 10) {
        return `+${countryCode}${phone}`;
    } /*else if (phone.length < 12) {
        return `+${countryCode}${phone.substring(1)}`;
    }*/ else if (phone.charAt(0) === '0') {
        return `+${countryCode}${phone.substring(1)}`;
    }

    return `+${phone}`;
}
