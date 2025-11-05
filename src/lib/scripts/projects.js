// import { type Project } from '$lib/scripts/types';

/**
 * @typedef Project
 * @prop { string } name
 * @prop { string } description
 * @prop { number } year
 * @prop { string } url
 * @prop { string | null } soundbite
 * @prop { boolean } isOngoing
 * @prop { boolean } isFeatured
 */

/**
 * @type { Project[] }
 */
export const projects = [
	// {
	// 	name: 'Micronote',
	// 	description:
	// 		'A delightful micro-journaling app that expands on bullet journaling and encourages you to write more',
	// 	year: 2025,
	// 	url: 'https://micronote.pages.dev',
	// 	soundbite: 'Nuevo personal thought collector, a work in progress',
	// 	isOngoing: false,
	// 	isFeatured: true
	// },
	// {
	// 	name: 'Webware Studio',
	// 	description: 'An upstart web design and development studio founded by me and my friend',
	// 	year: 2025,
	// 	url: 'https://webware.studio',
	// 	soundbite: 'Website-making studio',
	// 	isOngoing: true,
	// 	isFeatured: false
	// },
	// {
	// 	name: 'Moments',
	// 	description:
	// 		'A relatively simple journaling app for taking unstructured notes and keeping track of your life',
	// 	year: 2024,
	// 	url: 'https://moments-app.pages.dev',
	// 	soundbite: 'Personal thought collector, now defunct, improved into Micronote',
	// 	isOngoing: false,
	// 	isFeatured: true
	// },
	{
		name: 'Forgotten',
		description: 'A micro todo list app for recording ephemeral tasks',
		year: 2024,
		url: 'https://forgotten.pages.dev',
		soundbite: 'Ephemeral task tracker',
		isOngoing: false,
		isFeatured: true
	},
	{
		name: 'psswrds',
		description: 'A simple password generator that uses sweet animations to reveal them',
		year: 2024,
		url: 'https://psswrds.pages.dev',
		soundbite: 'Password formation engine',
		isOngoing: false,
		isFeatured: true
	},
	{
		name: 'Built By',
		description: 'Creative adjectives for project footers',
		year: 2023,
		url: 'https://built-by.pages.dev',
		soundbite: null,
		isOngoing: false,
		isFeatured: true
	}
];
