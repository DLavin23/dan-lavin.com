import system from '@rebass/components'
import { themeGet } from 'styled-system'

const Highlight = system({
  as: 'span',
},
  props => ({
    position: 'relative',
    zIndex: 1,
    '&::after': {
      backgroundColor: `${themeGet('colors.yellow')(props)}`,
      bottom: '5px',
      content: '" "',
      height: '20px',
      left: '-5px',
      opacity: '1',
      position: 'absolute',
      transform: 'rotate(-2deg)',
      width: '100%',
      zIndex: '-1',
    },
  }),
  'background',
  'color',
  'space',
  'height',
)

export default Highlight
