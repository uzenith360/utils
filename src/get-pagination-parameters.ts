/**
 * This function helps in pagination queries, calculates the number of records to skip
 */
export default (page: number, limit: number)
    : { toSkip: number, limit: number } => (
    {
        limit,
        toSkip: limit * (page > 1 ? page - 1 : 0),
    }
);