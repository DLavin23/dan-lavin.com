import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  headerFontFamily: [
    "Open Sans", "-apple-system", "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell", "Helvetica Neue"
  ],
  bodyFontFamily: ["Open Sans", "-apple-system", "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell", "Helvetica Neue"],
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '100',
        '300',
        '400',
        '700',
        '900',
      ],
    },
  ],
})

export default typography