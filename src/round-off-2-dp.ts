/**
 * Round off to absolute 2 dp, best results with javascript
 * Use case is in displaying financial amounts with exact fractional part
 */
export default (number: number): number => Math.round((number + Number.EPSILON) * 100) / 100;
