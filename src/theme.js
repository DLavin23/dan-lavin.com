const colors = {
  black: '#232323',
  blue: '#1F3A93',
  blueDark: '#2d5d95',
  blueLight: '#CDECFF',
  green: '#63bab0',
  greenDark: '#04575b',
  greenLight: '#79e9dd',
  greenXLight: '#ebfcfa',
  grayLight: '#dfdfdf',
  gray: '#999999',
  grayDark: '#666666',
  offBlack: '#484848',
  offWhite: '#f7f7f7',
  purple: '#6537ed',
  red: '#c34848',
  redDark: '#9c292d',
  redLight: '#f7e2e2',
  white: '#ffffff',
  yellow: 'hsla(55, 100%, 75%, 1)',
  yellowDark: '#594430',
}

const fontSizes = [10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96]
const space = [0, 4, 8, 16, 32, 64, 128, 256]

export default {
  borders: [0, '1px solid', '2px solid'],
  breakpoints: ['600px', '900px'],
  colors,
  colorStyles: {
    default: {
      backgroundColor: colors.grayLight,
      color: colors.grayDark,
    },
    info: {
      backgroundColor: colors.blueLight,
      color: colors.blueDark,
    },
    primary: {
      backgroundColor: colors.green,
      color: colors.white,
    },
    danger: {
      backgroundColor: colors.red,
      color: colors.white,
    },
    warning: {
      backgroundColor: colors.yellow,
      color: colors.yellowDark,
    },
  },
  fontSizes,
  // fonts: ['-apple-system, BlinkMacSystemFont, sans-serif'],
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600,
  },
  shadows: [
    'none',
    '0 1px 2px 0 hsla(0, 0%, 0%, 0.2)',
    '0 2px 4px 0 hsla(0, 0%, 0%, 0.2)',
  ],
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  },
  listTypes: ['none', 'disc'],
  space,
  textColor: colors.offBlack,
}