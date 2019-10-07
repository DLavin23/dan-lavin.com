export default {
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  useCustomProperties: false,
  breakpoints: [
    '600px', '900px', '1100px',
  ],
  colors: {
    accent: '#2D3748',
    background: '#F7FAFC',
    heading: '#4A5568',
    offset: '#fff',
    muted: '#A0AEC0',
    primary: '#5A67D8',
    secondary: '#667EEA',
    linkAccent: '#E9D8FD',
    text: '#2D3748',
    white: '#fff',
    hr: '#E2E8F0',
    gray100: '#F7FAFC',
    gray200: '#EDF2F7',
    gray300: '#E2E8F0',
    gray400: '#CBD5E0',
    gray500: '#A0AEC0',
    gray600: '#718096',
    gray700: '#4A5568',
    gray800: '#2D3748',
    gray900: '#1A202C',
    modes: {
      dark: {
        accent: '#A0AEC0',
        heading: '#CBD5E0',
        text: '#E2E8F0',
        background: '#1A202C',
        offset: '#4A5568',
        primary: '#667EEA',
        hr: '#718096'
      }
    },
  },
  fonts: {
    body: 'Open Sans, system-ui, sans-serif',
    heading: 'Open Sans, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 800,
  },
  textStyles: {
    uppercase: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125,
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  shadows: {
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xlarge: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xxlarge: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none'
  },
  styles: {
    a: {
      borderBottom: '2px solid',
      borderColor: 'linkAccent',
      color: 'primary',
      fontFamily: 'body',
      fontWeight: '600',
      textDecoration: 'none',
      ':hover,:focus': {
        bg: 'linkAccent',
        color: 'secondary',
      }
    },
    Container: {
      maxWidth: 1024,
      px: [3,4,5],
      py: 0,
    },
    Header: {
      display: 'block',
      fontFamily: 'body'
    },
    Footer: {
      display: 'block',
      fontFamily: 'body'
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
  }
}


// black: '#00',
// white: '#ffffff',
// gray100: '#F7FAFC',
// gray200: '#EDF2F7',
// gray300: '#E2E8F0',
// gray400: '#CBD5E0',
// gray500: '#A0AEC0',
// gray600: '#718096',
// gray700: '#4A5568',
// gray800: '#2D3748',
// gray900: '#1A202C',
// blue100: '#EBF8FF',
// blue200: '#BEE3F8',
// blue300: '#90CDF4',
// blue400: '#63B3ED',
// blue500: '#4299E1',
// blue600: '#3182CE',
// blue700: '#2B6CB0',
// blue800: '#2C5282',
// blue900: '#2A4365',
// green100: '#F0FFF4',
// green200: '#C6F6D5',
// green300: '#9AE6B4',
// green400: '#68D391',
// green500: '#48BB78',
// green600: '#38A169',
// green700: '#2F855A',
// green800: '#276749',
// green900: '#22543D',
// teal100: '#E6FFFA',
// teal200: '#B2F5EA',
// teal300: '#81E6D9',
// teal400: '#4FD1C5',
// teal500: '#38B2AC',
// teal600: '#319795',
// teal700: '#2C7A7B',
// teal800: '#285E61',
// teal900: '#234E52',
// indigo100: '#EBF4FF',
// indigo200: '#C3DAFE',
// indigo300: '#A3BFFA',
// indigo400: '#7F9CF5',
// indigo500: '#667EEA',
// indigo600: '#5A67D8',
// indigo700: '#4C51BF',
// indigo800: '#434190',
// indigo900: '#3C366B',
// purple100: '#FAF5FF',
// purple200: '#E9D8FD',
// purple300: '#D6BCFA',
// purple400: '#B794F4',
// purple500: '#9F7AEA',
// purple600: '#805AD5',
// purple700: '#6B46C1',
// purple800: '#553C9A',
// purple900: '#44337A',