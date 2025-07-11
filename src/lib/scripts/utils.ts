type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];
type Locales = Intl.LocalesArgument;

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales: Locales = 'en') {
	// Apparently, Safari freaks out when it sees dashes in dates,
	// this is supposed to fix that.
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });

	return dateFormatter.format(dateToFormat);
}
