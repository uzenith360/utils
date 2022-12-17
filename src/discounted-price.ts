export default (value: number, discountAmount: number = 0, discountPercent: number = 0): number =>
    value - discountAmount - (value * (discountPercent / 100));
