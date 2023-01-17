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
			peachLight: '#FFAD9B',
			gray: '#F1F3F5',
			grayDark: '#333136',
			black: '#1D1C1E',
			white: '#FFFFFF',
		},
		fontFamily: {
			sans: ['Jost', 'sans-serif'],
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-heading-xl': {
					'font-size': '48px',
					'font-weight': '500',
					'line-height': '48px',
				},
				'.text-heading-l': {
					'font-size': '40px',
					'font-weight': '500',
					'line-height': '48px',
					'letter-spacing': '2px',
				},
				'.text-heading-m': {
					'font-size': '20px',
					'font-weight': '500',
					'line-height': '26px',
					'letter-spacing': '5px',
				},
				'.text-body': {
					'font-size': '16px',
					'font-weight': '400',
					'line-height': '26px',
				},
				'.text-label': {
					'font-size': '15px',
					'font-weight': '500',
					'letter-spacing': '1px',
				},
			}
			addUtilities(newUtilities)
		},
	],
}
