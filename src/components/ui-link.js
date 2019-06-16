import system from '@rebass/components'
import { Link } from 'gatsby'

const UILink = system({
  as: Link,
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
