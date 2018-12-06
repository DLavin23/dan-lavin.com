import system from 'system-components'

const Text = system(
  {
    fontSize: 3,
    lineHeight: '1.5',
    m: 0,
    textStyle: 'normal',
  },
  props => ({
    overflow: props.truncate ? 'hidden' : null,
    textOverflow: props.truncate ? 'ellipsis' : null,
    whiteSpace: props.truncate ? 'nowrap' : null,
  }),
  'color',
  'display',
  'flex',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'space',
  'textStyle',
  'textAlign',
  'width'
)

Text.displayName = 'Text'

export default Text
