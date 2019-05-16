import system from 'system-components'
import Box from '../components/box'

const Panel = system(
  {
    is: Box,
    bg: 'white',
    border: '1px solid',
    borderColor: 'grayLight',
    borderRadius: 4,
    m: 0,
    p: 3,
  },
  {
    boxShadow: '0 2px 4px rgba(153,153,153,0.50)',
  },
  'color',
  'space',
)

export default Panel