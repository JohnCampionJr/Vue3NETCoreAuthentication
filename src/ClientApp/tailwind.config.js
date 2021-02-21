/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('windicss/colors')
const forms = require('windicss/plugin/forms')
const typography = require('windicss/plugin/typography')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.vue', './src/**/*.md', './src/**/*.js', './src/**/*.ts'],
    options: {
      safelist: ['prose', 'prose-sm', 'm-auto']
    }
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      opacity: ['dark', 'active', 'disabled']
    }
  },
  darkMode: 'class',
  plugins: [typography, forms],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b-70': 'linear-gradient(to bottom, var(--tw-gradient-stops) 70%)'
      },
      colors: {
        'blazor-blue': '#052767',
        'blazor-indigo': '#3a0647',
        teal: colors.teal
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              '&:hover': {
                opacity: 1,
                color: colors.teal[600]
              }
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' }
          }
        }
      }
    }
  }
}
