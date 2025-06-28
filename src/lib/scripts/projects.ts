import { type Project } from '$lib/scripts/types';

export const projects: Project[] = [
	{
		name: 'Micronote',
		year: 2025,
		soundbite: 'Nuevo personal thought collector, a work in progress',
		description:
			'A delightful micro-journaling app that expands on bullet journaling and encourages you to write more',
		url: 'https://micronote.pages.dev',
		isFeatured: true
	},
	{
		name: 'Webware Studio',
		year: 2025,
		soundbite: 'Website-making studio',
		description: 'An upstart web design and development studio founded by me and my friend',
		url: 'https://webware.studio'
	},
	{
		name: 'Moments',
		year: 2024,
		soundbite: 'Personal thought collector, now defunct, improved into Micronote',
		description:
			'A relatively simple journaling app for taking unstructured notes and keeping track of your life',
		url: 'https://moments-app.pages.dev',
		isFeatured: true
	},
	{
		name: 'Forgotten',
		year: 2024,
		soundbite: 'Ephemeral task tracker',
		description: 'A micro todo list app for recording ephemeral tasks',
		url: 'https://forgotten.pages.dev',
		isFeatured: true
	},
	{
		name: 'psswrds',
		year: 2024,
		soundbite: 'Password formation engine',
		description: 'A simple password generator that uses sweet animations to reveal them',
		url: 'https://psswrds.pages.dev',
		isFeatured: true
	},
	{
		name: 'Built By',
		year: 2023,
		description: 'Creative adjectives for project footers',
		url: 'https://built-by.pages.dev'
	}
];
