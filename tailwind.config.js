/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px'
		},
		extend: {
			colors: {
				'tang-blue': '#0c60df'
			},
			fontFamily: {
				inter: ['Inter Variable', 'sans-serif'],
				rubik: ['Rubik Variable', 'sans-serif']
			}
		}
	},
	plugins: []
};
