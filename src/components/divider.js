import system from 'system-components'

const Divider = system(
  {
    is: 'div',
    borderBottom: '6px solid',
    borderColor: 'green',
    color: 'green',
    my: 4,
    maxWidth: '72px'
  },
  'border',
  'borderBottom',
  'borderColor',
  'color',
  'maxWidth',
  'width',
)

export default Divider
