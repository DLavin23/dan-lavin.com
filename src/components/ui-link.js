import system from 'system-components'
import { Link } from 'gatsby'

const UILink = system({
  is: Link,
},
  {
    textDecoration: 'none',
  },
  'alignItems',
  'color',
  'display',
  'fontSize',
  'fontWeight',
  'space',
  'textDecoration',
)

UILink.External = system(
  {
    is: 'a',
    color: 'purple'
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
