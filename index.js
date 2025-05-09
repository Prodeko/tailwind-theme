const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const faces = require('./font-faces.js')

module.exports = plugin.withOptions(
    () =>
        function ({ addBase, theme }) {
            addBase({
                '@font-face': faces
            })

            addBase({
                html: { fontFamily: theme('fontFamily.raleway') },
            })
        },
    () => ({
        theme: {
            extend: {
                fontFamily: {
                    raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
                },
                colors: {
                    prodeko: {
                        light: '#0053a0',
                        medium: '#002e7d',
                        DEFAULT: '#002e7d',
                        dark: '#002851',
                    }
                }
            }
        }
    })
)
