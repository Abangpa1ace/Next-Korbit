module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '500px'}
    },
    extend: {
      fontSize: {
        '12': ['12px', { lineHeight: '1.5' }],
        '14': ['14px', { lineHeight: '1.5' }],
        '18': ['18px', { lineHeight: '1' }],
        '20': ['20px', { lineHeight: '1' }],
      }
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1024px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '60px 30px',
          '@screen lg': {
            maxWidth: '100%',
          },
        }
      })
    },
    require('tailwindcss-percentage-width'),
    require('tailwindcss-children')
  ],
}
