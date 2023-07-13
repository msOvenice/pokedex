/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
	primary: '#A40D0D',
	'dark-primary': '#9C0D0F',
	white: '#FFF',
	gray: '#9D9C9D',
	'dark-gray': '#5D5D5D',
	'light-gray': '#e3e3e3',
	black: '#090909',
	violet: '#7b6387',
	yellow: '#f5e702'
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
	fontFamily: {
		'dosis': ['Dosis', 'sans-serif'],
		'open-sans': ['Open Sans', 'sans-serif']
	},
    colors: {
			transparent: colors.transparent,
			...constants
		},
    extend: {
		height: {
			'calc': 'calc(100vh - 100px)'
		},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			},
      keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
    },
  },
  plugins: [],
}
