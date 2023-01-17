/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '320px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
		colors: {
			peach: '#E7816B',
			peach_light: '#FFAD9B',
			gray: '#F1F3F5',
			gray_dark: '#333136',
			black: '#1D1C1E',
			white: '#FFFFFF',
		},
	},
	plugins: [],
}
