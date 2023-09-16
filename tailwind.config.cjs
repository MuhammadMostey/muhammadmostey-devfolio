/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	darkMode: "class",

	theme: {
		extend: {
			colors:	{
				light: "#f5f5f5",
				dark: "#1b1b1b",
				orange: "#FFAC41", 
				pink: "#FF1E56",
			},
			spacing: {
				'18' : '4.5rem',
				'20' : '5rem',
				'0.25': '0.0625rem',
			},
		},
	},
	plugins: [],
}
