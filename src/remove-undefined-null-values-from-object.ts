/**
 * Remove undefined and null values from object
 */
export default (object: { [key: string]: unknown })
    : { [key: string]: unknown } => {
    return Object.fromEntries(
        Object.entries(object)
            .filter(
                ([, value]) =>
                    value !== undefined && value !== null
            )
    );
}
