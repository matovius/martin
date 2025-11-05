/**
 * @typedef DateTypes
 * @prop { Intl.DateTimeFormatOptions['dateStyle'] } dateStyle
 * @prop { Intl.LocalesArgument } locales
 */

/** @type { (text: string) => Promise<boolean> } */
export async function copyText(text) {
	/** @type boolean */
	let copied = false;
	if (window) {
		await window.navigator.clipboard.writeText(text).then(() => {
			copied = true;
		});
	}

	return copied;
}

/** @type { (date: string, dateStyle: DateTypes["dateStyle"], locales: DateTypes["locales"] ) => string } */
export function formatDate(date, dateStyle = 'medium', locales = 'en') {
	// Apparently, Safari freaks out when it sees dashes in dates,
	// this is supposed to fix that.
	/** @type { Date } */
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	/** @type { Intl.DateTimeFormat } */
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });

	return dateFormatter.format(dateToFormat);
}
