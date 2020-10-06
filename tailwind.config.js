module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
 // purge: {
 //   enabled: true,
 //   content: ['frontend/*.html'],
 // },
  theme: {
    backgroundColor: theme => ({
        ...theme('colors'),
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
    }),
    borderColor: theme => ({
        ...theme('colors'),
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
    }),
    fontFamily: {
        orbitronblack: ['orbitronblack', 'sans-serif'],
        'sans': ['Arial', 'sans-serif'],
    },
    extend: {
    
    colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
    },
    },
  },
  variants: {},
  plugins: [],
}
