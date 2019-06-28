import system from '@rebass/components'
import { Link } from 'gatsby'
import { themeGet } from 'styled-system'

const UILink = system(
  {
    as: Link,
  },
  props => ({
    textDecoration: 'none',
    '&:hover': {
      color: `${themeGet('colors.blue600')(props)}`
    }
  }),
  'alignItems',
  'color',
  'display',
  'fontSize',
  'fontWeight',
  'space',
  'textDecoration',
)

UILink.Button = system(
  {
    as: Link,
    bg: 'teal700',
    borderRadius: 4,
    boxShadow: 1,
    color: 'teal100',
    display:' inline-block',
    fontSize: 2,
    fontWeight: 600,
    px: 3,
    py: 2,
  },
  props => ({
    textDecoration: 'none',
    '&:hover': {
      boxShadow: `${themeGet('shadows.2')(props)}`,
      backgroundColor: `${themeGet('colors.teal600')(props)}`
    }
  }),
  'borderRadius',
  'boxShadow',
  'color',
  'fontSize',
  'fontWeight',
  'display',
  'space',
)

UILink.External = system(
  {
    as: 'a',
  },
  'alignItems',
  'color',
  'display',
  'fontSize',
  'fontWeight',
  'space',
  'textDecoration',
)

export default UILink
