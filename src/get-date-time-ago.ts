// default time units for getDateDiff
/*export*/ const DATE_DIFF_DEF = Object.freeze({
	millennium: 31536000000000,
	century: 3153600000000,
	decade: 315360000000,
	year: 31536000000,
	// quarter:	7776000000,
	month: 2592000000,
	week: 604800000,
	day: 86400000,
	hour: 3600000,
	minute: 60000,
	// second:		1000,
	// millisecond:1
});

/*export*/ type DateDiffKey = keyof typeof DATE_DIFF_DEF;
/*export*/ type DateDifference = Record<DateDiffKey, number>;
/* export */ type ShortenDateDiffKeys = Record<DateDiffKey, string>;

/*export*/ const DATE_DIFF_KEYS = Object.freeze(Object.keys(DATE_DIFF_DEF)) as DateDiffKey[];

/* export */ const SHORTEN_DATE_DIFF_KEYS = {
	millennium: 'm',
	century: 'c',
	decade: 'dc',
	year: 'yr',
	quarter: 'qt',
	month: 'mnth',
	week: 'wk',
	day: 'dy',
	hour: 'hr',
	minute: 'min',
	second: 'sec',
	millisecond: 'msec',
} as ShortenDateDiffKeys;

/**
 * ☃ getDateDiff "Snowman Carl" (http://stackoverflow.com/questions/13903897)
 * Returns a detail object about the difference between two dates
 *
 * When providing custom units, provide them in descending order (eg week,day,hour; not hour,day,week)
 *
 * @param {Date} dateStart - date to compare to
 * @param {Date|string} [dateEnd=new Date()] - second date, can be used as unit param instead
 * @returns {DateDifference}
 */
function getDateDiff(
	dateStart: Date,
	dateEnd: Date | string = new Date()
): DateDifference {
	if (typeof dateEnd === 'string')
		dateEnd = new Date();

	let delta: number = Math.abs(dateStart.getTime() - dateEnd.getTime());

	return DATE_DIFF_KEYS
		.reduce<DateDifference>((res: DateDifference, key: DateDiffKey) => {
			res[key] = Math.floor(delta / DATE_DIFF_DEF[key]);
			delta -= res[key] * DATE_DIFF_DEF[key];
			return res;
		}, {} as DateDifference);
}

function isValidDate(date: string | number | Date): boolean {
	return !isNaN(new Date(date).getTime());
}

function getSecondsInTimestamp(dateStart: string | number | Date, dateEnd: string | number | Date): string {
	const secsInMsecs: number = Math.floor(Math.abs(new Date(dateStart).getTime() - new Date(dateEnd).getTime()) / 1000);

	return !!secsInMsecs ? secsInMsecs + ' sec' + (secsInMsecs > 1 ? 's' : '') : 'Instant';
}

export default (dateStart: string | number | Date, dateEnd?: string | number | Date): string => {
	if (!dateEnd || !isValidDate(dateStart) || !isValidDate(dateEnd)) {
		return '';
	}

	const dateDifference: DateDifference = getDateDiff(new Date(dateStart), new Date(dateEnd));
	const dateDiffResult: string = Object.keys(dateDifference).filter((part: string) => !!dateDifference[part as DateDiffKey]).map(
		(part: string) => {
			const dateDiffValue: number = dateDifference[part as DateDiffKey];

			return `${dateDiffValue} ${SHORTEN_DATE_DIFF_KEYS[part as DateDiffKey]}${dateDiffValue > 1 ? 's' : ''}`;
		},
	).join(' ');

	return !!dateDiffResult ? dateDiffResult : getSecondsInTimestamp(dateStart, dateEnd);
}