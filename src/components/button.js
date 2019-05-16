import system from 'system-components'
import { Link } from 'gatsby'

const Button = system({
  is: 'button',
  bg: 'blue',
  borderRadius: 3,
  color: 'white',
  fontSize: 1,
  px: 3,
  py: 2,
})

Button.Link = system(
  {
    is: Link,
  }
)

Button.External = system(
  {
    is: 'a',
  }
)

export default Button
