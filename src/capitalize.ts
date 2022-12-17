export default (text: string): string => {
    const trimmedString: string = String(text ?? '').trim();
    
    return `${trimmedString.charAt(0).toUpperCase()}${trimmedString.substring(1).toLowerCase()}`
}
