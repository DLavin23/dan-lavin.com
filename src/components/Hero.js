import React from 'react'
import system from 'system-components'

const Hero = system({
  is: 'div',
  py: 4,
},
  'display',
  'color',
  'space',
)

const HeroHeadline = ({ children }) => {
  return (
    <Hero>
      {children}
    </Hero>
  )
}

export default Hero