/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				background: '#EFF0F6',
				bordercolor: '#d7d6fc',
				primarypurple: '#6B00F5',
				pattensblue: '#e1f0fe',
				ghostwhite: '#f7f7ff',
				whiteice: '#defef0',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
