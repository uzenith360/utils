export default (amount: number, currencySymbol: string = '₦', minimumFractionDigits: number = 2, maximumFractionDigits: number = 2): string => {
    return `${currencySymbol}${Number(amount || 0).toLocaleString(undefined, { maximumFractionDigits, minimumFractionDigits, })}`;
}
