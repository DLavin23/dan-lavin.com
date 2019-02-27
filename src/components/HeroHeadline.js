import React from 'react'
import system from 'system-components'

const Header = system({
  is: 'header',
})

const Headline = system({
  is: 'h2',
  color: 'offBlack',
  fontSize: [5,6,7],
  lineHeight: '1.25',
  m: 0,
  pb: 3,
},
)

const HeroHeadline = ({ children }) => {
  return (
    <Header>
      <Headline>{children}</Headline>
    </Header>
  )
}

export default HeroHeadline