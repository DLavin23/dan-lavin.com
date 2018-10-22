const colors = {
  black: '#232323',
  blue: '#517dbc',
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
  red: '#c34848',
  redDark: '#9c292d',
  redLight: '#f7e2e2',
  white: '#ffffff',
  yellow: '#ffc58b',
  yellowDark: '#594430',
}

const fontSizes = [10, 12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

export default {
  borders: [0, '1px solid', '2px solid'],
  breakpoints: ['960px', '1200px', '1400px'],
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
  fonts: ['-apple-system, BlinkMacSystemFont, sans-serif'],
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600,
  },
  lineHeight: '1.5',
  listTypes: ['none', 'disc'],
  shadows: [
    'none',
    `inset 0 0 0 1px ${colors.grayLight}`,
    `inset 0 0 0 1px ${colors.grayLight}, 0 0 4px ${colors.gray}`,
    `0 2px 6px 0 ${colors.grayLight}`,
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  textColor: colors.offBlack,
}