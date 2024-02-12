/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primaryDark:'#454d66',
				secondaryDark:'#454d66',
				primaryLight: '#58b368',
				secondaryLight: '#58b368',
				acentDark: '#dad873',
				acentLight: '#efeeb4',				
				forestGreen:'#1A5653',
				tealGreen:'#107869',
				limeGreen:'#5CD85A',
				forestDarkGreen:'#08313A'

			}
		},
	},
	plugins: [],
}
