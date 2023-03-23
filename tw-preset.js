module.exports = {
  content: ['./src/**/*.{html,tid,css}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme('colors.slate.100'),
              borderRadius: theme('borderRadius.sm'),
              padding: `${theme('padding.1')} ${theme('padding.1.5')}`,
              border: `none`,
            },
            'code::before': {
              content: 'normal',
            },
            'code::after': {
              content: 'normal',
            },
          },
        },
      }),
    },
  },
  darkMode: 'class',
  variants: {
    extend: {
      appearance: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  important: true,
  corePlugins: {
    preflight: false,
  },
};