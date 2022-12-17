export default (dateOrDateString: string | Date | number): string => {
    const date: Date = new Date(dateOrDateString);
    let hr: number= date.getHours();
    const meridian: string = (hr < 12 ? (hr || (hr = 12)) && 'AM' : ((hr === 12) || (hr -= 12)) && 'PM') as string;
    const min: number = date.getMinutes();

    return `${hr}:${String(min).padStart(2, '0')} ${meridian}`;
};
