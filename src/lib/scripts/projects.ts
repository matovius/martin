import { type Project } from '$lib/scripts/types';

export const projects: Project[] = [
	{
		name: 'Webware Studio',
		year: 2025,
		description: 'An upstart web design and development studio founded by me and my friend.',
		url: 'https://webware.studio'
	},
	{
		name: 'Moments',
		year: 2024,
		description:
			'A relatively simple journaling app for taking unstructured notes and keeping track of your life.',
		url: 'https://moments-app.pages.dev',
		isOngoing: true,
		isFeatured: true
	},
	{
		name: 'Forgotten',
		year: 2024,
		description: 'A micro todo list app for recording ephemeral tasks.',
		url: 'https://forgotten.pages.dev',
		isFeatured: true
	},
	{
		name: 'psswrds',
		year: 2024,
		description: 'A simple password generator that uses sweet animations to reveal them.',
		url: 'https://psswrds.pages.dev',
		isFeatured: true
	},
	{
		name: 'Built By',
		year: 2024,
		description: 'For when you want some cretive adjectives for your project footers.',
		url: 'https://built-by.pages.dev'
	}
];
