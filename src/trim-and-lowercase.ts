export default (text: string): string => String(text ?? '')?.trim()?.toLowerCase();
