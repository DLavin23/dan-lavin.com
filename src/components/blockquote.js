import system from '@rebass/components'

const Blockquote = system(
  {
    as: 'blockquote',
    borderColor: 'grayLight',
    borderLeft: '5px solid',
    p: 3,
  },
  'borderLeft',
  'borderColor',
  'color',
  'space',
  'maxWidth',
  'width',
)

export default Blockquote
