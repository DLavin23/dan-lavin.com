import system from 'system-components'
import { Link } from 'gatsby'

const UILink = system({
  is: Link,
},
  {
    textDecoration: 'none',
  },
  'color',
  'fontWeight',
  'space',
  'textDecoration',
)

export default UILink
