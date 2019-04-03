import system from 'system-components'

const Tag = system(
  {
    is: 'div',
    bg: 'white',
    border: '1px solid',
    borderColor: 'grayLight',
    borderRadius: 4,
    display: 'inline-flex',
    fontSize: 2,
    py: 1,
    px: 2,
    mb: 3,
  },
  {
    boxShadow: '#dfdfdf 0 3px 10px',
  }
)

export default Tag
