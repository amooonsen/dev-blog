import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			pretendard: ['var(--font-pretendard)']
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					'h2, h3, h4': {
  						scrollMarginTop: '5rem'
  					},
  					p: {
  						marginTop: '1rem',
  						marginBottom: '1rem'
  					},
  					'.callout-contents > p': {
  						margin: '0'
  					},
  					code: {
  						counterReset: 'line'
  					},
  					':not(pre) > code': {
  						fontWeight: 'inherit',
  						position: 'relative',
  						bottom: '1',
  						margin: '0 3px',
  						color: '#eb5757',
  						backgroundColor: 'rgba(135,131,120,0.15)',
  						fontFamily: 'SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
  						borderRadius: '3',
  						padding: '0.2em 0.4em',
  						overflowWrap: 'break-word'
  					},
  					'code::before': {
  						content: 'none'
  					},
  					'code::after': {
  						content: 'none'
  					},
  					'code[data-line-numbers] > [data-line]::before': {
  						counterIncrement: 'line',
  						content: 'counter(line)',
  						display: 'inline-block',
  						width: '1rem',
  						marginRight: '1.4rem',
  						textAlign: 'right',
  						color: 'lightgrey',
  						fontSize: '0.75rem'
  					},
  					'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
  						width: '1rem'
  					},
  					'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
  						width: '2rem'
  					},
  					pre: {
  						paddingRight: '0',
  						paddingLeft: '0',
  						color: 'var(--shiki-light)',
  						backgroundColor: 'var(--shiki-light-bg)',
  						border: '1px solid #e5e7eb'
  					},
  					'.dark pre': {
  						backgroundColor: 'var(--shiki-dark-bg)',
  						color: 'var(--shiki-dark)',
  						border: '1px solid #374151'
  					},
  					'pre > code > span': {
  						paddingLeft: '1.1rem',
  						paddingRight: '1rem'
  					},
  					'pre code span': {
  						color: 'var(--shiki-light)'
  					},
  					'.dark pre code span': {
  						color: 'var(--shiki-dark)'
  					},
  					[data-highlighted-line]: {
  						backgroundColor: 'rgba(253, 224, 71, 0.2)'
  					},
  					'.project img': {
  						marginTop: '0px !important'
  					},
  					'.project p,ul,li': {
  						fontSize: '15'
  					},
  					u: {
  						textUnderlineOffset: '4px',
  						textDecorationThickness: '1',
  						fontWeight: '600'
  					}
  				}
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
